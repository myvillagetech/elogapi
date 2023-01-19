import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OrganizationTypeModule } from './generic/organization-type/organization-type.module';
import { MONGO_KEYS } from './config/keys.config';
import { OrganizationsModule } from './organizations/organizations.module';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { ActivityModule } from './activity/activity.module';
import { ActivityMasterdataModule } from './generic/activity-masterdata/activity-masterdata.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { UserActivityModule } from './user-activity/user-activity.module';
import { UserActivityMiddleware } from './user-activity/user-activity.middleware';

@Module({
    imports: [
        MongooseModule.forRoot(MONGO_KEYS.url),
        AuthModule,
        UsersModule,
        OrganizationsModule,
        OrganizationTypeModule,
        ProfileModule,
        ActivityModule,
        ConfigModule.forRoot(),
        ActivityMasterdataModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'static'),
        }),
        UserActivityModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserActivityMiddleware).forRoutes('*');
    }
}
