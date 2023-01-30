import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    Put,
    Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { response } from 'express';
import { ResetPasswordDto } from './dto/resetPassword.dto';
import {
    addOrganizationsToUserDto,
    addUsersToOrganizationDto,
    removeOrganizationsfromUserDto,
    removeUsersfromOrganizationDto,
    UpdateUserPasswordDto,
    UserDto,
    UserUpdateDto,
} from './dto/user.dto';
import { UserSearchCriteriaDto } from './dto/user.searchCriteria.dto';
import { UsersService } from './users.service';

@Controller('user')
@ApiTags('user')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post()
    async createUser(@Res() response, @Body() userModel: UserDto) {
        try {
            const newUser = await this.userService.createUser(userModel);
            return response.status(HttpStatus.CREATED).json({
                message: 'User has been created successfully',
                success: true,
                newUser,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: User not created!',
                error: err,
                success: false,
            });
        }
    }

    @Put('/:id')
    async updateUser(
        @Res() response,
        @Param('id') userId: string,
        @Body() userModel: UserUpdateDto,
    ) {
        try {
            const existingUser = await this.userService.updateUser(
                userId,
                userModel,
            );
            return response.status(HttpStatus.OK).json({
                message: 'User has been successfully updated',
                existingUser,
                success: true,
            });
        } catch (err) {
            return response
                .status(err.status)
                .json({ error: err.response, success: false });
        }
    }

    @Get()
    async getUsers(@Res() response) {
        try {
            const userData = await this.userService.getAllUsers();
            return response.status(HttpStatus.OK).json({
                message: 'All users data found successfully',
                data: userData,
                success: true,
            });
        } catch (err) {
            return response.status(err.status).json({
                errorMessage: err.message,
                errorCode: err.statusCode,
                success: false,
            });
        }
    }

    @Get('/:id')
    async getUser(@Res() response, @Param('id') userId: string) {
        try {
            const existingUser = await this.userService.getUserById(userId);
            return response.status(HttpStatus.OK).json({
                message: 'User found successfully',
                existingUser,
                success: true,
            });
        } catch (err) {
            return response
                .status(err.status)
                .json({ error: err.response, success: false });
        }
    }

    @Delete('/:id')
    async deleteUser(@Res() response, @Param('id') userId: string) {
        try {
            const deletedUser = await this.userService.deleteUser(userId);
            return response.status(HttpStatus.OK).json({
                message: 'User deleted successfully',
                deletedUser,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('organization/:id')
    async getUsersByOrganization(
        @Res() response,
        @Param('id') organizationId: string,
    ) {
        try {
            const users = await this.userService.getUsersByorganizationId(
                organizationId,
            );

            return response.status(HttpStatus.OK).json({
                message: 'Users fetched Successfully',
                success: true,
                users,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Faild to fetch Users',
                success: false,
                error,
            });
        }
    }

    // @Put('admin/resetuserpassword/:id')
    // async updateUserPassword(@Res() response, @Param('id') userId : string,  @Body() newPassword: UpdateUserPasswordDto){
    //     try{
    //         const user = await this.userService.updateUserPassword(userId,newPassword.newPassword);

    //         return response.status(HttpStatus.OK).json({
    //             message : 'User Password updated successfully',
    //             success : true,
    //         })
    //     }  catch (error){
    //         return response.status(HttpStatus.BAD_REQUEST).json({
    //             message : 'Faild to fetch Users',
    //             success : false,
    //             error
    //         })
    //     }
    // }

    @Post('/searchCriteria')
    async getUsersBySearchCriteria(
        @Res() response,
        @Body() usersSerachCriteria: UserSearchCriteriaDto,
    ) {
        try {
            const users = await this.userService.usersSearchCriteria(
                usersSerachCriteria,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Users Fetched Successfully',
                success: true,
                data: {
                    metrics: users.metrics,
                    users: users.results[0].users,
                    totalCount: users.results[0].metrics[0]?.totalCount,
                },
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Faild to fetch Users',
                success: false,
                error,
            });
        }
    }

    @Put('/organization/removeUsersfromOrganization')
    async removeUsersfromOrganization(
        @Res() response,
        @Body() removeUsersfromOrganizationDto: removeUsersfromOrganizationDto,
    ) {
        try {
            const result = await this.userService.removeUsersFormOrganization(
                removeUsersfromOrganizationDto,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Updated users data successfully',
                success: true,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Faild to update organization data of user',
                success: false,
                error,
            });
        }
    }

    @Put('/remove/OrganizationsfromUser')
    async removeOrganizationsfromUser(
        @Res() response,
        @Body() removeOrganizationsfromUserDto: removeOrganizationsfromUserDto,
    ) {
        try {
            const result = await this.userService.removeOrganizationsFormUser(
                removeOrganizationsfromUserDto,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Updated organizations data successfully',
                success: true,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Faild to update organization data of user',
                success: false,
                error,
            });
        }
    }

    @Put('/organzation/addUsersToOrganization')
    async addUsersToOrganization(
        @Res() response,
        @Body() addUsersToOrganizationDto: addUsersToOrganizationDto,
    ) {
        try {
            const result = await this.userService.addUsersToOrganization(
                addUsersToOrganizationDto,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Updated organizations data successfully',
                success: true,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Faild to update organization data of user',
                success: false,
                error,
            });
        }
    }

    @Put('/add/UsersToOrganization')
    async addOrganizationsToUser(
        @Res() response,
        @Body() addOrganizationsToUserDto: addOrganizationsToUserDto,
    ) {
        try {
            const result = await this.userService.addOrganizationsToUsers(
                addOrganizationsToUserDto,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Updated User data successfully',
                success: true,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Faild to update organization data of user',
                success: false,
                error,
            });
        }
    }

    @Post('reset/Password')
    async resetPassword(
        @Res() response,
        @Body() resetPasswordDto: ResetPasswordDto,
    ) {
        try {
            const result = await this.userService.userResetPassword(
                resetPasswordDto,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Password reset successfull',
                success: true,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Faild to reset user password',
                success: false,
                error,
            });
        }
    }

    @Get('dashboard/getUserMetrics')
    async getUserMetrics() {
        try {
            const result = await this.userService.getUserMetrics();
            return result;
            // return response.status(HttpStatus.OK).json({
            //     message: 'Metrics retrieved successfully',
            //     success: true,
            //     data: result,
            // });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Faild to retrieve metrics',
                success: false,
                error,
            });
        }
    }
}
