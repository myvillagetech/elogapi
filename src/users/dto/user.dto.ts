import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    MaxLength,
} from 'class-validator';

export class UserDto{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly Name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly password: string;

    @IsNotEmpty()
    @ApiProperty({
        type: Array<String>
    })
    readonly organization: string[];

    @IsNotEmpty()
    @ApiProperty({
        type : Array<String>
    })
    readonly roles: string[];

    readonly department: string;

    readonly userAttributes : Object

}

export class UpdateUserPasswordDto{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly newPassword: string;
}