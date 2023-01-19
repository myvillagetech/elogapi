import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import {
    BulkUpdateActivityTypesDto,
    CreateActivityTypeDto,
} from './dto/activity-masterdata.dto';
import {
    ActivityEntryTypesDocument,
    ActivityRelatedTypesDocument,
    ActivityScopesDocument,
    ActivitySectorsDocument,
    ActivityTypesDocument,
} from './schemas/activity-masterdata.schema';

@Injectable()
export class ActivityMasterdataService {
    @InjectModel(MODEL_ENUMS.ACTIVITY_TYPES)
    private activityTypesDocument: Model<ActivityTypesDocument>;
    @InjectModel(MODEL_ENUMS.ACTIVITY_RELATED_TYPES)
    private activityRelatedTypeDocument: Model<ActivityRelatedTypesDocument>;
    @InjectModel(MODEL_ENUMS.ACTIVITY_ENTRY_TYPE)
    private activityEntryTypesDocument: Model<ActivityEntryTypesDocument>;
    @InjectModel(MODEL_ENUMS.ACTIVITY_SCOPES)
    private activityScopesDocument: Model<ActivityScopesDocument>;
    @InjectModel(MODEL_ENUMS.ACTIVITY_SECTORS)
    private activitySectorsDocument: Model<ActivitySectorsDocument>;

    constructor() { }

    async getAllActivityMasterData(): Promise<any> {
        const activityTypesData = await this.activityTypesDocument.find();
        const activityRelatedTypesData =
            await this.activityRelatedTypeDocument.find();
        const activityEntryTypesData =
            await this.activityEntryTypesDocument.find();
        const activityScopesData = await this.activityScopesDocument.find();
        const activitySectorsData = await this.activitySectorsDocument.find();

        const activityMasterData = {
            activityTypesData: activityTypesData,
            activityRelatedTypesData: activityRelatedTypesData,
            activityEntryTypesData: activityEntryTypesData,
            activityScopesData: activityScopesData,
            activitySectorsData: activitySectorsData,
        };
        return activityMasterData;
    }

    async getAllActivityRelatedToTypes() {
        return await this.activityRelatedTypeDocument.find();
    }

    async getAllActivityTypes(): Promise<ActivityTypesDocument[]> {
        const results = await this.activityTypesDocument.find();
        if (!results) {
            throw new NotFoundException('Activity Types data not found');
        }

        return results;
    }

    async createActivityType(
        activityType: CreateActivityTypeDto,
    ): Promise<ActivityTypesDocument> {
        const newActivityType = await new this.activityTypesDocument(
            activityType,
        );
        return newActivityType.save();
    }

    async updateActivityType(
        activityTypeId: string,
        activityType: CreateActivityTypeDto,
    ): Promise<ActivityTypesDocument> {
        const result = await this.activityTypesDocument.findByIdAndUpdate(
            activityTypeId,
            activityType,
            { new: true },
        );
        if (!result) {
            throw new NotFoundException('Activity Type Not Found');
        }

        return result;
    }

    async deleteActivityType(activityTypeId: string): Promise<any> {
        const result = await this.activityTypesDocument.findByIdAndDelete(
            activityTypeId,
        );

        if (!result) {
            throw new NotFoundException('Activity Type Not Found');
        }

        return result;
    }

    // async bulkUpdateActivityType(activityTypes : BulkUpdateActivityTypesDto[]):Promise<any>{
    //     let queries = activityTypes.map((activityType:BulkUpdateActivityTypesDto)=>{
    //         return { updateOne: {
    //             filter: { _id: activityType.id },
    //             update: { isAcvitve: activityType.isActive }
    //         }
    //         };
    //     })

    //     const result  = await this.activityTypesDocument.bulkWrite(queries);

    //     if(!result){
    //         throw new NotFoundException("Unable to update activity types");
    //     }

    //     return result;
    // }
}
