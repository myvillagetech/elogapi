import { Body, Controller, HttpStatus, Param, Post, Put, Res, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { response } from 'express';
import { ProfileDto } from './dto/profile.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
@ApiTags('profile')
export class ProfileController {
    userService: any;
    constructor(private readonly profileService: ProfileService) { }

    @Post()
    async createProfile(@Res() response, @Body() profileModel: ProfileDto) {
        try {
            const profile = await this.profileService.createProfile(profileModel);
            return response.status(HttpStatus.CREATED).json({
                message: 'Profile Created Sucessfully',
                success: true,
                profile
            });
        } catch (error: any) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Faild to create Profile!',
                error: error,
                success: false
            })
        }
    }

    @Put('/:id')
    async updateProfile(
        @Res() response,
        @Param('id') profileId: string,
        @Body() profileDetails: ProfileDto,
    ) {
        try {
            const profile = await this.profileService.updateProfile(profileId, profileDetails);
            return response.status(HttpStatus.OK).json({
                message: 'Profile updated successfully',
                profile,
                success: true,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Faild to create Profile!',
                error: error,
                success: false
            })
        }
    }

    @Get('userId/:id')
    async getProfilebyUserID(
        @Res() response,
        @Param('id') userId: string,
    ) {
        try {
            const profile = await this.profileService.getProfileByUserID(userId);
            return response.status(HttpStatus.OK).json({
                message : 'Profile Fetched Succesfully',
                profile,
                success : true
            });

        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Faild to fetch Profile!',
                error: error,
                success: false
            })
        }
        
    }

    @Get('/:id')
    async getProfilebyProfileID(
        @Res() response,
        @Param('id') profileId: string,
    ) {
        try {
            const profile = await this.profileService.getProfileByProfileId(profileId);
            return response.status(HttpStatus.OK).json({
                message : 'Profile Fetched Succesfully',
                profile,
                success : true
            });

        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Faild to fetch Profile!',
                error: error,
                success: false
            })
        }
        
    }

    @Get()
    async getAllProfiles(
        @Res() response
    ){
        try { 
            const profiles = await this.profileService.getAllProfile();
            return response.status(HttpStatus.OK).json({
                message : 'Profiles Fetched Succesfully',
                profiles,
                success : true
            });

        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Faild to fetch Profile!',
                error: error,
                success: false
            })
        }
    }

}


