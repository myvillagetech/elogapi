import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class LoginDto{
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
    password: string;

}