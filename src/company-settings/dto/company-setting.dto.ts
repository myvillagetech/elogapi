import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class CompanySettingsDto {

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly name: string;

    @IsBoolean()
    @ApiProperty({
        type: Boolean
    })
    readonly isActive: boolean;
}

export class UpdateCompanySettingsDto {

    @ApiProperty({
        type: String
    })
    readonly name: string;

    @IsBoolean()
    @ApiProperty({
        type: Boolean
    })
    readonly isActive: boolean;
}