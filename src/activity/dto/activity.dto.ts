import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
} from 'class-validator';
import { Priority, Status } from '../enums/activity.enums';


export class AttachmentsDto {
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly name: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly size: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly path: string;
}

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
        type: [AttachmentsDto]
    })
    readonly attachments: AttachmentsDto[];

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        enum : Priority
    })
    readonly priority: Priority;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        enum : Status
    })
    readonly status: Status;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly createdBy: string;

    @ApiProperty({
        type:Boolean
    })
    readonly isArchive : boolean

    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    readonly createdByOrganization : string


}






