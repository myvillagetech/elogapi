import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class OrganizationDto{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly type: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly shortName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly organization: string;

}