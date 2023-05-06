import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ActivityAttchementArchiveDto {
    @IsNotEmpty()
    @ApiProperty({
        type: String,
    })
    activityId: string;

    @ApiProperty({
        type: String,
    })
    activityLogId: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
    })
    attchmentId: string;
}
