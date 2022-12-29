import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { ActivityDto } from './dto/activity.dto';
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
}
