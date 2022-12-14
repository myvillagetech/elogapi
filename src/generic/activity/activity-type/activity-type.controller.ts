import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ActivityTypeService } from './activity-type.service';
import { ActivityTypeDto } from './dto/activity-type.dto';


@Controller('activity-type')
@ApiTags('activity-type')
export class ActivityTypeController {
    constructor(private readonly activityTypeService:ActivityTypeService){}

    @Post()
    async createActionType(@Res() response, @Body() activityTypeModel: ActivityTypeDto) {
        try {
            const newActionType = await this.activityTypeService.createActivityType(activityTypeModel);
            return response.status(HttpStatus.CREATED).json({
                message: 'Activity Type created successfully',
                success : true,
                newActionType,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Activity Type not created!',
                error: 'Bad Request',
                success : false,
            });
        }
    }

    @Put('/:id')
    async updateActivityType(
        @Res() response,
        @Param('id') activityId: string,
        @Body() activityTypeModel: ActivityTypeDto,
    ) {
        try {
            const existingActivityType = await this.activityTypeService.updateActivityType(activityId, activityTypeModel);
            return response.status(HttpStatus.OK).json({
                message: 'Activity type successfully updated',
                existingActivityType,
                success : true,
            });
        } catch (err) {
            return response.status(err.status).json({error : err.response , success : false});
        }
    }

    @Get()
    async getAllActivityTypes(@Res() response) {
        try {
            const activityTypes = await this.activityTypeService.getAllActivityTypes();
            return response.status(HttpStatus.OK).json({
                message: 'All activity types fetched successfully',
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

    @Delete('/:id')
    async deleteActivityType(@Res() response, @Param('id') userId: string) {
        try {
            const deletedActivityType = await this.activityTypeService.deleteactivtyType(userId);
            return response.status(HttpStatus.OK).json({
                message: 'ActivityType deleted successfully',
                deletedActivityType,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}

