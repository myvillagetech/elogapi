import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { ActivityRelatedTypeDto } from './dto/activity-related-type.dto';
import { ActivityRelatedTypeDocument } from './schemas/activity-related-type.schemas';

@Injectable()
export class ActivityRelatedTypeService {

    @InjectModel(MODEL_ENUMS.ACTIVITY_RELATED_TYPES) private activityRelatedTypeModel: Model<ActivityRelatedTypeDocument>
    constructor(){}

    async createActivityRelatedType( activityRelatedTypeDto : ActivityRelatedTypeDto) : Promise <ActivityRelatedTypeDocument>{
        const newActivityRelatedType = await new this.activityRelatedTypeModel(activityRelatedTypeDto);

        return newActivityRelatedType.save();
    }

    async getAllActivityRelatedTypes(): Promise<ActivityRelatedTypeDocument[]> {
        const activityRelatedTypes = await this.activityRelatedTypeModel.find();
        if (!activityRelatedTypes || activityRelatedTypes.length == 0) {
            throw new NotFoundException('activity related types data not found!');
        }
        return activityRelatedTypes;
    }

}
