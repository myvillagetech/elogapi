import { Module } from '@nestjs/common';
import { CompanySettingsService } from './company-settings.service';
import { CompanySettingsController } from './company-settings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { CompanySettingsSchema } from './schemas/company-settings.schemas';

@Module({
  imports: [
      MongooseModule.forFeature([
          { name: MODEL_ENUMS.COMPANY_SETTINGS, schema: CompanySettingsSchema },
      ]),
  ],
  controllers: [CompanySettingsController],
  providers: [CompanySettingsService],
  exports: [CompanySettingsService],
})
export class CompanySettingsModule {}
