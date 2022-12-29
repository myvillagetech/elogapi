import { Controller,Post, Res, Body, HttpStatus, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { response } from 'express';
import { get } from 'http';
import { ActivityService } from './activity.service';
import { ActivityDto } from './dto/activity.dto';

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
}
