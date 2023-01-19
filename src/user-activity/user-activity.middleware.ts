import { Injectable, NestMiddleware } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class UserActivityMiddleware implements NestMiddleware {
    constructor(
        private usersService: UsersService,
        private authService: AuthService,
    ) {}
    use(req: any, res: any, next: () => void) {
        if (req.headers.authorization) {
            const user = this.authService.getDecodedToken(
                req.headers.authorization,
            );
            this.usersService.logUserActvity(user);
        }

        next();
    }
}
