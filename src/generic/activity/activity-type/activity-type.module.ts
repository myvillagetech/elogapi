import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { ActivityTypeController } from './activity-type.controller';
import { ActivityTypeService } from './activity-type.service';
import { ActivityTypesSchema } from './schemas/activity-type.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:MODEL_ENUMS.ACTION_TYPES, schema : ActivityTypesSchema}])],
  controllers: [ActivityTypeController],
  providers: [ActivityTypeService],
  exports:[ActivityTypeService]
})
export class ActivityTypeModule {}
