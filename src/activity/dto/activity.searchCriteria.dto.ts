import { ApiProperty } from '@nestjs/swagger';
import { CriteriaWithPaginationAndSorting } from 'src/shared/DTOs/criteiaWithPaginationAndSorting';

export class DateFilter {
    @ApiProperty({
        type: String,
    })
    readonly fromDate: string;

    @ApiProperty({
        type: String,
    })
    readonly toDate: string;
}

export class DateWithCustomName extends DateFilter {
    @ApiProperty({
        type: String,
    })
    readonly customString: string;

    @ApiProperty({
        type: String,
    })
    readonly unit: string;

    @ApiProperty({
        type: Number,
    })
    readonly quantity: number;
}

export class ActivitySearchCriteriaDto extends CriteriaWithPaginationAndSorting {
    @ApiProperty({
        type: String,
    })
    readonly organization: string;

    @ApiProperty({
        type: String,
    })
    readonly userId: string;

    @ApiProperty({
        type: Array<string>,
    })
    readonly status: string[];

    @ApiProperty({
        type: DateWithCustomName,
    })
    readonly createdDate: DateWithCustomName;

    @ApiProperty({
        type: DateWithCustomName,
    })
    readonly dueDate: DateWithCustomName;

    @ApiProperty({
        type: Array<string>,
    })
    readonly types: string[];

    @ApiProperty({
        type: Array<string>,
    })
    readonly entryTypes: string[];

    @ApiProperty({
        type: Array<string>,
    })
    readonly geography: string[];

    @ApiProperty({
        type: Array<string>,
    })
    readonly scope: string[];

    @ApiProperty({
        type: Array<string>,
    })
    readonly priority: string[];

    @ApiProperty({
        type: Array<string>,
    })
    readonly createdBy: string[];

    @ApiProperty({
        type: Array<string>,
    })
    readonly assignTo: string[];

    @ApiProperty({
        type: Boolean,
    })
    readonly isArchive: boolean;

    @ApiProperty({
        type: Boolean,
    })
    readonly onlyMyTasks: boolean;

    @ApiProperty({
        type: Array<string>,
    })
    readonly organizations: string[];
}
