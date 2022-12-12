import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrganizationTypeDto } from './dto/organization-type.dto';
import { OrganizationTypeService } from './organization-type.service';

@Controller('organization-type')
@ApiTags('organization-type')
export class OrganizationTypeController {
    constructor(private readonly organizationTypeService:OrganizationTypeService){}

    @Post()
    async createOrganizationType(@Res() response, @Body() organizationTypeModel: OrganizationTypeDto) {
        try {
            const newOrganizationType = await this.organizationTypeService.createOrganizationType(organizationTypeModel);
            return response.status(HttpStatus.CREATED).json({
                message: 'Organization Type created successfully',
                success : true,
                newOrganizationType,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Organization Type not created!',
                error: 'Bad Request',
                success : false,
            });
        }
    }

    @Put('/:id')
    async updateOrganizationType(
        @Res() response,
        @Param('id') organizationId: string,
        @Body() organizationTypeModel: OrganizationTypeDto,
    ) {
        try {
            const existingOrganizationType = await this.organizationTypeService.updateOrganizationType(organizationId, organizationTypeModel);
            return response.status(HttpStatus.OK).json({
                message: 'Organization type successfully updated',
                existingOrganizationType,
                success : true,
            });
        } catch (err) {
            return response.status(err.status).json({error : err.response , success : false,});
        }
    }

    @Get()
    async getAllOrganizations(@Res() response) {
        try {
            const organizationTypes = await this.organizationTypeService.getAllOrganizationsTypes();
            return response.status(HttpStatus.OK).json({
                message: 'All organization types fetched successfully',
                data: organizationTypes,
                success : true,
            });
        } catch (err) {
            return response.status(err.status).json({
                errorMessage: err.message,
                errorCode: err.statusCode,
                success : false,
            });
        }
    }

    @Delete('/:id')
    async deleteOrganizationType(@Res() response, @Param('id') userId: string) {
        try {
            const deletedOrganizationType = await this.organizationTypeService.deleteOrganizationType(userId);
            return response.status(HttpStatus.OK).json({
                message: 'OrganizationType deleted successfully',
                deletedOrganizationType,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
