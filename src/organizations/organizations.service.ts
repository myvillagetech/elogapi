/* eslint-disable prettier/prettier */
import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { UserActivityLogDocument } from 'src/users/schemas/user.activitylog';
import { UserDocument } from 'src/users/schemas/user.schemas';
import { UsersService } from 'src/users/users.service';
import { OrganizationSearchCriteriaDto } from './dto/organization.searchCriteria.dto';
import {
    OrganizationDto,
    updateOrganizationDto,
} from './dto/organizations.dto';
import { OrganizationDocument } from './schemas/organizations.schema';
import * as dayjs from 'dayjs';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class OrganizationsService {
    @InjectModel(MODEL_ENUMS.ORGANIZATIONS)
    private organizationsModel: Model<OrganizationDocument>;
    @InjectModel(MODEL_ENUMS.USERS_ACTIVITY_LOG)
    private userActivityLogsModel: Model<UserActivityLogDocument>;
    constructor(
        private userService: UsersService,
        private readonly authService: AuthService,
    ) {}

    async createOrganization(
        createOrganizationDto: OrganizationDto,
        tokenHeader: string,
    ): Promise<OrganizationDocument> {
        const decodedToken: any = this.authService.getDecodedToken(tokenHeader);
        const newOrganization = await new this.organizationsModel({
            ...createOrganizationDto,
            orgActivityAutoIncrementId: 0,
        });
        await this.userService.addOrganizationToUser(decodedToken._id, newOrganization._id.toString())
        
        return newOrganization.save();
    }

    async getOrganizationById(id: string): Promise<OrganizationDocument> {
        const existingUser = await this.organizationsModel.findById(id);
        if (!existingUser) {
            throw new NotFoundException(`organization with ${id} is not found`);
        }
        return existingUser;
    }

    async getAllOrganizations(): Promise<OrganizationDocument[]> {
        const organizations = await this.organizationsModel.find();
        if (!organizations || organizations.length == 0) {
            throw new NotFoundException('organization data not found!');
        }
        return organizations;
    }

    async getAllOrganizationsbyUserId(
        userId: string,
    ): Promise<OrganizationDocument[]> {
        const user: UserDocument = await this.userService.getUserById(userId);

        const organizations = this.organizationsModel.find({
            _id: { $in: user.organization },
        });

        if (organizations) {
            return organizations;
        } else {
            throw new NotFoundException('organizations data not found!');
        }
    }

    async organizationTextSerach(
        searchString: string,
    ): Promise<OrganizationDocument[]> {
        const search = searchString
            ? {
                  $or: [
                      {
                          organization: new RegExp(
                              searchString.toString(),
                              'i',
                          ),
                      },
                      { shortName: new RegExp(searchString.toString(), 'i') },
                  ],
              }
            : {};

        const results = await this.organizationsModel.find(search);
        return results;
    }

    async organizationSearchCriteria(
        criteria: OrganizationSearchCriteriaDto,
    ): Promise<any> {
        const search = { $and: [] };

        if (criteria.organization) {
            search.$and.push({
                $or: [
                    {
                        organization: new RegExp(
                            criteria.organization.toString(),
                            'i',
                        ),
                    },
                    {
                        shortName: new RegExp(
                            criteria.organization.toString(),
                            'i',
                        ),
                    },
                ],
            });
        }

        if (criteria.organizationId) {
            search.$and.push({
                _id: new Types.ObjectId(criteria.organizationId),
            });
        }

        if (criteria.isActive !== null && criteria.isActive !== undefined) {
            search.$and.push({ isActive: criteria.isActive });
        }

        if (criteria.type) {
            search.$and.push({ type: criteria.type });
        }

        if (criteria.userId) {
            search.$and.push({
                'users._id': new Types.ObjectId(criteria.userId),
            });
        }

        if (criteria.userSearch) {
            search.$and.push({
                'users.Name': new RegExp(criteria.userSearch.toString(), 'i'),
            });
        }

        let paginationProps: any = [
            { $match: search.$and.length > 0 ? search : {} },
        ];

        if (
            (criteria.pageSize || criteria.pageSize > 0) &&
            (criteria.pageNumber || criteria.pageNumber === 0)
        ) {
            paginationProps.push({
                $skip: criteria.pageNumber * criteria.pageSize,
            });
            paginationProps.push({ $limit: criteria.pageSize });
        }

        let sortObject;
        if (criteria.sortField) {
            sortObject = {};
            sortObject[criteria.sortField] = criteria.sortOrder;
            paginationProps.push({ $sort: sortObject });
        }

        const matchQuery = criteria.userId
            ? {
                  'users._id': criteria.userId
                      ? new Types.ObjectId(criteria.userId)
                      : '',
              }
            : {};
        const metrics = await this.organizationsModel.aggregate([
            {
                $lookup: {
                    from: MODEL_ENUMS.USERS,
                    localField: '_id',
                    foreignField: 'organization',
                    as: 'users',
                    pipeline: [{ $project: { password: 0 } }],
                },
            },
            {
                $match: matchQuery,
            },
            {
                $facet: {
                    active: [
                        { $match: { isActive: true } },
                        { $count: 'activeOrganizatiosns' },
                    ],
                    inActive: [
                        { $match: { isActive: false } },
                        { $count: 'inActiveOrganizatiosns' },
                    ],
                    ministries: [
                        {
                            $match: {
                                type: '63973bfb61ab6f49bfdd3c35',
                                isActive: true,
                            },
                        },
                        { $count: 'ministriesCount' },
                    ],
                    associations: [
                        {
                            $match: {
                                type: '63973c8961ab6f49bfdd3c38',
                                isActive: true,
                            },
                        },
                        { $count: 'associationCount' },
                    ],
                },
            },
        ]);
        const results: any = await this.organizationsModel.aggregate([
            {
                $lookup: {
                    from: MODEL_ENUMS.USERS,
                    localField: '_id',
                    foreignField: 'organization',
                    as: 'users',
                    pipeline: [{ $project: { password: 0 } }],
                },
            },
            {
                $lookup: {
                    from: MODEL_ENUMS.ACTIVITIES,
                    localField: '_id',
                    foreignField: 'createdByOrganization',
                    as: 'activities',
                },
            },
            {
                $addFields: {
                    activities: { $size: '$activities' },
                },
            },
            {
                $facet: {
                    organizations: paginationProps,
                    metrics: [
                        { $match: search.$and.length > 0 ? search : {} },
                        { $count: 'totalCount' },
                    ],
                },
            },
        ]);

        if (!results || results.length == 0) {
            throw new HttpException(
                `Organizations not found`,
                HttpStatus.NOT_FOUND,
            );
        }

        //return results;

        // results.metricDetails = metrics;
        return { results, metrics };
    }

    async updateOrganization(
        organizationId: string,
        updateOrganizationDetails: updateOrganizationDto,
    ): Promise<OrganizationDocument> {
        const organization = await this.organizationsModel.findByIdAndUpdate(
            organizationId,
            updateOrganizationDetails,
            { new: true },
        );

        if (!organization) {
            throw new NotFoundException(
                `Organization with #${organizationId} not Found`,
            );
        }
        return organization;
    }

    async deleteOrganization(organizationId: string): Promise<String> {
        const organization = await this.organizationsModel.findByIdAndDelete(
            organizationId,
        );

        if (!organization) {
            throw new NotFoundException(
                `Organization with #${organizationId} not Found`,
            );
        }
        return `Organization with #${organizationId} is deleted`;
    }

    async organizationMetrics() {
        const metrics = await this.organizationsModel.aggregate([
            {
                $lookup: {
                    from: MODEL_ENUMS.USERS_ACTIVITY_LOG,
                    localField: '_id',
                    foreignField: 'organization',
                    as: 'activitylogs',
                },
            },
            {
                $facet: {
                    active: [
                        { $match: { isActive: true } },
                        { $count: 'active' },
                    ],
                    inActive: [
                        { $match: { isActive: false } },
                        { $count: 'inActive' },
                    ],
                    activeInLast24Hours: [
                        {
                            $match: {
                                'activitylogs.updatedAt': {
                                    $gt: dayjs().subtract(24, 'h').toDate(),
                                },
                            },
                        },
                        { $count: 'activeInLast24Hours' },
                    ],
                },
            },
            {
                $addFields: {
                    active: {
                        $arrayElemAt: ['$active', 0],
                    },
                    inActive: {
                        $arrayElemAt: ['$inActive', 0],
                    },
                    activeInLast24Hours: {
                        $arrayElemAt: ['$activeInLast24Hours', 0],
                    },
                },
            },
            {
                $addFields: {
                    active: '$active.active',
                    inActive: '$inActive.inActive',
                    activeInLast24Hours:
                        '$activeInLast24Hours.activeInLast24Hours',
                },
            },
        ]);

        return metrics;
    }
}
