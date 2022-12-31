import { Body, Controller, HttpException, HttpStatus, Ip, Post, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Res() response, @Body() body: LoginDto) {
        try {
            const result = await this.authService.login(body);
            return response.status(HttpStatus.OK).json({
                message : 'Login Successfull',
                success : true,
                result
            })
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Invalid user credentials! Please try again',
                error: error,
                success : false,
            });
        }
    }
}
