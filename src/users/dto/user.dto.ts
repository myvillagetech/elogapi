import {
    IsNotEmpty,
    IsString,
    MaxLength,
} from 'class-validator';

export class UserDto{
    @IsString()
    @IsNotEmpty()
    readonly Name: string;

    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @IsString()
    @IsNotEmpty()
    readonly organization: string;

    readonly department: string;

    readonly userAttributes : Object

}