import {
  Body,
  Controller,
  Post,
  Res,
  HttpStatus,
  Get,
  Put,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CompanySettingsService } from './company-settings.service';
import {
  CompanySettingsDto,
  UpdateCompanySettingsDto,
} from './dto/company-setting.dto';

@Controller('/companySettings')
@ApiTags('companySettings')
export class CompanySettingsController {
  constructor(private companySettingsService: CompanySettingsService) { }

  @Post()
  async createCompanySetting(
    @Res() response,
    @Body() companySettingsModel: CompanySettingsDto,
  ) {
    try {
      const newCompanySettings = await this.companySettingsService.createCompanySetting(
        companySettingsModel,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Company Settings created Successfully',
        success: true,
        newCompanySettings,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'Faild to create Company Settings',
        success: false,
        error,
      });
    }
  }

  @Get()
  async getCompanySettings(@Res() response) {
    try {
      const companySettings =
        await this.companySettingsService.getCompanySettings();
      return response.status(HttpStatus.OK).json({
        message: 'Company Settings Fetched Successfully',
        success: true,
        companySettings,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'Faild to fetch Company Settings',
        success: false,
        error,
      });
    }
  }

  @Put('/:id')
  async updateCompanySettings(
    @Res() response,
    @Param('id') companySettingsId: string,
    @Body() companySettingsModel: UpdateCompanySettingsDto,
  ) {
    try {
      const companySettings =
        await this.companySettingsService.updateCompanySettings(
          companySettingsId,
          companySettingsModel,
        );
      return response.status(HttpStatus.OK).json({
        message: 'Company Settings updated successfully',
        success: true,
        companySettings,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'Faild to update Company Settings',
        success: false,
        error,
      });
    }
  }

  @Delete('/:id')
  async deleteCompanySettings(
    @Res() response,
    @Param('id') companySettingsId: string,
  ) {
    try {
      await this.companySettingsService.deleteCompanySettings(
        companySettingsId,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Company Settings Deleted Successfully',
        success: true,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'Faild to delete Company Settings',
        success: false,
        error,
      });
    }
  }

}
