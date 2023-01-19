import { ApiProperty } from '@nestjs/swagger';
import { DateFilter } from './activity.searchCriteria.dto';

export class ActivityMetricsRequest {
    @ApiProperty({
        type: DateFilter,
    })
    readonly dateRange: DateFilter;

    @ApiProperty({
        type: String,
    })
    readonly type: string;
}
