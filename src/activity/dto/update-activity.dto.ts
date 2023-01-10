import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Status } from "../enums/activity.enums";
import { AttachmentsDto } from "./activity.dto";

export class UpdateActivityDto{
    @ApiProperty({
        type: String
    })
    readonly activityType: string;

    @ApiProperty({
        type: String
    })
    readonly activityRelatedTo: string;

    @ApiProperty({
        type: Array<String>
    })
    readonly organization: string[];


    @ApiProperty({
        type: String
    })
    readonly activitEntryType: string;

    @ApiProperty({
        type: String
    })
    readonly activitySector: string;


    @ApiProperty({
        type: String
    })
    readonly activityScope: string;

    @ApiProperty({
        type: String
    })
    readonly title: string;

    @ApiProperty({
        type: String
    })
    readonly description: string;

    @ApiProperty({
        type: [AttachmentsDto]
    })
    readonly attachments: AttachmentsDto[];

    @ApiProperty({
        type: String
    })
    readonly priority: string;

    @ApiProperty({
        type: String
    })
    readonly status: string;

}

export class ArchiveActivityDto{
    @IsNotEmpty()
    @ApiProperty({
        type:Boolean
    })
    isArchive : boolean
}

export class UpdateActivityStatusDto{
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        enum : Status
    })
    status : Status
}