/* eslint-disable prettier/prettier */
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { CompanySettingsDto, UpdateCompanySettingsDto } from './dto/company-setting.dto';
import { CompanySettingsDocument } from './schemas/company-settings.schemas';

@Injectable()
export class CompanySettingsService {
  @InjectModel(MODEL_ENUMS.COMPANY_SETTINGS)
  private companySettingsModel: Model<CompanySettingsDocument>;
  constructor() {}

  async createCompanySetting(
    createCompanySettingsDto: CompanySettingsDto,
  ): Promise<CompanySettingsDocument> {
      const newCompanySettings = await new this.companySettingsModel(
        createCompanySettingsDto,
      );
      return newCompanySettings.save();
  }

  async getCompanySettings(): Promise<CompanySettingsDocument[]> {
      const comapnySettings = await this.companySettingsModel.find();
      if (!comapnySettings || comapnySettings.length == 0) {
          throw new NotFoundException('Company data not found!');
      }
      return comapnySettings;
  }
  
  async updateCompanySettings(
    companySettingsId: string,
      updateCompanySettings: UpdateCompanySettingsDto,
  ): Promise<CompanySettingsDocument> {
      const companySettings = await this.companySettingsModel.findByIdAndUpdate(
          companySettingsId,
          updateCompanySettings,
          { new: true },
      );

      if (!companySettings) {
          throw new NotFoundException(
              `Company Settings with #${companySettingsId} not Found`,
          );
      }
      return companySettings;
  }

  async deleteCompanySettings(companySettingsId: string): Promise<String> {
      const companySettings = await this.companySettingsModel.findByIdAndDelete(
        companySettingsId,
      );

      if (!companySettings) {
          throw new NotFoundException(
              `Company Settings with #${companySettingsId} not Found`,
          );
      }
      return `Company Settings with #${companySettingsId} is deleted`;
  }

}
