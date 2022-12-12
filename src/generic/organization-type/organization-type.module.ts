import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { OrganizationTypeController } from './organization-type.controller';
import { OrganizationTypeService } from './organization-type.service';
import { OrganizationTypesSchema } from './schemas/organization-type.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:MODEL_ENUMS.ORGANIZATION_TYPES, schema : OrganizationTypesSchema}])],
  controllers: [OrganizationTypeController],
  providers: [OrganizationTypeService],
  exports:[OrganizationTypeService]
})
export class OrganizationTypeModule {}
