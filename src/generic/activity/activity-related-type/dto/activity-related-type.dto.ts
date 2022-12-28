import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class ActivityRelatedTypeDto {
    @IsString()
    @ApiProperty({
        type : String
    })
    name : string
}