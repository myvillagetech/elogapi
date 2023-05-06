import {
    Controller,
    Post,
    Res,
    Body,
    HttpStatus,
    Get,
    Param,
    Put,
    Delete,
    Headers,
    UseGuards,
    HttpException,
    UseInterceptors,
} from '@nestjs/common';
import { UploadedFiles } from '@nestjs/common/decorators';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { Response, response } from 'express';
import { diskStorage, Multer } from 'multer';
import { extname, join } from 'path';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { ActivityService } from './activity.service';
import { ActivityLogDto } from './dto/activity-log.dto';
import { ActivityDto } from './dto/activity.dto';
import { ActivitySearchCriteriaDto } from './dto/activity.searchCriteria.dto';
import { AttachmentsSearchCriteria } from './dto/attachmentsSearchCriteria';
import {
    ActivityMetricsRequest,
    DashboardBaseModel,
} from './dto/dashboard.dto';
import {
    ArchiveActivityDto,
    UpdateActivityAssignedToDto,
    UpdateActivityDto,
    UpdateActivityDueDateDto,
    UpdateActivityOrganizationDto,
    UpdateActivityStatusDto,
} from './dto/update-activity.dto';
import * as fs from 'fs';
import { readdirSync, existsSync } from 'fs';
import { ActivityAttchementArchiveDto } from './dto/activity-attachment-archive.dto';

@Controller('activity')
@ApiTags('activity')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
export class ActivityController {
    constructor(private activityService: ActivityService) {}
    private multer: Multer;

    @Post()
    @ApiParam({
        name: 'Authorization',
        required: false,
        description:
            '(Leave empty. Use lock icon on the top-right to authorize)',
    })
    async createActivity(
        @Res() response: any,
        @Body() activityDetails: ActivityDto,
        @Headers('Authorization') authHeader: string,
    ) {
        try {
            const newActivity = await this.activityService.createActivity(
                activityDetails,
                authHeader,
            );
            return response.status(HttpStatus.CREATED).json({
                message: 'Activity created Successfully',
                success: true,
                newActivity,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Unable to Create Activity',
                error: err,
                success: false,
            });
        }
    }

    @Get()
    async getAllActivities(@Res() response) {
        try {
            const activityData = await this.activityService.getAllActivities();
            return response.status(HttpStatus.OK).json({
                message: 'All activity fetched Successfully',
                data: activityData,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to fetch Activity data',
                error: error,
                success: false,
            });
        }
    }

    @Get('/:activityId')
    async getActivityByActivityId(
        @Res() response,
        @Param('activityId') activityId: string,
    ) {
        try {
            const activity = await this.activityService.getActivityByActivityId(
                activityId,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Activity Fetched Successfully',
                data: activity,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to Fetch Activity',
                error: error,
                success: false,
            });
        }
    }

    @Put('/:activityId')
    async updateActivityByActivityId(
        @Res() response,
        @Body() activityData: UpdateActivityDto,
        @Param('activityId') activityId: string,
    ) {
        try {
            const activity =
                await this.activityService.updateActivityByActivityId(
                    activityId,
                    activityData,
                );
            return response.status(HttpStatus.OK).json({
                message: 'Activity Updated Successfully',
                data: activity,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to Update Activity',
                error: error,
                success: false,
            });
        }
    }

    @Delete('/:activityId')
    async deleteActivityByActivityId(
        @Res() response,
        @Param('activityId') activityId: string,
    ) {
        try {
            const activity =
                await this.activityService.deleteActivityByActivityId(
                    activityId,
                );
            return response.status(HttpStatus.OK).json({
                message: 'Activity Deleted Successfully',
                data: activity,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to Delete Activity',
                error: error,
                success: false,
            });
        }
    }

    @Put('archive/:activityId')
    async archiveActivity(
        @Res() response,
        @Body() activityData: ArchiveActivityDto,
        @Param('activityId') activityId: string,
    ) {
        try {
            const activity = await this.activityService.archiveActivity(
                activityId,
                activityData,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Activity Archived Successfully',
                data: activity,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to Archive Activity',
                error: error,
                success: false,
            });
        }
    }

    @Put('activityLog/:activityId')
    @ApiParam({
        name: 'Authorization',
        required: false,
        description:
            '(Leave empty. Use lock icon on the top-right to authorize)',
    })
    async updateActivityLog(
        @Res() response,
        @Body() activityLog: ActivityLogDto,
        @Param('activityId') activityId: string,
        @Headers('Authorization') authHeader: string,
    ) {
        try {
            const result =
                await this.activityService.updateActivityLogByActivityId(
                    activityId,
                    activityLog,
                    authHeader,
                );
            return response.status(HttpStatus.OK).json({
                message: 'Activity Log Updated Successfully',
                data: result,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to update Activity Log',
                error: error,
                success: false,
            });
        }
    }

    @Put('update/activityStatus/:activityId')
    async updateActivityStatus(
        @Res() response,
        @Body() activityDetails: UpdateActivityStatusDto,
        @Param('activityId') activityId: string,
    ) {
        try {
            const result = await this.activityService.updateActivityStatus(
                activityId,
                activityDetails,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Activity Status Updated Successfully',
                data: result,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to update Activity Status',
                error: error,
                success: false,
            });
        }
    }

    @Get('archive/activities')
    async getAllArchivedActivities(@Res() response) {
        try {
            const result = await this.activityService.getAllArchiveActivities();
            return response.status(HttpStatus.OK).json({
                message: 'Archived Activities fetchedSuccessfully',
                data: result,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to fetch archived Activities',
                error: error,
                success: false,
            });
        }
    }

    @Put('update/dueDate/:activityId')
    @ApiParam({
        name: 'Authorization',
        required: false,
        description:
            '(Leave empty. Use lock icon on the top-right to authorize)',
    })
    async updateActivityDueDate(
        @Res() response,
        @Body() dueDateDetails: UpdateActivityDueDateDto,
        @Param('activityId') activityId: string,
        @Headers('Authorization') authHeader: string,
    ) {
        try {
            const result = await this.activityService.updateActivityDuedate(
                activityId,
                dueDateDetails,
                authHeader,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Activity duedate Updated Successfully',
                data: result,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to update activity duedate',
                error: error,
                success: false,
            });
        }
    }

    @Put('update/assignedTo')
    async updateActivityAssignedTo(
        @Res() response,
        @Body() dto: UpdateActivityAssignedToDto,
    ) {
        try {
            const result = await this.activityService.updateActivityAssignedTo(
                dto,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Activity assignement Updated Successfully',
                data: result,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to update activity assignement',
                error: error,
                success: false,
            });
        }
    }

    @Put('update/moveOrganization')
    @ApiParam({
        name: 'Authorization',
        required: false,
        description:
            '(Leave empty. Use lock icon on the top-right to authorize)',
    })
    async updateActivityOrganizationDto(
        @Res() response,
        @Body() dto: UpdateActivityOrganizationDto,
        @Headers('Authorization') authHeader: string,
    ) {
        try {
            const result =
                await this.activityService.updateActivityOrganization(
                    dto,
                    authHeader,
                );
            return response.status(HttpStatus.OK).json({
                message: 'Activity assignement Updated Successfully',
                data: result,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to update activity assignement',
                error: error,
                success: false,
            });
        }
    }

    @Post('activitysearch')
    @ApiParam({
        name: 'Authorization',
        required: false,
        description:
            '(Leave empty. Use lock icon on the top-right to authorize)',
    })
    async getActivitiesBySearchCriteria(
        @Body() criteria: ActivitySearchCriteriaDto,
        @Res() response,
        @Headers('Authorization') authHeader: string,
    ) {
        try {
            const result = await this.activityService.activitySerachCriteria(
                criteria,
                authHeader,
            );
            // return result;
            return response.status(HttpStatus.OK).json({
                message: 'fetched activities Successfully',
                data: result,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to fetch activities',
                error: error,
                success: false,
            });
        }
    }

    @Post('activitysearchPageHeaderCounts')
    @ApiParam({
        name: 'Authorization',
        required: false,
        description:
            '(Leave empty. Use lock icon on the top-right to authorize)',
    })
    async activitysearchPageHeaderCounts(
        @Body() criteria: ActivitySearchCriteriaDto,
        @Res() response,
        @Headers('Authorization') authHeader: string,
    ) {
        try {
            const result =
                await this.activityService.activitySerachPageHeaderCounts(
                    criteria,
                    authHeader,
                );
            // return result;
            return response.status(HttpStatus.OK).json({
                message: 'fetched activities counts Successfully',
                data: result,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to fetch counts activities',
                error: error,
                success: false,
            });
        }
    }

    @Post('dashboard/getDashBoardActivityMetrics')
    @ApiParam({
        name: 'Authorization',
        required: false,
        description:
            '(Leave empty. Use lock icon on the top-right to authorize)',
    })
    async getDashBoardActivityMetrics(
        @Body() request: ActivityMetricsRequest,
        @Res() response,
        @Headers('Authorization') authHeader: string,
    ) {
        try {
            const result =
                await this.activityService.getDashBoardActivityMetrics(
                    request,
                    authHeader,
                );
            // return result;
            return response.status(HttpStatus.OK).json({
                message: 'fetched activities Successfully',
                data: result,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to fetch activities',
                error: error,
                success: false,
            });
        }
    }

    @Post('dashboard/getDashBoardDueDateMetrics')
    @ApiParam({
        name: 'Authorization',
        required: false,
        description:
            '(Leave empty. Use lock icon on the top-right to authorize)',
    })
    async getDashBoardDueDateMetrics(
        @Res() response,
        @Body() request: DashboardBaseModel,
        @Headers('Authorization') authHeader: string,
    ) {
        try {
            const result =
                await this.activityService.getDashBoardDueDateMetrics(
                    request,
                    authHeader,
                );
            // return result;
            return response.status(HttpStatus.OK).json({
                message: 'fetched activities Successfully',
                data: result,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to fetch activities',
                error: error,
                success: false,
            });
        }
    }

    @Post('dashboard/getDashBoardRelatedToMetricsMetrics')
    @ApiParam({
        name: 'Authorization',
        required: false,
        description:
            '(Leave empty. Use lock icon on the top-right to authorize)',
    })
    async getDashBoardRelatedToMetricsMetrics(
        @Res() response,
        @Body() request: DashboardBaseModel,
        @Headers('Authorization') authHeader: string,
    ) {
        try {
            const result =
                await this.activityService.getDashBoardRelatedToMetricsMetrics(
                    request,
                    authHeader,
                );
            // return result;
            return response.status(HttpStatus.OK).json({
                message: 'fetched activities Successfully',
                data: result,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to fetch activities',
                error: error,
                success: false,
            });
        }
    }

    @Post('archive/multiple')
    async archiveMulitipleActivities(
        @Res() response,
        @Body() request: { activityIds: string[]; isArchive: boolean },
    ) {
        try {
            const result = await this.activityService.archiveMultipleActivities(
                request.activityIds,
                request.isArchive,
            );

            return response.status(HttpStatus.OK).json({
                message: 'updated activities Successfully',
                data: result,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to archive activities',
                error: error,
                success: false,
            });
        }
    }

    @Post('delete/multiple')
    async deleteMulitipleActivities(
        @Res() response,
        @Body() request: { activityIds: string[] },
    ) {
        try {
            const result = await this.activityService.deleteMultipleActivities(
                request.activityIds,
            );

            return response.status(HttpStatus.OK).json({
                message: 'deleted activities Successfully',
                data: result,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to delete activities',
                error: error,
                success: false,
            });
        }
    }

    @Post('getAttchements')
    @ApiParam({
        name: 'Authorization',
        required: false,
        description:
            '(Leave empty. Use lock icon on the top-right to authorize)',
    })
    async getAttachments(
        @Res() response,
        @Body() criteria: AttachmentsSearchCriteria,
        @Headers('Authorization') authHeader: string,
    ) {
        try {
            const result = await this.activityService.getAttachments(
                criteria,
                authHeader,
            );

            return response.status(HttpStatus.OK).json({
                message: 'attachements retrived Successfully',
                data: result,
                success: true,
            });
        } catch (error) {
            throw new HttpException(
                {
                    success: false,
                    error: error.message,
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
                {
                    cause: error,
                },
            );
        }
    }

    @Post('upload')
    @UseInterceptors(
        AnyFilesInterceptor({
            storage: diskStorage({
                destination: (req, file, cb) => {
                    if (!fs.existsSync(`./uploads/${file.fieldname}`)) {
                        fs.mkdirSync(`./uploads/${file.fieldname}`, {
                            recursive: true,
                        });
                    }
                    const path = `./uploads/${file.fieldname}`;
                    cb(null, path);
                },
                filename: (req, file, callback) => {
                    // generate a unique filename for the uploaded file
                    const name = file.originalname.split('.')[0];
                    const fileExtName = extname(file.originalname);
                    const randomName = Array(4)
                        .fill(null)
                        .map(() => Math.round(Math.random() * 16).toString(16))
                        .join('');
                    callback(null, `${name}${fileExtName}`);
                },
            }),
        }),
    )
    uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
        return files;
    }

    @Post('attachment/download')
    getFile(@Body() fileDetails: any, @Res() res: Response) {
        const filePath = join(
            __dirname,
            '..',
            '..',
            'uploads',
            fileDetails.path,
            fileDetails.fileName,
        );

        if (!existsSync(filePath)) {
            res.status(404).send('File not found');
            return;
        }

        res.sendFile(filePath);
    }

    @Post('/document/archive')
    async archiveDocument(
        @Res() response,
        @Body() data: ActivityAttchementArchiveDto,
    ) {
        try {
            const activity = await this.activityService.archiveDocument(data);
            return response.status(HttpStatus.OK).json({
                message: 'Document archived Successfully',
                data: activity,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to Fetch Activity',
                error: error,
                success: false,
            });
        }
    }

    @Post('/document/archive/revert')
    async revertDocumentArchival(
        @Res() response,
        @Body() data: ActivityAttchementArchiveDto,
    ) {
        try {
            const activity = await this.activityService.revertDocumentArchival(
                data,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Document archival reverted Successfully',
                data: activity,
                success: true,
            });
        } catch (error) {
            return response.status(error.status).json({
                message: 'Unable to Fetch Activity',
                error: error,
                success: false,
            });
        }
    }
}
