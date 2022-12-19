import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class ProfileSchemaCreator {

    @Prop({type : String})
    shortName : string

    @Prop({type : String})
    timeZone : string

    @Prop({type : String})
    profileImage : string

    @Prop({type : String})
    userId : string
}

export type ProfileDocument = ProfileSchemaCreator & Document
export const ProfileSchema = SchemaFactory.createForClass(ProfileSchemaCreator)
