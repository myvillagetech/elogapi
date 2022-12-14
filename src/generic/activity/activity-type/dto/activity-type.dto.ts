import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class ActivityTypeDto {
    @IsString()
    @ApiProperty({
        type : String
    })
    name : string
}