import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    MaxLength,
} from 'class-validator';

export class ActivityDto{
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly activityType: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly activityRelatedTo: string;

    @IsNotEmpty()
    @ApiProperty({
        type: Array<String>
    })
    readonly organization: string[];

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly activitEntryType: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly activitySector: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly activityScope: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly title: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly description: string;

    @ApiProperty({
        type: Array<String>
    })
    readonly attachments: string[];

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly priority: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly status: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly createdBy: string;

}


export class ReplaysDto {
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly replayMessage: string;

    @IsNotEmpty()
    @ApiProperty({
        type: Array<String>
    })
    readonly replayAttachments: string[];
}



