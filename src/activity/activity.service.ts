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
import { ActivityMetricsRequest } from './dto/dashboard.dto';

@Injectable()
export class ActivityService {
    @InjectModel(MODEL_ENUMS.ACTIVITIES)
    private activityModel: Model<ActivityDocument>;

    constructor(private readonly authService: AuthService) {}

    async createActivity(
        activityDto: ActivityDto,
        tokenHeader: string,
    ): Promise<ActivityDocument> {
        const toDay = new Date();
        const dueDate = new Date(toDay.setDate(toDay.getDate() + 21));
        const decodedToken = this.authService.getDecodedToken(tokenHeader);
        const newActivity = await new this.activityModel({
            ...activityDto,
            dueDate: dueDate,
            dueDateLog: {
                dueDate: dueDate,
                createdBy: decodedToken['_doc']._id,
                createdByUserName: decodedToken['_doc'].Name,
            },
            assignTo: activityDto.organization[0],
            createdBy: decodedToken['_doc']._id,
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
        const updatedActivity = await this.activityModel.findByIdAndUpdate(
            activityId,
            activityData,
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
        const decodedToken = this.authService.getDecodedToken(tokenHeader);
        const queryObject = {
            $push: {
                activityLog: {
                    ...activityLog,
                    userId: new Types.ObjectId(activityLog.userId),
                    createdBy: decodedToken['_doc']._id,
                    createdByUserName: decodedToken['_doc'].Name,
                },
            },
        };

        if (activityLog.visibility) {
            queryObject['visibility'] = activityLog.visibility;
        }

        if (activityLog.priority) {
            queryObject['priority'] = activityLog.priority;
        }

        if (activityLog.status) {
            queryObject['status'] = activityLog.status;
            queryObject.$push['statusLog'] = { status: activityLog.status };
        }

        const result = await this.activityModel.updateOne(
            { _id: new Types.ObjectId(activityId) },
            queryObject,
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
        const decodedToken = this.authService.getDecodedToken(tokenHeader);
        const result = await this.activityModel.updateOne(
            { _id: new Types.ObjectId(activityId) },
            {
                dueDate: dueDateDetails.dueDate,
                $push: {
                    dueDateLog: {
                        ...dueDateDetails,
                        createdBy: decodedToken['_doc']._id,
                        createdByUserName: decodedToken['_doc'].Name,
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
        const result = await this.activityModel.updateOne(
            { _id: new Types.ObjectId(dto.activityId) },
            {
                organization: new Types.ObjectId(dto.organzation),
            },
        );
        if (!result) {
            throw new NotFoundException('Activity data not found');
        }

        return result;
    }

    async activitySerachCriteria(criteria: ActivitySearchCriteriaDto) {
        let result = [];

        const search = { $and: [] };

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
                            $gte: dayjs().startOf('day'),
                            $lte: dayjs().endOf('day'),
                        },
                    });
                }

                if (criteria.dueDate.customString === 'OVERDUE') {
                    search.$and.push({
                        dueDate: {
                            $lte: dayjs().startOf('day'),
                        },
                    });
                }
            } else {
                if (criteria.dueDate.fromDate) {
                    search.$and.push({
                        dueDate: {
                            $gte: dayjs(criteria.dueDate.fromDate).startOf(
                                'day',
                            ),
                        },
                    });
                }
                if (criteria.dueDate.toDate) {
                    search.$and.push({
                        dueDate: {
                            $lte: dayjs(criteria.dueDate.toDate).endOf('day'),
                        },
                    });
                }
            }
        }

        if (criteria.createdDate) {
            if (criteria.createdDate.quantity && criteria.createdDate.unit) {
                const pastTime = dayjs().subtract(
                    getMilliSecondsbyParam({
                        unit: criteria.createdDate.unit,
                        quantity: criteria.createdDate.quantity,
                    }),
                    'ms',
                );
                search.$and.push({
                    createdAt: {
                        $gte: pastTime,
                    },
                });
            }

            if (criteria.createdDate.fromDate) {
                search.$and.push({
                    createdAt: {
                        $gte: dayjs(criteria.createdDate.fromDate).startOf(
                            'day',
                        ),
                    },
                });
            }

            if (criteria.createdDate.toDate) {
                search.$and.push({
                    createdAt: {
                        $lte: dayjs(criteria.createdDate.toDate).endOf('day'),
                    },
                });
            }
        }

        const paginationProps: any = [
            { $match: search.$and.length > 0 ? search : {} },
        ];

        result = await this.activityModel.aggregate([
            {
                $facet: {
                    schedules: paginationProps,
                },
            },
        ]);
        return result;
    }

    async getDashBoardActivityMetrics(request: ActivityMetricsRequest) {
        const search = { $and: [] };

        if (request.type) {
            search.$and.push({
                activityType: new mongoose.Types.ObjectId(request.type),
            });
        }

        if (request.dateRnge.fromDate) {
            search.$and.push({
                createdAt: {
                    $gte: dayjs(request.dateRnge.fromDate).startOf('day'),
                },
            });
        }

        if (request.dateRnge.toDate) {
            search.$and.push({
                createdAt: {
                    $lte: dayjs(request.dateRnge.toDate).endOf('day'),
                },
            });
        }

        const result = await this.activityModel.aggregate([
            { $match: search },
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
                    notAdmissible: [
                        { $match: { status: 'NOTADMISSIBLE' } },
                        { $count: 'resolvedCount' },
                    ],
                },
            },
        ]);
        return result;
    }

    async getDashBoardDueDateMetrics() {
        const search = { $and: [] };

        const result = await this.activityModel.aggregate([
            { $match: search },
            {
                $facet: {
                    oneWeek: [
                        {
                            $match: {
                                dueDate: {
                                    $and: [
                                        {
                                            $lte: dayjs().startOf('day'),
                                        },
                                        {
                                            $gte: dayjs()
                                                .subtract(
                                                    getMilliSecondsbyParam({
                                                        unit: 'W',
                                                        quantity: 1,
                                                    }),
                                                    'ms',
                                                )
                                                .startOf('day'),
                                        },
                                    ],
                                },
                            },
                        },
                        { $count: 'oneWeek' },
                    ],
                    oneToTwoWeek: [
                        {
                            $match: {
                                dueDate: {
                                    $and: [
                                        {
                                            $lte: dayjs()
                                                .subtract(
                                                    getMilliSecondsbyParam({
                                                        unit: 'W',
                                                        quantity: 1,
                                                    }),
                                                    'ms',
                                                )
                                                .startOf('day'),
                                        },
                                        {
                                            $gte: dayjs()
                                                .subtract(
                                                    getMilliSecondsbyParam({
                                                        unit: 'W',
                                                        quantity: 2,
                                                    }),
                                                    'ms',
                                                )
                                                .startOf('day'),
                                        },
                                    ],
                                },
                            },
                        },
                        { $count: 'oneToTwoWeeks' },
                    ],
                    twoWeeksToOneMonth: [
                        {
                            $match: {
                                dueDate: {
                                    $and: [
                                        {
                                            $lte: dayjs()
                                                .subtract(
                                                    getMilliSecondsbyParam({
                                                        unit: 'W',
                                                        quantity: 2,
                                                    }),
                                                    'ms',
                                                )
                                                .startOf('day'),
                                        },
                                        {
                                            $gte: dayjs()
                                                .subtract(
                                                    getMilliSecondsbyParam({
                                                        unit: 'M',
                                                        quantity: 1,
                                                    }),
                                                    'ms',
                                                )
                                                .startOf('day'),
                                        },
                                    ],
                                },
                            },
                        },
                        { $count: 'twoWeeksToOneMonth' },
                    ],
                    moreThanAMonth: [
                        {
                            $match: {
                                dueDate: {
                                    $and: [
                                        {
                                            $lte: dayjs()
                                                .subtract(1, 'M')
                                                .startOf('day'),
                                        },
                                    ],
                                },
                            },
                        },
                        { $count: 'moreThanAMonth' },
                    ],
                    OnTime: [
                        {
                            $match: {
                                dueDate: {
                                    $and: [
                                        {
                                            $gte: dayjs().startOf('day'),
                                        },
                                    ],
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
}
