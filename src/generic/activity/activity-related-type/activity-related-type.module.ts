import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { ActivityRelatedTypeController } from './activity-related-type.controller';
import { ActivityRelatedTypeService } from './activity-related-type.service';
import { ActivityRelatedTypesSchema } from './schemas/activity-related-type.schemas';

@Module({
  imports:[MongooseModule.forFeature([{name:MODEL_ENUMS.ACTIVITY_RELATED_TYPES, schema : ActivityRelatedTypesSchema}])],
  controllers: [ActivityRelatedTypeController],
  providers: [ActivityRelatedTypeService],
  exports: [ActivityRelatedTypeService]
})
export class ActivityRelatedTypeModule {}
