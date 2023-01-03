import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    MaxLength,
} from 'class-validator';

export class UserDto{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly Name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    password: string;

    @IsNotEmpty()
    @ApiProperty({
        type: Array<String>
    })
    readonly organization: string[];

    @IsNotEmpty()
    @ApiProperty({
        type : Array<String>
    })
    readonly roles: string[];

    @ApiProperty({
        type: String
    })
    readonly department: string;

    @ApiProperty({
        type: Object
    })
    readonly userAttributes : Object

    @ApiProperty({
        type: Boolean
    })
    readonly isActive : Boolean

}

export class UpdateUserPasswordDto{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly newPassword: string;
}

export class UserUpdateDto{
    @ApiProperty({
        type: String
    })
    readonly Name ?: string;

    @ApiProperty({
        type: Object
    })
    readonly userAttributes? : Object

    @ApiProperty({
        type: Array<String>
    })
    readonly organization?: string[];

    @ApiProperty({
        type: Boolean
    })
    readonly isActive? : Boolean

    @ApiProperty({
        type: String
    })
    readonly department ?: string;

    @ApiProperty({
        type : String
    })
    readonly email ? : string

    @ApiProperty({
        type: String
    })
    password?: string;


}


export class removeUsersfromOrganizationDto{
    @ApiProperty({
        type : Array<string>
    })
    readonly userIds : string[];
    @ApiProperty({
        type: String
    })
    readonly organizationId : string;
}

export class removeOrganizationsfromUserDto{
    @ApiProperty({
        type: String
    })
    readonly userId : string;
    @ApiProperty({
        type : Array<string>
    })
    readonly organizationIds : string[];
}

export class addUsersToOrganizationDto{
    @ApiProperty({
        type : Array<string>
    })
    readonly userIds : string[];
    @ApiProperty({
        type: String
    })
    readonly organizationId : string;
}
export class addOrganizationsToUserDto{
    @ApiProperty({
        type : String
    })
    readonly userId : string;
    @ApiProperty({
        type: Array<string>
    })
    readonly organizationIds : string[];
}

