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
    UseGuards,
    Headers,
} from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { OrganizationSearchCriteriaDto } from './dto/organization.searchCriteria.dto';
import {
    OrganizationDto,
    updateOrganizationDto,
} from './dto/organizations.dto';
import { OrganizationsService } from './organizations.service';

@Controller('/organizations')
@ApiTags('organizations')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
export class OrganizationsController {
    constructor(private organizationsService: OrganizationsService) {}

    @Post()
    @ApiParam({
        name: 'Authorization',
        required: false,
        description:
            '(Leave empty. Use lock icon on the top-right to authorize)',
    })
    async createOrganization(
        @Res() response,
        @Body() organizationModel: OrganizationDto,
        @Headers('Authorization') authHeader: string,
    ) {
        try {
            const newOrg = await this.organizationsService.createOrganization(
                organizationModel,
                authHeader,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Organization created Successfully',
                success: true,
                newOrg,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Faild to create Organization',
                success: false,
                error,
            });
        }
    }

    @Get()
    async getAllOrganizations(@Res() response) {
        try {
            const organizations =
                await this.organizationsService.getAllOrganizations();
            return response.status(HttpStatus.OK).json({
                message: 'Organizations Fetched Successfully',
                success: true,
                organizations,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Faild to fetch Organizations',
                success: false,
                error,
            });
        }
    }

    @Get('/search')
    async getOrganizationsbySearch(
        @Res() response,
        @Query('searchString') searchString: string,
    ) {
        try {
            const organizations =
                await this.organizationsService.organizationTextSerach(
                    searchString,
                );
            return response.status(HttpStatus.OK).json({
                message: 'Organizations Fetched Successfully',
                success: true,
                organizations,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Faild to fetch Organizations',
                success: false,
                error,
            });
        }
    }

    @Get('/:id')
    async getOrganizationById(
        @Res() response,
        @Param('id') OrganizationId: string,
    ) {
        try {
            const organization =
                await this.organizationsService.getOrganizationById(
                    OrganizationId,
                );
            return response.status(HttpStatus.OK).json({
                message: 'Organization Fetched Successfully',
                success: true,
                organization,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Faild to fetch Organization',
                success: false,
                error,
            });
        }
    }

    @Get('/userId/:id')
    async getOrganizationsByUserId(
        @Res() response,
        @Param('id') userId: string,
    ) {
        try {
            const organizations =
                await this.organizationsService.getAllOrganizationsbyUserId(
                    userId,
                );

            return response.status(HttpStatus.OK).json({
                message: 'Organizations Fetched Successfully',
                success: true,
                organizations,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Faild to fetch Organizations',
                success: false,
                error,
            });
        }
    }

    @Post('/searchCriteria')
    async getAllOrganizationsBySearchCriteria(
        @Res() response,
        @Body() OrganizationSearchCriteriaDto: OrganizationSearchCriteriaDto,
    ) {
        try {
            const organizations =
                await this.organizationsService.organizationSearchCriteria(
                    OrganizationSearchCriteriaDto,
                );
            return response.status(HttpStatus.OK).json({
                message: 'Organizations Fetched Successfully',
                success: true,
                data: {
                    metrics: organizations.metrics,
                    organizations: organizations.results[0].organizations,
                },
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Faild to fetch Organizations',
                success: false,
                error,
            });
        }
    }

    @Put('/:id')
    async updateOrganization(
        @Res() response,
        @Param('id') organizationId: string,
        @Body() organizationDetails: updateOrganizationDto,
    ) {
        try {
            const organization =
                await this.organizationsService.updateOrganization(
                    organizationId,
                    organizationDetails,
                );
            return response.status(HttpStatus.OK).json({
                message: 'Organization updated successfully',
                success: true,
                organization,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Faild to update organization',
                success: false,
                error,
            });
        }
    }

    @Delete('/:id')
    async deleteOrganization(
        @Res() response,
        @Param('id') organizationId: string,
    ) {
        try {
            const organization =
                await this.organizationsService.deleteOrganization(
                    organizationId,
                );
            return response.status(HttpStatus.OK).json({
                message: 'Organization Deleted Successfully',
                success: true,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Faild to delete organization',
                success: false,
                error,
            });
        }
    }

    @Get('/dashboard/metrics')
    async organizationMetrics(@Res() response) {
        try {
            const organization =
                await this.organizationsService.organizationMetrics();
            // return organization;
            return response.status(HttpStatus.OK).json({
                message: 'Metrics Retrieved Successfully',
                success: true,
                data: organization,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Metrics Retrieval failed',
                success: false,
                error,
            });
        }
    }
}
