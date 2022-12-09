import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class OrganizationSearchCriteriaDto{
    @IsString()
    @ApiProperty({
        type: String
    })
    readonly type: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    readonly organization: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    readonly isActive: string;


}