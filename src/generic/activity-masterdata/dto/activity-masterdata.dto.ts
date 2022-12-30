import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class ActivityMasterDataDto {
    @IsString()
    @ApiProperty({
        type : String
    })
    name : string
}