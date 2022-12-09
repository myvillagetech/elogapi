import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class ResetPasswordDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly email: string;

    readonly userId?: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    oldPassword: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    newPassword: string;
}
