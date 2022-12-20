import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";


export class ProfileNotificationDto {
    @ApiProperty({
        type: Boolean
    })
    allNewActivity: Boolean;

    @ApiProperty({
        type: Boolean
    })
    allActivityRepaly: Boolean;

    @ApiProperty({
        type: Boolean
    })
    allActivityStatusChange: Boolean;

    @ApiProperty({
        type: String,
    })
    @Optional()
    _id: string;
}