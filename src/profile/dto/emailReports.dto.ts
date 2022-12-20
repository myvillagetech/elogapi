import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";


export class ProfileEmailReportsDto {

    @ApiProperty({
        type: Boolean
    })
    weeklyUsage: Boolean

    @ApiProperty({
        type: Boolean
    })
    activityStatus: Boolean;

    @ApiProperty({
        type: Boolean
    })
    activitydue: Boolean;

    @ApiProperty({
        type: Boolean
    })
    sendMeEmail: Boolean;

    @ApiProperty({
        type: String,
    })
    @Optional()
    _id: string;
}