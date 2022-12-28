import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OrganizationTypeModule } from './generic/organization-type/organization-type.module';
import { MONGO_KEYS } from './config/keys.config';
import { OrganizationsModule } from './organizations/organizations.module';
import { UsersModule } from './users/users.module';
import { ActivityTypeModule } from './generic/activity/activity-type/activity-type.module';
import { ProfileModule } from './profile/profile.module';
import { ActivityRelatedTypeModule } from './generic/activity/activity-related-type/activity-related-type.module';
import { ActivityModule } from './activity/activity.module';



@Module({
  imports:  [MongooseModule.forRoot(MONGO_KEYS.url), 
    AuthModule,
    UsersModule,
    OrganizationsModule, 
    OrganizationTypeModule,
    ActivityTypeModule,
    ActivityRelatedTypeModule,
    ProfileModule,
    ActivityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
