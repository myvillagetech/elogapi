import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';
import { OrganizationSchema } from './schemas/organizations.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:MODEL_ENUMS.ORGANIZATIONS, schema : OrganizationSchema}]),UsersModule],
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
  exports:[OrganizationsService]
})
export class OrganizationsModule {}
