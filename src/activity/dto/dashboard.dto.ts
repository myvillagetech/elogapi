import { ApiProperty } from '@nestjs/swagger';
import { DateFilter } from './activity.searchCriteria.dto';
export class DashboardBaseModel {
    @ApiProperty({
        type: Array<string>,
    })
    readonly organizations: string[];
}

export class ActivityMetricsRequest extends DashboardBaseModel {
    @ApiProperty({
        type: DateFilter,
    })
    readonly dateRange: DateFilter;

    @ApiProperty({
        type: String,
    })
    readonly type: string;
}
