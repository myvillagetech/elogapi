import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { ActivityTypeDto } from './dto/activity-type.dto';
import { ActivityTypeDocument } from './schemas/activity-type.schema';

@Injectable()
export class ActivityTypeService {
    @InjectModel(MODEL_ENUMS.ACTION_TYPES) private activityTypeModel: Model<ActivityTypeDocument>
    constructor(){}

    async createActivityType( activityTypeDto : ActivityTypeDto) : Promise <ActivityTypeDocument>{
        const newActivityType = await new this.activityTypeModel(activityTypeDto);

        return newActivityType.save();
    }

    async getActivityTypeById(id: string): Promise<ActivityTypeDocument> {
        const existingActivityType = await this.activityTypeModel.findById(id);
        if (!existingActivityType) {
            throw new NotFoundException(`Activity type with ${id} is not found`)
        }
        return existingActivityType;
    }

    async getAllActivityTypes(): Promise<ActivityTypeDocument[]> {
        const activityTypes = await this.activityTypeModel.find();
        if (!activityTypes || activityTypes.length == 0) {
            throw new NotFoundException('activity types data not found!');
        }
        return activityTypes;
    }

    async updateActivityType(id: string, activityTypeDto : ActivityTypeDto): Promise<ActivityTypeDocument> {
        const existingOrganizationType = await this.activityTypeModel.findByIdAndUpdate(
            id,
            activityTypeDto,
            { new: true },
        );
        if (!existingOrganizationType) {
            throw new NotFoundException(`Activity type of #${id} not found`);
        }
        return existingOrganizationType;
    }

    async deleteactivtyType(id: string): Promise<ActivityTypeDocument> {
        const deletedActivity = await this.activityTypeModel.findByIdAndDelete(id);
        if (!deletedActivity) {
            throw new NotFoundException(`Activity type of #${id} not found`);
        }
        return deletedActivity;
    }
}
