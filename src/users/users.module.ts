import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schemas';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { UserActivityLogSchema } from './schemas/user.activitylog';
import { OrganizationTypeService } from 'src/generic/organization-type/organization-type.service';
import { OrganizationTypeModule } from 'src/generic/organization-type/organization-type.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: MODEL_ENUMS.USERS, schema: UserSchema },
            {
                name: MODEL_ENUMS.USERS_ACTIVITY_LOG,
                schema: UserActivityLogSchema,
            },
        ]),
        OrganizationTypeModule
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
