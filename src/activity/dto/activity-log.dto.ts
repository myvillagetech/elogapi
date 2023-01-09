import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Priority, Status } from "../enums/activity.enums";
import { AttachmentsDto } from "./activity.dto";

export class ActivityLogDto{
    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    message : string;

    @ApiProperty({
        type: String,
        enum : Status
    })
    status : Status;

    @ApiProperty({
        type : String
    })
    assignTo : string

    @ApiProperty({
        type: String,
        enum : Priority
    })
    priority : Priority

    @ApiProperty({
        type : String
    })
    visibility : string

    @ApiProperty({
        type : [AttachmentsDto]
    })
    attachments : AttachmentsDto[]
}