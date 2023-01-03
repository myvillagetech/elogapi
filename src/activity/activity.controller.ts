import { Controller,Post, Res, Body, HttpStatus, Get, Param , Put, Delete} from '@nestjs/common';
import {  ApiTags } from '@nestjs/swagger';
import { ActivityService } from './activity.service';
import { ActivityDto } from './dto/activity.dto';
import { ArchiveActivityDto, UpdateActivityDto } from './dto/update-activity.dto';

@Controller('activity')
@ApiTags('activity')
export class ActivityController {
    constructor(private activityService : ActivityService){
    }

    @Post()
    async createActivity(@Res() response :any, @Body() activityDetails : ActivityDto){
        try{
            const newActivity = await this.activityService.createActivity(activityDetails);
            return response.status(HttpStatus.CREATED).json({
                message : 'Activity created Successfully',
                success : true,
                newActivity
            });
        } catch(err){
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode : 400,
                message : 'Unable to Create Activity',
                error : err,
                success : false
            })
        }
    }

    @Get()
    async getAllActivities(@Res() response) {
        try{
            const activityData = await this.activityService.getAllActivities();
            return response.status(HttpStatus.OK).json({
                message : 'All activity fetched Successfully',
                data : activityData,
                success : true
            });
        }catch(error){
            return response.status(error.status).json({
                message : 'Unable to fetch Activity data',
                error : error,
                success : false
            })
        }
    }

    @Get("/:activityId")
    async getActivityByActivityId(@Res() response, @Param('activityId') activityId : string){
        try{
            const activity = await this.activityService.getActivityByActivityId(activityId);
            return response.status(HttpStatus.OK).json({
                message : 'Activity Fetched Successfully',
                data : activity,
                success : true
            });
        }catch(error){
            return response.status(error.status).json({
                message : 'Unable to Fetch Activity',
                error : error,
                success : false
            })
        }
    }

    @Put("/:activityId")
    async updateActivityByActivityId(@Res() response, @Body() activityData : UpdateActivityDto, @Param('activityId') activityId : string){
        try{
            const activity = await this.activityService.updateActivityByActivityId(activityId,activityData);
            return response.status(HttpStatus.OK).json({
                message : 'Activity Updated Successfully',
                data : activity,
                success : true
            });
        }catch(error){
            return response.status(error.status).json({
                message : 'Unable to Update Activity',
                error : error,
                success : false
            })
        }
    }

    @Delete("/:activityId")
    async deleteActivityByActivityId(@Res() response, @Param('activityId') activityId : string){
        try{
            const activity = await this.activityService.deleteActivityByActivityId(activityId);
            return response.status(HttpStatus.OK).json({
                message : 'Activity Deleted Successfully',
                data : activity,
                success : true
            });
        }catch(error){
            return response.status(error.status).json({
                message : 'Unable to Delete Activity',
                error : error,
                success : false
            })
        }
    }

    @Put("archive/:activityId")
    async archiveActivity(@Res() response, @Body() activityData : ArchiveActivityDto, @Param('activityId') activityId : string){
        try{
            const activity = await this.activityService.archiveActivity(activityId,activityData);
            return response.status(HttpStatus.OK).json({
                message : 'Activity Archived Successfully',
                data : activity,
                success : true
            });
        }catch(error){
            return response.status(error.status).json({
                message : 'Unable to Archive Activity',
                error : error,
                success : false
            })
        }
    }
}
