import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post()
    async createUser(@Res() response, @Body() userModel: UserDto) {
        try {
            const newUser = await this.userService.createUser(userModel);
            return response.status(HttpStatus.CREATED).json({
                message: 'User has been created successfully',
                success : true,
                newUser,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: User not created!',
                error: 'Bad Request',
                success : false,
            });
        }
    }

    @Put('/:id')
    async updateUser(
        @Res() response,
        @Param('id') userId: string,
        @Body() userModel: UserDto,
    ) {
        try {
            const existingUser = await this.userService.updateUser(userId, userModel);
            return response.status(HttpStatus.OK).json({
                message: 'User has been successfully updated',
                existingUser,
                success : true,
            });
        } catch (err) {
            return response.status(err.status).json({error : err.response , success : false,});
        }
    }

    @Get()
    async getUsers(@Res() response) {
        try {
            const userData = await this.userService.getAllUsers();
            return response.status(HttpStatus.OK).json({
                message: 'All users data found successfully',
                data: userData,
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

    @Get('/:id')
    async getUser(@Res() response, @Param('id') userId: string) {
        try {
            const existingUser = await this.userService.getUserById(userId);
            return response.status(HttpStatus.OK).json({
                message: 'User found successfully',
                existingUser,
                success : true,
            });
        } catch (err) {
            return response.status(err.status).json({error : err.response,success : false });
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
}

