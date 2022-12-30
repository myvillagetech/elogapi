import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { ActivityRelatedTypeDocument } from '../activity/activity-related-type/schemas/activity-related-type.schemas';
import { ActivityEntryTypesDocument, ActivityScopesDocument, ActivitySectorsDocument, ActivityTypesDocument } from './schemas/activity-masterdata.schema';

@Injectable()
export class ActivityMasterdataService {
    @InjectModel(MODEL_ENUMS.ACTIVITY_TYPES) private activityTypesDocument : Model<ActivityTypesDocument>
    @InjectModel(MODEL_ENUMS.ACTIVITY_RELATED_TYPES) private activityRelatedTypeDocument : Model<ActivityRelatedTypeDocument>
    @InjectModel(MODEL_ENUMS.ACTIVITY_ENTRY_TYPE) private activityEntryTypesDocument : Model<ActivityEntryTypesDocument>
    @InjectModel(MODEL_ENUMS.ACTIVITY_SCOPES) private activityScopesDocument : Model<ActivityScopesDocument>
    @InjectModel(MODEL_ENUMS.ACTIVITY_SECTORS) private activitySectorsDocument : Model<ActivitySectorsDocument>

    constructor(){

    }

    async getAllActivityMasterData():Promise<any>{
        const activityTypesData = await this.activityTypesDocument.find();
        const activityRelatedTypesData = await this.activityRelatedTypeDocument.find();
        const activityEntryTypesData = await this.activityEntryTypesDocument.find();
        const activityScopesData = await this.activityScopesDocument.find();
        const activitySectorsData = await this.activitySectorsDocument.find();

        const activityMasterData = {...activityTypesData,...activityRelatedTypesData,...activityEntryTypesData,...activityScopesData,...activitySectorsData};
        return activityMasterData;
    }

    // async createActivityTypesData

    // async createActivityMasterData(masterData : CrteateActivityMasterDataDto):Promise<any>{
        // const activityMasterData = await new this.activityMasterdataModel(masterData);
        // return activityMasterData.save()
    // }
}
