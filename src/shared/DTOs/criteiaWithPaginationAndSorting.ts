
import { ApiProperty } from "@nestjs/swagger"

export class CriteriaWithPaginationAndSorting {
    @ApiProperty({
        type: Number
    })
    pageNumber: number;

    @ApiProperty({
        type: Number
    })
    pageSize: number;

    @ApiProperty({
        type: String
    })
    sortField: string;

    @ApiProperty({
        type: Number
    })
    sortOrder: number;
}