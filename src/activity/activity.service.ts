import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ApiParam } from '@nestjs/swagger';
import mongoose, { Model, Types } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { ActivityLogDto } from './dto/activity-log.dto';
import { ActivityDto } from './dto/activity.dto';
import { ActivitySearchCriteriaDto } from './dto/activity.searchCriteria.dto';
import {
    ArchiveActivityDto,
    UpdateActivityAssignedToDto,
    UpdateActivityDto,
    UpdateActivityDueDateDto,
    UpdateActivityOrganizationDto,
    UpdateActivityStatusDto,
} from './dto/update-activity.dto';
import { ActivityDocument } from './schemas/activity.schema';
import * as dayjs from 'dayjs';
import { getMilliSecondsbyParam } from 'src/shared/services/date-time-helpers';
import {
    ActivityMetricsRequest,
    DashboardBaseModel,
} from './dto/dashboard.dto';
import { ActivityMasterdataService } from 'src/generic/activity-masterdata/activity-masterdata.service';
import { OrganizationDocument } from 'src/organizations/schemas/organizations.schema';
import { AttachmentsSearchCriteria } from './dto/attachmentsSearchCriteria';

@Injectable()
export class ActivityService {
    @InjectModel(MODEL_ENUMS.ACTIVITIES)
    private activityModel: Model<ActivityDocument>;
    @InjectModel(MODEL_ENUMS.ORGANIZATIONS)
    private organizationsModel: Model<OrganizationDocument>;
    constructor(
        private readonly authService: AuthService,
        private readonly masterDataService: ActivityMasterdataService,
    ) {}

    async createActivity(
        activityDto: ActivityDto,
        tokenHeader: string,
    ): Promise<ActivityDocument> {
        const toDay = new Date();
        const dueDate = new Date(toDay.setDate(toDay.getDate() + 21));
        const decodedToken: any = this.authService.getDecodedToken(tokenHeader);

        const organizarionDoc = await this.organizationsModel.findById(
            activityDto.createdByOrganization,
        );

        const organizarion = organizarionDoc['_doc'];
        const identifier = `${
            organizarion.shortName ? organizarion.shortName : ''
        }${
            organizarion.orgActivityAutoIncrementId
                ? organizarion.orgActivityAutoIncrementId + 1
                : 1
        }`;

        const indentierUpdate = organizarion.orgActivityAutoIncrementId
            ? {
                  $inc: { orgActivityAutoIncrementId: 1 },
              }
            : { orgActivityAutoIncrementId: 1 };
        await this.organizationsModel.updateOne(
            {
                _id: new Types.ObjectId(activityDto.createdByOrganization),
            },
            indentierUpdate,
        );

        const newActivity = await new this.activityModel({
            ...activityDto,
            attachments: activityDto.attachments.map((a: any) => {
                return {
                    ...a,
                    createdBy: decodedToken._id,
                    createdByUserName: decodedToken.Name,
                };
            }),
            dueDate: dueDate,
            dueDateLog: {
                dueDate: dueDate,
                createdBy: decodedToken._id,
                createdByUserName: decodedToken.Name,
                isInitialLog: true,
            },
            assignTo: activityDto.organization[0],
            createdBy: decodedToken._id,
            uniqIdentity: identifier,
        });
        // newActivity.markModified('attachments');
        return newActivity.save();
    }

    async getAllActivities(): Promise<ActivityDocument[]> {
        const activityData = await this.activityModel.find();
        if (!activityData || activityData.length === 0) {
            throw new NotFoundException('Activity data not found');
        }
        return activityData;
    }

    async getActivityByActivityId(activityId: string): Promise<any> {
        const activity = await this.activityModel.aggregate([
            {
                $lookup: {
                    from: MODEL_ENUMS.ORGANIZATIONS,
                    localField: 'organization',
                    foreignField: '_id',
                    as: 'organizationData',
                    pipeline: [{ $project: { password: 0 } }],
                },
            },
            {
                $lookup: {
                    from: MODEL_ENUMS.ORGANIZATIONS,
                    localField: 'assignTo',
                    foreignField: '_id',
                    as: 'assignToObj',
                },
            },
            {
                $lookup: {
                    from: MODEL_ENUMS.ORGANIZATIONS,
                    localField: 'createdByOrganization',
                    foreignField: '_id',
                    as: 'createdByOrganizationData',
                    pipeline: [{ $project: { password: 0 } }],
                },
            },
            {
                $lookup: {
                    from: MODEL_ENUMS.USERS,
                    localField: 'activityLog.userId',
                    foreignField: '_id',
                    as: 'userData',
                    pipeline: [{ $project: { password: 0 } }],
                },
            },
            {
                $match: { _id: new Types.ObjectId(activityId) },
            },
        ]);

        if (!activity) {
            throw new NotFoundException('Activity data not found');
        }

        return activity;
    }

    async updateActivityByActivityId(
        activityId: string,
        activityData: UpdateActivityDto,
    ): Promise<ActivityDocument> {
        let data: any;
        if (activityData?.organization) {
            data = { ...activityData, assignTo: activityData.organization[0] };
        }
        const updatedActivity = await this.activityModel.findByIdAndUpdate(
            activityId,
            data,
            { new: true },
        );

        if (!updatedActivity) {
            throw new NotFoundException('Activity data not found');
        }

        return updatedActivity;
    }

    async deleteActivityByActivityId(activityId: string): Promise<any> {
        const result = await this.activityModel.findByIdAndDelete(activityId);

        if (!result) {
            throw new NotFoundException('Activity data not found');
        }

        return result;
    }

    async archiveActivity(
        activityId: string,
        activityDetails: ArchiveActivityDto,
    ): Promise<any> {
        const result = await this.activityModel.findByIdAndUpdate(
            activityId,
            activityDetails,
            { new: true },
        );

        if (!result) {
            throw new NotFoundException('Activity data not found');
        }

        return result;
    }

    async updateActivityLogByActivityId(
        activityId: string,
        activityLog: ActivityLogDto,
        tokenHeader: string,
    ): Promise<any> {
        const decodedToken: any = this.authService.getDecodedToken(tokenHeader);

        const attachments = activityLog.attachments.map((a: any) => {
            return {
                ...a,
                createdBy: decodedToken._id,
                createdByUserName: decodedToken.Name,
            };
        });
        const object = {
            $push: {
                activityLog: {
                    ...activityLog,
                    attachments: attachments,
                    userId: new Types.ObjectId(activityLog.userId),
                    createdBy: decodedToken._id,
                    createdByUserName: decodedToken.Name,
                },
            },
        };

        if (activityLog.visibility) {
            object['visibility'] = activityLog.visibility;
        }

        if (activityLog.priority) {
            object['priority'] = activityLog.priority;
        }

        if (activityLog.status) {
            object['status'] = activityLog.status;
            object.$push['statusLog'] = { status: activityLog.status };
        }

        if (activityLog.assignTo) {
            object['assignTo'] = activityLog.assignTo;
        }

        const result = await this.activityModel.findOneAndUpdate(
            { _id: new Types.ObjectId(activityId) },
            object,
            { upsert: true, new: true },
        );

        if (!result) {
            throw new NotFoundException('Activity data not found');
        }

        return result;
    }

    async updateActivityStatus(
        activityId: string,
        activityStatus: UpdateActivityStatusDto,
    ): Promise<any> {
        const result = await this.activityModel.findByIdAndUpdate(
            activityId,
            activityStatus,
            { new: true },
        );

        if (!result) {
            throw new NotFoundException('Activity data not found');
        }

        return result;
    }

    async getAllArchiveActivities(): Promise<ActivityDocument[]> {
        const results = await this.activityModel.aggregate([
            {
                $lookup: {
                    from: MODEL_ENUMS.ORGANIZATIONS,
                    localField: 'createdByOrganization',
                    foreignField: '_id',
                    as: 'createdByOrganizationData',
                },
            },
            {
                $match: { isArchive: true },
            },
        ]);

        if (!results) {
            throw new NotFoundException('Activity data not found');
        }

        return results;
    }

    async updateActivityDuedate(
        activityId: string,
        dueDateDetails: UpdateActivityDueDateDto,
        tokenHeader: string,
    ): Promise<any> {
        const decodedToken: any = this.authService.getDecodedToken(tokenHeader);
        const result = await this.activityModel.updateOne(
            { _id: new Types.ObjectId(activityId) },
            {
                dueDate: dueDateDetails.dueDate,
                $push: {
                    dueDateLog: {
                        ...dueDateDetails,
                        createdBy: decodedToken._id,
                        createdByUserName: decodedToken.Name,
                    },
                },
            },
        );
        if (!result) {
            throw new NotFoundException('Activity data not found');
        }

        return result;
    }

    async updateActivityAssignedTo(
        dto: UpdateActivityAssignedToDto,
    ): Promise<any> {
        const result = await this.activityModel.updateOne(
            { _id: new Types.ObjectId(dto.activityId) },
            {
                assignTo: new Types.ObjectId(dto.assignedTo),
            },
        );
        if (!result) {
            throw new NotFoundException('Activity data not found');
        }

        return result;
    }

    async updateActivityOrganization(
        dto: UpdateActivityOrganizationDto,
        tokenHeader: string,
    ): Promise<any> {
        const decodedToken = this.authService.getDecodedToken(tokenHeader);

        const organizarion = await this.organizationsModel.findById(
            dto.organzation,
        );

        const identifier = `${
            organizarion.shortName ? organizarion.shortName : ''
        }${organizarion.orgActivityAutoIncrementId + 1}`;

        await this.organizationsModel.updateOne(
            {
                _id: new Types.ObjectId(dto.organzation),
            },
            {
                $inc: { orgActivityAutoIncrementId: 1 },
            },
        );

        const result = await this.activityModel.updateOne(
            { _id: new Types.ObjectId(dto.activityId) },
            {
                createdByOrganization: new Types.ObjectId(dto.organzation),
                $addToSet: {
                    organization: new Types.ObjectId(dto.organzation),
                },
                uniqIdentity: identifier,
            },
        );
        if (!result) {
            throw new NotFoundException('Activity data not found');
        }

        return result;
    }

    async activitySerachCriteria(
        criteria: ActivitySearchCriteriaDto,
        authHeader: string,
    ) {
        let result = [];

        const decodedToken: any = this.authService.getDecodedToken(authHeader);

        const isSuperAdmin = decodedToken.roles.some(
            (role) => role === 'SuperAdmin',
        );

        const search: any = { $and: [{ isArchive: false }] };

        if (criteria.organizations && criteria.organizations.length > 0) {
            let filters: any = [
                {
                    assignTo: {
                        $in: criteria.organizations.map(
                            (s) => new Types.ObjectId(s),
                        ),
                    },
                },
                {
                    createdByOrganization: {
                        $in: criteria.organizations.map(
                            (s) => new Types.ObjectId(s),
                        ),
                    },
                },
            ];

            if (criteria.onlyMyTasks) {
                filters = [
                    {
                        assignTo: {
                            $in: criteria.organizations.map(
                                (s) => new Types.ObjectId(s),
                            ),
                        },
                    },
                ];
            }
            search.$and.push({ $or: filters });
        }

        if (!isSuperAdmin && decodedToken.organization.length === 0) {
            return [];
            // search.$and.push({
            //     visibility: 'EVERYONE',
            // });
        }

        if (criteria.status && criteria.status.length > 0) {
            search.$and.push({
                status: {
                    $in: criteria.status,
                },
            });
        }

        if (criteria.priority && criteria.priority.length > 0) {
            search.$and.push({
                priority: {
                    $in: criteria.priority,
                },
            });
        }

        if (criteria.types && criteria.types.length > 0) {
            search.$and.push({
                activityType: {
                    $in: criteria.types.map(
                        (type) => new mongoose.Types.ObjectId(type),
                    ),
                },
            });
        }

        if (criteria.scope && criteria.scope.length > 0) {
            search.$and.push({
                activityScope: {
                    $in: criteria.scope.map(
                        (type) => new mongoose.Types.ObjectId(type),
                    ),
                },
            });
        }

        if (criteria.geography && criteria.geography.length > 0) {
            search.$and.push({
                activitySector: {
                    $in: criteria.geography.map(
                        (type) => new mongoose.Types.ObjectId(type),
                    ),
                },
            });
        }

        if (criteria.entryTypes && criteria.entryTypes.length > 0) {
            search.$and.push({
                activitEntryType: {
                    $in: criteria.entryTypes.map(
                        (type) => new mongoose.Types.ObjectId(type),
                    ),
                },
            });
        }

        if (criteria.dueDate) {
            if (criteria.dueDate.customString) {
                if (criteria.dueDate.customString === 'TODAY') {
                    search.$and.push({
                        dueDate: {
                            $gte: dayjs().startOf('day').toDate(),
                            $lte: dayjs().endOf('day').toDate(),
                        },
                    });
                }

                if (criteria.dueDate.customString === 'OVERDUE') {
                    search.$and.push({
                        dueDate: {
                            $lte: dayjs().startOf('day').toDate(),
                        },
                        status: 'INPROGRESS',
                    });
                }
            } else {
                if (criteria.dueDate.fromDate) {
                    search.$and.push({
                        dueDate: {
                            $gte: dayjs(criteria.dueDate.fromDate)
                                .startOf('day')
                                .toDate(),
                        },
                    });
                }
                if (criteria.dueDate.toDate) {
                    search.$and.push({
                        dueDate: {
                            $lte: dayjs(criteria.dueDate.toDate)
                                .endOf('day')
                                .toDate(),
                        },
                    });
                }
            }
        }

        if (criteria.createdDate) {
            if (criteria.createdDate.quantity && criteria.createdDate.unit) {
                const pastTime = dayjs()
                    .subtract(
                        criteria.createdDate.quantity,
                        criteria.createdDate.unit as any,
                    )
                    .toDate();
                search.$and.push({
                    createdAt: {
                        $gte: pastTime,
                    },
                });
            }

            if (criteria.createdDate.fromDate) {
                search.$and.push({
                    createdAt: {
                        $gte: dayjs(criteria.createdDate.fromDate)
                            .startOf('day')
                            .toDate(),
                    },
                });
            }

            if (criteria.createdDate.toDate) {
                search.$and.push({
                    createdAt: {
                        $lte: dayjs(criteria.createdDate.toDate)
                            .endOf('day')
                            .toDate(),
                    },
                });
            }
        }

        if (criteria.searchTerm && criteria.searchTerm.trim() !== '') {
            search.$and.push({
                $or: [{ title: RegExp(criteria.searchTerm, 'i') }],
            });
        }

        const paginationProps: any = [
            { $match: search.$and.length > 0 ? search : {} },
        ];

        let sortObject;
        if (criteria.sortField) {
            sortObject = {};
            sortObject[criteria.sortField] = criteria.sortOrder;
            paginationProps.push({ $sort: sortObject });
        } else {
            paginationProps.push({ $sort: { createdAt: -1 } });
        }

        if (
            (criteria.pageSize || criteria.pageSize > 0) &&
            (criteria.pageNumber || criteria.pageNumber === 0)
        ) {
            paginationProps.push({
                $skip: criteria.pageNumber * criteria.pageSize,
            });
            paginationProps.push({ $limit: criteria.pageSize });
        }

        paginationProps.push({
            $addFields: {
                assignTo: '$assignToObj',
                createdByOrganization: '$createdByOrganizationObj',
            },
        });

        result = await this.activityModel.aggregate([
            { $match: search.$and.length > 0 ? search : {} },
            {
                $lookup: {
                    from: 'organizations',
                    localField: 'assignTo',
                    foreignField: '_id',
                    as: 'assignToObj',
                },
            },
            {
                $lookup: {
                    from: 'organizations',
                    localField: 'createdByOrganization',
                    foreignField: '_id',
                    as: 'createdByOrganizationObj',
                },
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'createdBy',
                    foreignField: '_id',
                    as: 'createdByUser',
                },
            },
            {
                $facet: {
                    activities: paginationProps,
                    count: [
                        { $match: search.$and.length > 0 ? search : {} },
                        { $count: 'count' },
                    ],
                },
            },
        ]);
        return result;
    }

    async activitySerachPageHeaderCounts(
        criteria: ActivitySearchCriteriaDto,
        authHeader: string,
    ) {
        let result = [];

        const decodedToken: any = this.authService.getDecodedToken(authHeader);

        const isSuperAdmin = decodedToken.roles.some(
            (role) => role === 'SuperAdmin',
        );

        const search: any = { $and: [{ isArchive: false }] };

        if (criteria.organizations && criteria.organizations.length > 0) {
            const filters: any = [
                {
                    assignTo: {
                        $in: criteria.organizations.map(
                            (s) => new Types.ObjectId(s),
                        ),
                    },
                },
                {
                    createdByOrganization: {
                        $in: criteria.organizations.map(
                            (s) => new Types.ObjectId(s),
                        ),
                    },
                },
            ];

            // if (!criteria.onlyMyTasks) {
            //     filters.push({
            //         visibility: 'EVERYONE',
            //     });
            // }
            search.$and.push({ $or: filters });
        }

        result = await this.activityModel.aggregate([
            { $match: search },
            {
                $facet: {
                    all: [
                        {
                            $match: isSuperAdmin
                                ? {}
                                : {
                                      $or: [
                                          {
                                              assignTo: {
                                                  $in: criteria.organizations.map(
                                                      (s) =>
                                                          new Types.ObjectId(s),
                                                  ),
                                              },
                                          },
                                          {
                                              createdByOrganization: {
                                                  $in: criteria.organizations.map(
                                                      (s) =>
                                                          new Types.ObjectId(s),
                                                  ),
                                              },
                                          },
                                          //   {
                                          //       visibility: 'EVERYONE',
                                          //   },
                                      ],
                                  },
                        },
                        { $count: 'all' },
                    ],

                    myTasks: [
                        {
                            $match: isSuperAdmin
                                ? {}
                                : {
                                      $or: [
                                          {
                                              assignTo: {
                                                  $in: criteria.organizations.map(
                                                      (s) =>
                                                          new Types.ObjectId(s),
                                                  ),
                                              },
                                          },
                                      ],
                                  },
                        },
                        { $count: 'myTasks' },
                    ],

                    overDue: [
                        {
                            $match: isSuperAdmin
                                ? {
                                      dueDate: {
                                          $lt: dayjs().startOf('day').toDate(),
                                      },
                                      status: 'INPROGRESS',
                                  }
                                : {
                                      $and: [
                                          {
                                              dueDate: {
                                                  $lt: dayjs()
                                                      .startOf('day')
                                                      .toDate(),
                                              },
                                          },
                                          { status: 'INPROGRESS' },
                                          {
                                              $or: [
                                                  {
                                                      assignTo: {
                                                          $in: criteria.organizations.map(
                                                              (s) =>
                                                                  new Types.ObjectId(
                                                                      s,
                                                                  ),
                                                          ),
                                                      },
                                                  },
                                                  {
                                                      createdByOrganization: {
                                                          $in: criteria.organizations.map(
                                                              (s) =>
                                                                  new Types.ObjectId(
                                                                      s,
                                                                  ),
                                                          ),
                                                      },
                                                  },
                                              ],
                                          },
                                      ],
                                  },
                        },
                        { $count: 'overDue' },
                    ],
                    highPriority: [
                        {
                            $match: isSuperAdmin
                                ? { priority: 'HIGH' }
                                : {
                                      $and: [
                                          {
                                              priority: 'HIGH',
                                          },
                                          {
                                              $or: [
                                                  {
                                                      assignTo: {
                                                          $in: criteria.organizations.map(
                                                              (s) =>
                                                                  new Types.ObjectId(
                                                                      s,
                                                                  ),
                                                          ),
                                                      },
                                                  },
                                                  {
                                                      createdByOrganization: {
                                                          $in: criteria.organizations.map(
                                                              (s) =>
                                                                  new Types.ObjectId(
                                                                      s,
                                                                  ),
                                                          ),
                                                      },
                                                  },
                                              ],
                                          },
                                      ],
                                  },
                        },
                        { $count: 'highPriority' },
                    ],
                    activeActivities: [
                        {
                            $match: isSuperAdmin
                                ? {
                                      status: {
                                          $in: ['INPROGRESS', 'NEW'],
                                      },
                                  }
                                : {
                                      $and: [
                                          {
                                              status: {
                                                  $in: ['INPROGRESS', 'NEW'],
                                              },
                                          },
                                          {
                                              $or: [
                                                  {
                                                      assignTo: {
                                                          $in: criteria.organizations.map(
                                                              (s) =>
                                                                  new Types.ObjectId(
                                                                      s,
                                                                  ),
                                                          ),
                                                      },
                                                  },
                                                  {
                                                      createdByOrganization: {
                                                          $in: criteria.organizations.map(
                                                              (s) =>
                                                                  new Types.ObjectId(
                                                                      s,
                                                                  ),
                                                          ),
                                                      },
                                                  },
                                              ],
                                          },
                                      ],
                                  },
                        },
                        { $count: 'activeActivities' },
                    ],
                },
            },
        ]);
        return result;
    }

    async getDashBoardActivityMetrics(
        request: ActivityMetricsRequest,
        authHeader: string,
    ) {
        // assignto must be part of  user organizarion
        // if organization
        const search = { $and: [] };
        const decodedToken: any = this.authService.getDecodedToken(authHeader);
        const isSuperAdmin = decodedToken.roles.some(
            (role) => role === 'SuperAdmin',
        );

        if (!isSuperAdmin && decodedToken.organization.length === 0) {
            return [
                {
                    new: [{ newCount: 0 }],
                    inProgress: [{ inProgressCount: 0 }],
                    resolved: [],
                    rejectedCount: [{ rejectedCount: 0 }],
                    total: [{ total: 0 }],
                },
            ];
        }
        if (request.organizations && request.organizations.length > 0) {
            search.$and.push({
                $or: [
                    {
                        assignTo: {
                            $in: request.organizations.map(
                                (s) => new Types.ObjectId(s),
                            ),
                        },
                    },
                    {
                        createdByOrganization: {
                            $in: request.organizations.map(
                                (s) => new Types.ObjectId(s),
                            ),
                        },
                    },
                ],
            });
        }

        if (request.type) {
            search.$and.push({
                activityType: new mongoose.Types.ObjectId(request.type),
            });
        }

        if (request.dateRange?.fromDate) {
            search.$and.push({
                createdAt: {
                    $gte: dayjs(request.dateRange.fromDate)
                        .startOf('day')
                        .toDate(),
                },
            });
        }

        if (request.dateRange?.toDate) {
            search.$and.push({
                createdAt: {
                    $lte: dayjs(request.dateRange.toDate).endOf('day').toDate(),
                },
            });
        }

        const result = await this.activityModel.aggregate([
            { $match: search.$and.length > 0 ? search : {} },
            {
                $facet: {
                    new: [
                        { $match: { status: 'NEW' } },
                        { $count: 'newCount' },
                    ],
                    inProgress: [
                        { $match: { status: 'INPROGRESS' } },
                        { $count: 'inProgressCount' },
                    ],
                    resolved: [
                        { $match: { status: 'RESOLVED' } },
                        { $count: 'resolvedCount' },
                    ],
                    rejectedCount: [
                        { $match: { status: 'REJECTED' } },
                        { $count: 'rejectedCount' },
                    ],
                    total: [{ $count: 'total' }],
                },
            },
        ]);
        return result;
    }

    async getDashBoardDueDateMetrics(
        request: DashboardBaseModel,
        authHeader: string,
    ) {
        const search = { $and: [] };

        const decodedToken: any = this.authService.getDecodedToken(authHeader);
        const isSuperAdmin = decodedToken.roles.some(
            (role) => role === 'SuperAdmin',
        );

        if (!isSuperAdmin && decodedToken.organization.length === 0) {
            return [
                {
                    oneWeek: [],
                    oneToTwoWeek: [],
                    twoWeeksToOneMonth: [{ twoWeeksToOneMonth: 0 }],
                    moreThanAMonth: [],
                    OnTime: [{ OnTime: 0 }],
                },
            ];
        }
        if (request.organizations && request.organizations.length > 0) {
            search.$and.push({
                $or: [
                    {
                        assignTo: {
                            $in: request.organizations.map(
                                (s) => new Types.ObjectId(s),
                            ),
                        },
                    },
                    {
                        createdByOrganization: {
                            $in: request.organizations.map(
                                (s) => new Types.ObjectId(s),
                            ),
                        },
                    },
                ],
            });
        }

        const result = await this.activityModel.aggregate([
            { $match: search.$and.length > 0 ? search : {} },
            {
                $facet: {
                    oneWeek: [
                        {
                            $match: {
                                $and: [
                                    {
                                        dueDate: {
                                            $lt: dayjs()
                                                .startOf('day')
                                                .toDate(),
                                        },
                                    },
                                    {
                                        dueDate: {
                                            $gte: dayjs()
                                                .startOf('day')
                                                .subtract(1, 'week')
                                                .toDate(),
                                        },
                                    },
                                    { status: 'INPROGRESS' },
                                ],
                            },
                        },
                        { $count: 'oneWeek' },
                    ],
                    oneToTwoWeek: [
                        {
                            $match: {
                                $and: [
                                    {
                                        dueDate: {
                                            $lt: dayjs()
                                                .startOf('day')
                                                .subtract(1, 'week')
                                                .toDate(),
                                        },
                                    },
                                    {
                                        dueDate: {
                                            $gte: dayjs()
                                                .startOf('day')
                                                .subtract(2, 'week')
                                                .toDate(),
                                        },
                                    },
                                    { status: 'INPROGRESS' },
                                ],
                            },
                        },
                        { $count: 'oneToTwoWeeks' },
                    ],
                    twoWeeksToOneMonth: [
                        {
                            $match: {
                                $and: [
                                    {
                                        dueDate: {
                                            $lt: dayjs()
                                                .startOf('day')
                                                .subtract(2, 'week')
                                                .toDate(),
                                        },
                                    },
                                    {
                                        dueDate: {
                                            $gte: dayjs()
                                                .startOf('day')
                                                .subtract(1, 'month')
                                                .toDate(),
                                        },
                                    },
                                    { status: 'INPROGRESS' },
                                ],
                            },
                        },
                        { $count: 'twoWeeksToOneMonth' },
                    ],
                    moreThanAMonth: [
                        {
                            $match: {
                                $and: [
                                    {
                                        dueDate: {
                                            $lt: dayjs()
                                                .startOf('day')
                                                .subtract(1, 'month')
                                                .toDate(),
                                        },
                                    },
                                    { status: 'INPROGRESS' },
                                ],
                            },
                        },
                        { $count: 'moreThanAMonth' },
                    ],
                    OnTime: [
                        {
                            $match: {
                                dueDate: {
                                    $gte: dayjs().startOf('day').toDate(),
                                },
                            },
                        },
                        { $count: 'OnTime' },
                    ],
                },
            },
        ]);
        return result;
    }

    async getDashBoardRelatedToMetricsMetrics(
        request: DashboardBaseModel,
        authHeader: string,
    ) {
        const search = { $and: [] };

        const decodedToken: any = this.authService.getDecodedToken(authHeader);
        const isSuperAdmin = decodedToken.roles.some(
            (role) => role === 'SuperAdmin',
        );

        if (!isSuperAdmin && decodedToken.organization.length === 0) {
            return [
                {
                    total: [{ total: 0 }],
                    singleMinistry: [{ singleMinistry: 0 }],
                    multiMinistry: [{ multiMinistry: 0 }],
                    others: [],
                    none: [],
                },
            ];
        }

        if (request.organizations && request.organizations.length > 0) {
            search.$and.push({
                $or: [
                    {
                        assignTo: {
                            $in: request.organizations.map(
                                (s) => new Types.ObjectId(s),
                            ),
                        },
                    },
                    {
                        createdByOrganization: {
                            $in: request.organizations.map(
                                (s) => new Types.ObjectId(s),
                            ),
                        },
                    },
                ],
            });
        }
        let relatedtoTypes =
            await this.masterDataService.getAllActivityRelatedToTypes();

        relatedtoTypes = relatedtoTypes.map((t: any) => t._doc);

        const result = await this.activityModel.aggregate([
            { $match: search.$and.length > 0 ? search : {} },
            {
                $facet: {
                    total: [{ $match: {} }, { $count: 'total' }],
                    singleMinistry: [
                        {
                            $match: {
                                activityRelatedTo: new mongoose.Types.ObjectId(
                                    relatedtoTypes
                                        .find(
                                            (type) =>
                                                type.name ===
                                                'Single Ministry/Department',
                                        )
                                        ._id.toString(),
                                ),
                            },
                        },
                        { $count: 'singleMinistry' },
                    ],
                    multiMinistry: [
                        {
                            $match: {
                                activityRelatedTo: new mongoose.Types.ObjectId(
                                    relatedtoTypes
                                        .find(
                                            (type) =>
                                                type.name ===
                                                'Multiple Ministries/Departments',
                                        )
                                        ._id.toString(),
                                ),
                            },
                        },
                        { $count: 'multiMinistry' },
                    ],
                    others: [
                        {
                            $match: {
                                activityRelatedTo: new mongoose.Types.ObjectId(
                                    relatedtoTypes
                                        .find((type) => type.name === 'Others')
                                        ._id.toString(),
                                ),
                            },
                        },
                        { $count: 'others' },
                    ],
                    none: [
                        {
                            $match: {
                                $or: [
                                    { activityRelatedTo: null },
                                    { activityRelatedTo: '' },
                                    { activityRelatedTo: { $exists: false } },
                                ],
                            },
                        },
                        { $count: 'none' },
                    ],
                },
            },
        ]);
        return result;
    }

    async archiveDocuments(items: any): Promise<any> {
        return await Promise.allSettled(
            items.map((i: any) => this.updateDocumentArchival(i, true)),
        );
    }

    async revertDocumentArchivals(items: any): Promise<any> {
        return await Promise.allSettled(
            items.map((i: any) => this.updateDocumentArchival(i, false)),
        );
    }

    async updateDocumentArchival(data: any, value): Promise<any> {
        const result = data.activityLogId
            ? await this.activityModel.update(
                  {
                      _id: new Types.ObjectId(data.activityId),
                  },
                  {
                      $set: {
                          'activityLog.$[log].attachments.$[att].isArchived':
                              value,
                      },
                  },
                  {
                      arrayFilters: [
                          {
                              'log._id': new Types.ObjectId(data.activityLogId),
                          },
                          {
                              'att._id': new Types.ObjectId(data.attchmentId),
                          },
                      ],
                  },
              )
            : await this.activityModel.update(
                  {
                      _id: new Types.ObjectId(data.activityId),
                  },
                  {
                      $set: {
                          'attachments.$[att].isArchived': value,
                      },
                  },
                  {
                      arrayFilters: [
                          {
                              'att._id': new Types.ObjectId(data.attchmentId),
                          },
                      ],
                  },
              );

        if (!result) {
            throw new NotFoundException('Activity data not found');
        }
    }

    async deleteDocuments(items: any[]) {
        return Promise.allSettled(
            items.map((i: any) => this.deleteDocument(i)),
        );
    }

    async deleteDocument(data: any): Promise<any> {
        const result = data.activityLogId
            ? await this.activityModel.update(
                  {
                      _id: new Types.ObjectId(data.activityId),
                  },
                  {
                      $pull: {
                          'activityLog.$[log].attachments': {
                              _id: new Types.ObjectId(data.attchmentId),
                          },
                      },
                  },
                  {
                      arrayFilters: [
                          {
                              'log._id': new Types.ObjectId(data.activityLogId),
                          },
                      ],
                  },
              )
            : await this.activityModel.update(
                  {
                      _id: new Types.ObjectId(data.activityId),
                  },
                  {
                      $pull: {
                          attachments: {
                              _id: new Types.ObjectId(data.attchmentId),
                          },
                      },
                  },
              );

        if (!result) {
            throw new NotFoundException('Activity data not found');
        }
    }

    async archiveMultipleActivities(
        activityIds: string[],
        isArchive: boolean,
    ): Promise<any> {
        const results = await this.activityModel.updateMany(
            { _id: { $in: activityIds } },
            { isArchive: isArchive },
        );
        if (!results) {
            throw new NotFoundException('Activities data not found');
        }

        return results;
    }

    async deleteMultipleActivities(activityIds: string[]): Promise<any> {
        await this.activityModel.deleteMany({ _id: { $in: activityIds } });
        return { success: true };
    }

    async getAttachments(
        criteria: AttachmentsSearchCriteria,
        authHeader: string,
    ) {
        const decodedToken: any = this.authService.getDecodedToken(authHeader);

        const isSuperAdmin = decodedToken.roles.some(
            (role) => role === 'SuperAdmin',
        );

        const search: any = {
            $and: [],
        };

        const isArchiveQuery = {
            $match: {},
        };

        if (criteria.isArchived) {
            isArchiveQuery.$match['nestedAttchments.isArchived'] = true;
        } else {
            isArchiveQuery.$match['$or'] = [
                {
                    'nestedAttchments.isArchived': false,
                },
                {
                    'nestedAttchments.isArchived': null,
                },
                {
                    'nestedAttchments.isArchived': { $exists: false },
                },
            ];
        }
        if (!isSuperAdmin && decodedToken.organization.length === 0) {
            return [];
        }

        if (!criteria.organizations && criteria.organizations.length === 0) {
            criteria.organizations = decodedToken.organization;
        }

        if (criteria.organizations && criteria.organizations.length > 0) {
            const filters: any = [
                {
                    assignTo: {
                        $in: criteria.organizations.map(
                            (s) => new Types.ObjectId(s),
                        ),
                    },
                },
                {
                    createdByOrganization: {
                        $in: criteria.organizations.map(
                            (s) => new Types.ObjectId(s),
                        ),
                    },
                },
            ];
            search.$and.push({ $or: filters });
        }

        if (criteria.fileNameSearchText) {
            search.$and.push({
                'nestedAttchments.name': RegExp(
                    criteria.fileNameSearchText,
                    'i',
                ),
            });
        }

        const paginationProps: any = [
            // { $match: search.$and.length > 0 ? search : {} },
        ];

        paginationProps.push({ $sort: { 'nestedAttchments.createdAt': -1 } });
        if (
            (criteria.pageSize || criteria.pageSize > 0) &&
            (criteria.pageNumber || criteria.pageNumber === 0)
        ) {
            paginationProps.push({
                $skip: criteria.pageNumber * criteria.pageSize,
            });
            paginationProps.push({ $limit: criteria.pageSize });
        }

        return await this.activityModel.aggregate([
            // { $match: { _id: new Types.ObjectId('63e49b129eb7346a5cf29bd1') } },
            { $match: search.$and.length > 0 ? search : {} },
            {
                $lookup: {
                    from: 'organizations',
                    localField: 'createdByOrganization',
                    foreignField: '_id',
                    as: 'createdByOrganizationObj',
                },
            },
            {
                $lookup: {
                    from: 'organizations',
                    localField: 'assignTo',
                    foreignField: '_id',
                    as: 'assignToObj',
                },
            },
            {
                $addFields: {
                    attachments: {
                        $map: {
                            input: '$attachments',
                            as: 'attach',
                            in: {
                                $mergeObjects: [
                                    '$$attach',
                                    {
                                        activityid: '$_id',
                                    },
                                ],
                            },
                        },
                    },
                },
            },
            {
                $addFields: {
                    activityLog: {
                        $map: {
                            input: '$activityLog',
                            as: 'log',
                            in: {
                                $mergeObjects: [
                                    '$$log',
                                    {
                                        activityid: '$_id',
                                        attachments: {
                                            $map: {
                                                input: '$$log.attachments',
                                                as: 'attachment',
                                                in: {
                                                    $mergeObjects: [
                                                        '$$attachment',
                                                        {
                                                            activityLogId:
                                                                '$$log._id',
                                                            activityId: '$_id',
                                                        },
                                                    ],
                                                },
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                    },
                },
            },
            {
                $addFields: {
                    nestedAttchments: {
                        $reduce: {
                            input: '$activityLog.attachments',
                            initialValue: [],
                            in: {
                                $concatArrays: ['$$value', '$$this'],
                            },
                        },
                    },
                    createdByOrganizationObj: {
                        $arrayElemAt: ['$createdByOrganizationObj', 0],
                    },
                    assignToObj: {
                        $arrayElemAt: ['$assignToObj', 0],
                    },
                },
            },
            {
                $addFields: {
                    nestedAttchments: {
                        $concatArrays: ['$nestedAttchments', '$attachments'],
                    },
                },
            },
            { $unwind: '$nestedAttchments' },

            {
                $project: {
                    nestedAttchments: 1,
                    uniqIdentity: 1,
                },
            },
            {
                $match:
                    criteria.organizations.length > 0
                        ? {
                              'nestedAttchments.organizationId': {
                                  $in: criteria.organizations.map(
                                      (s) => new Types.ObjectId(s),
                                  ),
                              },
                          }
                        : {},
            },
            {
                $lookup: {
                    from: 'organizations',
                    localField: 'nestedAttchments.organizationId',
                    foreignField: '_id',
                    as: 'docOrg',
                },
            },
            isArchiveQuery,
            {
                $facet: {
                    attachments: [
                        ...paginationProps,
                        // { $sort: { 'nestedAttchments.createdAt': -1 } },
                    ],
                    count: [{ $match: {} }, { $count: 'count' }],
                },
            },
            // { $sort: { 'nestedAttchments.updatedAt': -1 } },
            // {
            //     $match: {
            //         "attachments.organizationId": {
            //             $in: criteria.organizations.map(
            //                 (s) => new Types.ObjectId(s),
            //             ),
            //         },
            //     },
            // },
        ]);
    }
}
