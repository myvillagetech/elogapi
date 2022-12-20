import { ApiProperty } from "@nestjs/swagger";


export class ProfileEmailReportsDto {
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
}