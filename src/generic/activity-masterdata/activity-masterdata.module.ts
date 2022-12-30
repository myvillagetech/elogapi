import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { ActivityTypesSchema } from '../activity/activity-type/schemas/activity-type.schema';
import { ActivityMasterdataController } from './activity-masterdata.controller';
import { ActivityMasterdataService } from './activity-masterdata.service';
import { ActivityEntryTypesSchema, ActivityRelatedTypesSchema, ActivityScopesSchema, ActivitySectorsSchema } from './schemas/activity-masterdata.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:MODEL_ENUMS.ACTIVITY_TYPES, schema : ActivityTypesSchema}]),
  MongooseModule.forFeature([{name:MODEL_ENUMS.ACTIVITY_RELATED_TYPES, schema : ActivityRelatedTypesSchema}]),
  MongooseModule.forFeature([{name:MODEL_ENUMS.ACTIVITY_ENTRY_TYPE, schema : ActivityEntryTypesSchema}]),
  MongooseModule.forFeature([{name:MODEL_ENUMS.ACTIVITY_SCOPES, schema : ActivityScopesSchema}]),
  MongooseModule.forFeature([{name:MODEL_ENUMS.ACTIVITY_SECTORS, schema : ActivitySectorsSchema}]),
],
  controllers: [ActivityMasterdataController],
  providers: [ActivityMasterdataService],
  exports: [ActivityMasterdataService]
})
export class ActivityMasterdataModule {}
