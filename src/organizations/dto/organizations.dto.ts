import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
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

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly shortName: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly organization: string;

    @IsBoolean()
    @ApiProperty({
        type: Boolean
    })
    readonly isActive: boolean;


}