import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { UserActivityLogSchema } from 'src/users/schemas/user.activitylog';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';
import { OrganizationSchema } from './schemas/organizations.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: MODEL_ENUMS.ORGANIZATIONS, schema: OrganizationSchema },
            {
                name: MODEL_ENUMS.USERS_ACTIVITY_LOG,
                schema: UserActivityLogSchema,
            },
        ]),
        UsersModule,
        AuthModule
    ],
    controllers: [OrganizationsController],
    providers: [OrganizationsService],
    exports: [OrganizationsService],
})
export class OrganizationsModule {}
