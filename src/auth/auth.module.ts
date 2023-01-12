import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategies';

@Module({
    controllers: [AuthController],
    providers: [AuthService,JwtStrategy],
    imports: [UsersModule],
    exports: [AuthService],
})
export class AuthModule {}
