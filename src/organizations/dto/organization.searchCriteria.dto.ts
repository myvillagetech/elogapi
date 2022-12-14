import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsNotEmpty,
    IsString,
} from 'class-validator';
import { CriteriaWithPaginationAndSorting } from 'src/shared/DTOs/criteiaWithPaginationAndSorting';

export class OrganizationSearchCriteriaDto extends CriteriaWithPaginationAndSorting{
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

    @ApiProperty({
        type: Boolean
    })
    readonly isActive: Boolean;


}