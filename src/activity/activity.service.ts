import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { ActivityLogDto } from './dto/activity-log.dto';
import { ActivityDto } from './dto/activity.dto';
import { ArchiveActivityDto, UpdateActivityDto, UpdateActivityDueDateDto, UpdateActivityStatusDto } from './dto/update-activity.dto';
import { ActivityDocument } from './schemas/activity.schema';

@Injectable()
export class ActivityService {

    @InjectModel(MODEL_ENUMS.ACTIVITIES) private activityModel: Model<ActivityDocument>
    constructor() {

    }

    async createActivity(activityDto: ActivityDto): Promise<ActivityDocument> {
        let toDay = new Date()
        const dueDate = new Date(toDay.setDate(toDay.getDate()+21));
        const newActivity = await new this.activityModel({...activityDto,dueDate : dueDate,dueDateLog : {dueDate : dueDate}, assignTo : activityDto.organization[0] });
        // newActivity.markModified('attachments');
        return newActivity.save()
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
                }
            },
            {
                $match: { _id: new Types.ObjectId(activityId) }
            }
        ])

        if (!activity) {
            throw new NotFoundException('Activity data not found');
        }

        return activity
    }

    async updateActivityByActivityId(activityId: string, activityData: UpdateActivityDto): Promise<ActivityDocument> {
        const updatedActivity = await this.activityModel.findByIdAndUpdate(activityId, activityData);

        if (!updatedActivity) {
            throw new NotFoundException('Activity data not found');
        }

        return updatedActivity
    }

    async deleteActivityByActivityId(activityId: string): Promise<any> {
        const result = await this.activityModel.findByIdAndDelete(activityId);

        if (!result) {
            throw new NotFoundException('Activity data not found');
        }

        return result
    }

    async archiveActivity(activityId: string, activityDetails: ArchiveActivityDto): Promise<any> {
        const result = await this.activityModel.findByIdAndUpdate(activityId, activityDetails);

        if (!result) {
            throw new NotFoundException('Activity data not found');
        }

        return result
    }

    async updateActivityLogByActivityId(activityId: string, activityLog: ActivityLogDto): Promise<any> {

        const queryObject = { $push: { "activityLog": {...activityLog, userId: new Types.ObjectId(activityLog.userId)} } };

        if(activityLog.visibility){
            queryObject["visibility"] = activityLog.visibility
        }

        if (activityLog.priority) {
            queryObject["priority"] = activityLog.priority
        }

        if (activityLog.status) {
            queryObject["status"] = activityLog.status;
            queryObject.$push["statusLog"] = {status: activityLog.status}
        }

        const result = await this.activityModel.updateOne(
            { "_id": new Types.ObjectId(activityId) },
            queryObject

        );

        if (!result) {
            throw new NotFoundException('Activity data not found');
        }

        return result;
    }

    async updateActivityStatus(activityId : string , activityStatus : UpdateActivityStatusDto):Promise<any>{

        const result = await this.activityModel.findByIdAndUpdate(activityId,activityStatus, { new: true });

        if (!result) {
            throw new NotFoundException('Activity data not found');
        }

        return result;

    }

    async getAllArchiveActivities():Promise<ActivityDocument[]>{

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
                $match: { isArchive : true}
            }
        ])

        if (!results) {
            throw new NotFoundException('Activity data not found');
        }

        return results;
    }

    async updateActivityDuedate(activityId : string, dueDateDetails : UpdateActivityDueDateDto):Promise<any>{

        const result = await this.activityModel.updateOne(
            { "_id": new Types.ObjectId(activityId) },
            {
                dueDate : dueDateDetails.dueDate,
                $push : {dueDateLog : dueDateDetails}
            }
        );
        if (!result) {
            throw new NotFoundException('Activity data not found');
        }

        return result;

    }



    async activitySerachCriteria(){

    }
}
