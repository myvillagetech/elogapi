import { ApiProperty } from '@nestjs/swagger';
import {
    IsString,
} from 'class-validator';
import { CriteriaWithPaginationAndSorting } from 'src/shared/DTOs/criteiaWithPaginationAndSorting';

export class UserSearchCriteriaDto extends CriteriaWithPaginationAndSorting{
    @IsString()
    @ApiProperty({
        type: String
    })
    readonly type: string;

    @ApiProperty({
        type: Boolean
    })
    readonly isActive: Boolean;

    @ApiProperty({
        type : String
    })
    readonly role : String

    @IsString()
    @ApiProperty({
        type: String
    })
    readonly userId: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    readonly user: string;

    @ApiProperty({
        type : String
    })
    readonly organizationSerach? : string;
}