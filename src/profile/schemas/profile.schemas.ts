import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'
import { ProfileEmailReportsDto } from "../dto/emailReports.dto";


@Schema({})
export class ProfileNotifications {
    @Prop({
        required: true,
    })
    allNewActivity: Boolean;

    @Prop({
        required: true,
    })
    allActivityRepaly: Boolean;

    @Prop({
        required: true,
    })
    allActivityStatusChange: Boolean;
}

export const ProfileNotificationsSchema = SchemaFactory.createForClass(
    ProfileNotifications
).plugin(uniqueValidators)


@Schema({})
export class ProfileEmailReports {
    @Prop({
        required: true,
    })
    weeklyUsage: Boolean;

    @Prop({
        required: true,
    })
    activityStatus: String;

    @Prop({
        required: true,
    })
    activitydue: Boolean;

    @Prop({
        required: true,
    })
    sendMeEmail: Boolean;
}

export const ProfileEmailReportsSchema = SchemaFactory.createForClass(
    ProfileEmailReports
).plugin(uniqueValidators)



@Schema()
export class ProfileSchemaCreator {

    @Prop({type : String})
    shortName : string

    @Prop({type : String})
    timeZone : string

    @Prop({type : String})
    profileImage : string

    @Prop({type : String})
    userId : string;

    @Prop({
        type: ProfileEmailReports
    })
    emailReports: ProfileEmailReportsDto;

    @Prop({
        type: ProfileNotifications
    })
    notifications : ProfileNotifications;
}

export type ProfileDocument = ProfileSchemaCreator & Document
export const ProfileSchema = SchemaFactory.createForClass(ProfileSchemaCreator)
