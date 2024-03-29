import { ApiProperty } from '@nestjs/swagger';
import { CriteriaWithPaginationAndSorting } from 'src/shared/DTOs/criteiaWithPaginationAndSorting';

export class AttachmentsSearchCriteria extends CriteriaWithPaginationAndSorting {
    @ApiProperty({
        type: String,
    })
    readonly fileNameSearchText: string;

    @ApiProperty({
        type: Boolean,
    })
    readonly isArchived: boolean;

    @ApiProperty({
        type: Array<string>,
    })
    organizations: string[];
}
