import { Controller ,Post,Get,Res,Body, HttpStatus} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ActivityMasterdataService } from './activity-masterdata.service';


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
}
