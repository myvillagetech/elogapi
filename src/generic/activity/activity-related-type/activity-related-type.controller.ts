import { ApiTags } from '@nestjs/swagger';
import { ActivityRelatedTypeService } from './activity-related-type.service';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ActivityRelatedTypeDto } from './dto/activity-related-type.dto';

@Controller('activity-related-type')
@ApiTags('activity-related-type')
export class ActivityRelatedTypeController {
    constructor(private readonly activityRelatedTypeService:ActivityRelatedTypeService){}

    @Post()
    async createActionRelatedType(@Res() response, @Body() activityRelatedTypeModel: ActivityRelatedTypeDto) {
        try {
            const newActionType = await this.activityRelatedTypeService.createActivityRelatedType(activityRelatedTypeModel);
            return response.status(HttpStatus.CREATED).json({
                message: 'Activity Related Type created successfully',
                success : true,
                newActionType,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Activity Related Type not created!',
                error: 'Bad Request',
                success : false,
            });
        }
    }

    @Get()
    async getAllActivityTypes(@Res() response) {
        try {
            const activityTypes = await this.activityRelatedTypeService.getAllActivityRelatedTypes();
            return response.status(HttpStatus.OK).json({
                message: 'All activity related types fetched successfully',
                data: activityTypes,
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

}
