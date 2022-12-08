import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto } from './dto/resetPassword.dto';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) { }
    
    async login(loginDetails: LoginDto):Promise<any>  {
        const user = await this.userService.getUserByEmail(loginDetails.email);
        if (!user) {
            throw new Error("Invaild user details");
        }
        const verifyUser : any = this.verifyPassword(loginDetails.password, user.password);
        if (verifyUser) {
            return {
                accessToken: jwt.sign(
                    { ...user ,password : ''},
                    "A4169476C5A5889A",
                    { expiresIn: '4hr' }
                )
            }
        } else {
            throw new Error("Invaild Password");
        }
    }

    async resetPassword(
        resetPasswordDto: ResetPasswordDto
    ): Promise<any | undefined> {
        const user :any = resetPasswordDto.userId ?
            await this.userService.getUserById(resetPasswordDto.userId) :
            await this.userService.getUserByEmail(resetPasswordDto.email);
        if (!user) {
            throw new Error("Invalid user details");
        }

        const hashedPassword = this.generatePassword(resetPasswordDto.newPassword);
        if (!this.verifyPassword(resetPasswordDto?.oldPassword,user?.password)) {
            throw new Error("In correct old password");
        }

        if (user.password === hashedPassword) {
            throw new Error("old and new passwords can not be same");
        }
        await this.userService.updateUserByEmail(user.email,
            { password: hashedPassword});
        return { messsage: 'Successfully updated' }
    }

    /**
     * it will genrate the hashed password 
     * @param password user Password
     * @returns the hashed password
     */
    generatePassword(password: string) {
        bcrypt.hash(password,10,function(hash){
            return hash;
        })
    }

    /**
     * this is to verify unhashed password and hashed password
     * @param password unhased password
     * @param hashedPassword allready hashed and stored password
     * @returns a boolean true or false;
     */
    verifyPassword(password: string, hashedPassword: string) : any {
        bcrypt.compare(password, hashedPassword, function(result) {
            return result
        });
    }
}
