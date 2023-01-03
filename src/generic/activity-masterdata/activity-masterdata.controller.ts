import { Controller ,Post,Get,Res,Body, HttpStatus, Put, Param, Delete} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ActivityMasterdataService } from './activity-masterdata.service';
import { CreateActivityTypeDto } from './dto/activity-masterdata.dto';


@Controller('activity-masterdata')
@ApiTags('activity-masterdata')
export class ActivityMasterdataController {
    constructor(private activitymasterDataService : ActivityMasterdataService){}

    // @Post()
    // async createActivityMasterData(@Res() response :any, @Body() activityMasterDataDetails : any){
    //     try{
    //         const newActivity = await this.activitymasterDataService.createActivityMasterData(activityMasterDataDetails);
    //         return response.status(HttpStatus.CREATED).json({
    //             message : 'Activity Master Data created Successfully',
    //             success : true,
    //             newActivity
    //         });
    //     } catch(err){
    //         return response.status(HttpStatus.BAD_REQUEST).json({
    //             statusCode : 400,
    //             message : 'Unable to create activity master data',
    //             error : err,
    //             success : false
    //         })
    //     }
    // }

    @Get()
    async getAllActivityMasterData(@Res() response) {
        try{
            const activityData = await this.activitymasterDataService.getAllActivityMasterData();
            return response.status(HttpStatus.OK).json({
                message : 'All activity master data fetched Successfully',
                data : activityData,
                success : true
            });
        }catch(error){
            return response.status(error.status).json({
                message : 'Unable to fetch Activity master data',
                error : error,
                success : false
            })
        }
    }

    @Post("create/activityType")
    async CreateActivityType(@Res() response, @Body() activityTypeDto : CreateActivityTypeDto){
        try {
            const activityData = await this.activitymasterDataService.createActivityType(activityTypeDto);
            return response.status(HttpStatus.OK).json({
                message : 'Activity Type created Successfully',
                data : activityData,
                success : true
            });
        }catch(error){
            return response.status(error.status).json({
                message : 'Unable to create activity type',
                error : error,
                success : false
            })
        }
    }

    @Put("update/activityType/:id")
    async UpdateActivityType(@Res() response, @Body() activityTypeDto : CreateActivityTypeDto, @Param('id') activityTypeId : string){
        try {
            const activityData = await this.activitymasterDataService.updateActivityType(activityTypeId, activityTypeDto);
            return response.status(HttpStatus.OK).json({
                message : 'Activity Type updated Successfully',
                data : activityData,
                success : true
            });
        }catch(error){
            return response.status(error.status).json({
                message : 'Unable to update activity type',
                error : error,
                success : false
            })
        }
    }

    @Delete("delete/activityType/:id")
    async DeleteActivityType(@Res() response, @Param('id') activityTypeId : string){
        try {
            const activityData = await this.activitymasterDataService.deleteActivityType(activityTypeId);
            return response.status(HttpStatus.OK).json({
                message : 'Activity Type deleted Successfully',
                data : activityData,
                success : true
            });
        }catch(error){
            return response.status(error.status).json({
                message : 'Unable to delete activity type',
                error : error,
                success : false
            })
        }
    }

    @Get("/activityType")
    async GetAllActivityTypes(@Res() response){
        try {
            const activityData = await this.activitymasterDataService.getAllActivityTypes();
            return response.status(HttpStatus.OK).json({
                message : 'Activity Types fetched Successfully',
                data : activityData,
                success : true
            });
        }catch(error){
            return response.status(error.status).json({
                message : 'Unable to fetch activity type',
                error : error,
                success : false
            })
        }
    }
}
