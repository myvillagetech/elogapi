import { Body, Controller, HttpException, HttpStatus, Ip, Post, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto } from './dto/resetPassword.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() body: LoginDto) {
        try {
            return await this.authService.login(body)
        } catch (error) {
            throw new HttpException(error.messsage, HttpStatus.BAD_REQUEST)
        }
    }

    @Post('resetPassword')
    async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
        try {
            return await this.authService.resetPassword(resetPasswordDto);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}
