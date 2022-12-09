import { Body, Controller,Post, Res, HttpStatus, Get,Put,Delete, Param, Query } from '@nestjs/common';
import { OrganizationDto } from './dto/organizations.dto';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
export class OrganizationsController {
    constructor(private organizationsService:OrganizationsService){}

    @Post()
    async createOrganization(@Res() response, @Body() organizationModel : OrganizationDto){
        try{
            const newOrg = await this.organizationsService.createOrganization(organizationModel);
            return response.status(HttpStatus.OK).json({
                message : 'Organization created Successfully',
                success : true,
                newOrg
            })
        } catch (error){
            return response.status(HttpStatus.BAD_REQUEST).json({
                message : 'Faild to create Organization',
                success : false,
                error
            })
        }
    }

    @Get()
    async getAllOrganizations(@Res() response){
        try{
            const organizations = this.organizationsService.getAllOrganizations();
            return response.status(HttpStatus.OK).json({
                message : 'Organizations Fetched Successfully',
                success : true,
                organizations
            })

        } catch(error){
            return response.status(HttpStatus.BAD_REQUEST).json({
                message : 'Faild to fetch Organizations',
                success : false,
                error
            })
        }
    }

    @Get("/:id")
    async getOrganizationById(@Res() response, @Param() OrganizationId : string){
        try{
            const organization = this.organizationsService.getOrganizationById(OrganizationId);
            return response.status(HttpStatus.OK).json({
                message : 'Organization Fetched Successfully',
                success : true,
                organization
            })

        } catch(error){
            return response.status(HttpStatus.BAD_REQUEST).json({
                message : 'Faild to fetch Organization',
                success : false,
                error
            })
        }
    }

    @Get("/search")
    async getOrganizationsbySearch(@Res() response, @Query('searchString') searchString){
        try{
            const organizations = this.organizationsService.organizationTextSerach(searchString);
            return response.status(HttpStatus.OK).json({
                message : 'Organizations Fetched Successfully',
                success : true,
                organizations
            })

        } catch(error){
            return response.status(HttpStatus.BAD_REQUEST).json({
                message : 'Faild to fetch Organizations',
                success : false,
                error
            })
        }
    }
}
