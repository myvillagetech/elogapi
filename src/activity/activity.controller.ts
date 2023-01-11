import { Controller,Post, Res, Body, HttpStatus, Get, Param , Put, Delete} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { response } from 'express';
import { ActivityService } from './activity.service';
import { ActivityLogDto } from './dto/activity-log.dto';
import { ActivityDto } from './dto/activity.dto';
import { ArchiveActivityDto, UpdateActivityDto, UpdateActivityDueDateDto, UpdateActivityStatusDto } from './dto/update-activity.dto';

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

    @Put("activityLog/:activityId")
    async updateActivityLog(@Res() response, @Body() activityLog : ActivityLogDto,  @Param('activityId') activityId : string){
        try{
            const result = await this.activityService.updateActivityLogByActivityId(activityId,activityLog);
            return response.status(HttpStatus.OK).json({
                message : 'Activity Log Updated Successfully',
                data : result,
                success : true
            });
        }catch(error){
            return response.status(error.status).json({
                message : 'Unable to update Activity Log',
                error : error,
                success : false
            })
        }
    }

    @Put("update/activityStatus/:activityId")
    async updateActivityStatus(@Res() response, @Body() activityDetails : UpdateActivityStatusDto, @Param('activityId') activityId : string){
        try{
            const result = await this.activityService.updateActivityStatus(activityId,activityDetails);
            return response.status(HttpStatus.OK).json({
                message : 'Activity Status Updated Successfully',
                data : result,
                success : true
            });
        }catch(error){
            return response.status(error.status).json({
                message : 'Unable to update Activity Status',
                error : error,
                success : false
            })
        }
    }

    @Get("archive/activities")
    async getAllArchivedActivities(@Res() response){
        try{
            const result = await this.activityService.getAllArchiveActivities();
            return response.status(HttpStatus.OK).json({
                message : 'Archived Activities fetchedSuccessfully',
                data : result,
                success : true
            });
        }catch(error){
            return response.status(error.status).json({
                message : 'Unable to fetch archived Activities',
                error : error,
                success : false
            })
        }
    }

    @Put("update/dueDate/:activityId")
    async updateActivityDueDate(@Res() response,@Body() dueDateDetails : UpdateActivityDueDateDto, @Param('activityId') activityId : string){
        try{
            const result = await this.activityService.updateActivityDuedate(activityId,dueDateDetails)
            return response.status(HttpStatus.OK).json({
                message : 'Activity duedate Updated Successfully',
                data : result,
                success : true
            });
        }catch(error){
            return response.status(error.status).json({
                message : 'Unable to update activity duedate',
                error : error,
                success : false
            })
        }
    }
}
