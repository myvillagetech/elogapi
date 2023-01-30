import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { ActivityMasterdataModule } from 'src/generic/activity-masterdata/activity-masterdata.module';
import { OrganizationSchema } from 'src/organizations/schemas/organizations.schema';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { ActivitySchema } from './schemas/activity.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: MODEL_ENUMS.ACTIVITIES, schema: ActivitySchema },
            { name: MODEL_ENUMS.ORGANIZATIONS, schema: OrganizationSchema },
        ]),
        AuthModule,
        ActivityMasterdataModule,
    ],
    controllers: [ActivityController],
    providers: [ActivityService],
    exports: [ActivityService],
})
export class ActivityModule {}
