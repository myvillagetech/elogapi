import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class ActivityMasterDataDto {
    @IsString()
    @ApiProperty({
        type : String
    })
    name : string
}

export class CreateActivityTypeDto {
    @IsString()
    @ApiProperty({
        type : String
    })
    name : string
    
    @IsString()
    @ApiProperty({
        type : String
    })
    shortName : string
}