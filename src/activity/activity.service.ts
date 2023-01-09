import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { ActivityLogDto } from './dto/activity-log.dto';
import { ActivityDto } from './dto/activity.dto';
import { ArchiveActivityDto, UpdateActivityDto } from './dto/update-activity.dto';
import { ActivityDocument } from './schemas/activity.schema';

@Injectable()
export class ActivityService {

    @InjectModel(MODEL_ENUMS.ACTIVITIES) private activityModel: Model<ActivityDocument>
    constructor(){

    }

    async createActivity(activityDto : ActivityDto) : Promise<ActivityDocument>{
        const newActivity = await new this.activityModel(activityDto);
        return newActivity.save()
    }

    async getAllActivities():Promise<ActivityDocument[]>{
        const activityData = await this.activityModel.find();
        if(!activityData || activityData.length ===0){
            throw new NotFoundException('Activity data not found');
        }
        return activityData;
    }

    async getActivityByActivityId(activityId : string):Promise<any>{
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
                $match : {_id : new Types.ObjectId(activityId)}
            }
        ])

        if(!activity){
            throw new NotFoundException('Activity data not found');
        }

        return activity
    }

    async updateActivityByActivityId(activityId : string, activityData : UpdateActivityDto):Promise<ActivityDocument>{
        const updatedActivity = await this.activityModel.findByIdAndUpdate(activityId,activityData);

        if(!updatedActivity){
            throw new NotFoundException('Activity data not found');
        }

        return updatedActivity
    }

    async deleteActivityByActivityId(activityId:string):Promise<any>{
        const result = await this.activityModel.findByIdAndDelete(activityId);

        if(!result){
            throw new NotFoundException('Activity data not found');
        }

        return result
    }

    async archiveActivity(activityId:string,activityDetails : ArchiveActivityDto):Promise<any>{
        const result = await this.activityModel.findByIdAndUpdate(activityId,activityDetails);

        if(!result){
            throw new NotFoundException('Activity data not found');
        }

        return result
    }

    async updateActivityLogByActivityId(activityId :string, activityLog : ActivityLogDto):Promise<any>{
        // if(activityLog.status){
        //     await this.activityModel.updateOne(
        //         {"_id " : activityId},
        //         {$push : {activityLog : activityLog.status}}
        //     )
        // }
        // if(activityLog.priority){
        //     await this.activityModel.findByIdAndUpdate(activityId,{"priority": activityLog.priority})
        // }
        
        const result = await this.activityModel.updateOne(
            {"_id " : activityId},
            {$push : {activityLog : activityLog}}
        );

        if(!result){
            throw new NotFoundException('Activity data not found');
        }

        return result;
    }
}
