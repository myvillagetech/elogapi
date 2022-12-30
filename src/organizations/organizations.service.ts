import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { UserDocument } from 'src/users/schemas/user.schemas';
import { UsersService } from 'src/users/users.service';
import { OrganizationSearchCriteriaDto } from './dto/organization.searchCriteria.dto';
import { OrganizationDto, updateOrganizationDto } from './dto/organizations.dto';
import { OrganizationDocument } from './schemas/organizations.schema';

@Injectable()
export class OrganizationsService {
    @InjectModel(MODEL_ENUMS.ORGANIZATIONS) private organizationsModel : Model<OrganizationDocument>
    constructor(
        private userService : UsersService
    ){

    }

    async createOrganization(createOrganizationDto : OrganizationDto) : Promise <OrganizationDocument>{
        const newOrganization = await new this.organizationsModel(createOrganizationDto);
        return newOrganization.save();
    }

    async getOrganizationById(id: string): Promise<OrganizationDocument> {
        const existingUser = await this.organizationsModel.findById(id);
        if (!existingUser) {
            throw new NotFoundException(`organization with ${id} is not found`)
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

    async getAllOrganizationsbyUserId(userId:string): Promise<OrganizationDocument[]>{
        const user : UserDocument = await this.userService.getUserById(userId);

        const organizations = this.organizationsModel.find({_id : {$in :user.organization}})

        if(organizations){
            return organizations;
        }else{
            throw new NotFoundException('organizations data not found!');
        }
        
    }

    async organizationTextSerach(searchString: string): Promise<OrganizationDocument[]> {
        const search = searchString ? {
            $or: [
                { organization: new RegExp(searchString.toString(), 'i') },
                { shortName: new RegExp(searchString.toString(), 'i') }
            ]
        } : {};

        const results = await this.organizationsModel.find(search);
        return results;
    }

    async organizationSearchCriteria(criteria: OrganizationSearchCriteriaDto): Promise<OrganizationDocument[]> {
        const search = { $and: [] }

        if (criteria.organization) {
            search.$and.push({
                $or: [
                    { organization: new RegExp(criteria.organization.toString(), 'i') },
                    { shortName: new RegExp(criteria.organization.toString(), 'i') }
                ]
            })
        }

        if(criteria.organizationId) {
            search.$and.push(
                {
                    "_id" : new Types.ObjectId(criteria.organizationId)
                }
            )
        }

        if (criteria.isActive !== null && criteria.isActive !== undefined) {
            search.$and.push(
                { isActive: criteria.isActive },
            )
        }

        if (criteria.type) {
            search.$and.push(
                { type: criteria.type},
            )
        }

        if(criteria.userId){
            search.$and.push(
                {
                    "users._id" : new Types.ObjectId(criteria.userId)
                }
            )
        }

        if(criteria.userSearch){
            search.$and.push({
                "users.Name" : new RegExp(criteria.userSearch.toString(), 'i')
            })
        }

        let paginationProps: any = [
            { $match: search.$and.length > 0 ? search : {} }
        ];

        if ((criteria.pageSize || criteria.pageSize > 0) &&
            (criteria.pageNumber || criteria.pageNumber === 0)) {
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

        const results = await this.organizationsModel.aggregate([
            {
                $facet: {
                    active: [
                        {$match : {isActive : true}},
                        { $count: "activeOrganizatiosns" },
                    ],
                    inActive: [
                        {$match : {isActive : false}},
                        { $count: "inActiveOrganizatiosns" },
                    ],
                    ministries: [
                        {$match : {type : "63973bfb61ab6f49bfdd3c35"}},
                        { $count: "ministriesCount" },
                    ],
                    associations: [
                        {$match : {type : "63973c8961ab6f49bfdd3c38"}},
                        { $count: "associationCount" },
                    ]
                }
            },
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
                $facet: {
                    organizations: paginationProps,
                    metrics: [
                        { $match: search.$and.length > 0 ? search : {} },
                        { $count: "totalCount" },
                    ]
                },
            },
        ])

        if (!results || results.length == 0) {
            throw new HttpException(
                `Organizations not found`,
                HttpStatus.NOT_FOUND
            )
        }
        return results;

    }

    async updateOrganization(organizationId : string, updateOrganizationDetails:updateOrganizationDto) : Promise<OrganizationDocument>{
        const organization = await this.organizationsModel.findByIdAndUpdate(
            organizationId,
            updateOrganizationDetails,
            { new: true},
        );

        if(!organization) {
            throw new NotFoundException(`Organization with #${organizationId} not Found`);
        }
        return organization;
    }

    async deleteOrganization(organizationId : string) : Promise<String>{
        const organization = await this.organizationsModel.findByIdAndDelete(organizationId);

        if(!organization){
            throw new NotFoundException(`Organization with #${organizationId} not Found`);
        }
        return `Organization with #${organizationId} is deleted`
    }

}
