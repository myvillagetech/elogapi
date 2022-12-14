import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class OrganizationTypeDto {
    @IsString()
    @ApiProperty({
        type : String
    })
    name : string
}