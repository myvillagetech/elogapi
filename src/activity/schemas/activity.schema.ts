import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { ObjectId } from "mongoose";
import { OrganizationSchemaCreator } from "src/organizations/schemas/organizations.schema";
import { UserSchemaCreator } from "src/users/schemas/user.schemas";
import { ReplaysDto } from "../dto/activity.dto";

@Schema({
    timestamps : true
})
export class Replays {
    @Prop({
        required: true,
    })
    replayMessage: string;
    @Prop({})
    replayAttachments : string[]
}

export const ReplaySchema = SchemaFactory.createForClass(
    Replays
)


@Schema({
    timestamps : true
})
export class ActivitySchemaCreator {

    @Prop({
        required :true,
    })
    activityType : String

    @Prop({
        required :true,
    })
    activityRelatedTo : String

    @Prop({
        required :true,
        type : [{type : mongoose.Schema.Types.ObjectId, ref : 'organization'}]
    })
    organization : OrganizationSchemaCreator[]

    @Prop({
        required :true,
    })
    activitEntryType : String

    @Prop({
        required :true,
    })
    activitySector : String

    @Prop({
        required :true,
    })
    activityScope : String

    @Prop({
        required :true,
    })
    title : string

    @Prop({
        required :true,
    })
    description : string

    @Prop({})
    attachments : string[]

    @Prop({
        required : true
    })
    priority : string

    @Prop({
        required : true,
    })
    status : string

    @Prop({
        type : [ReplaySchema]
    })
    replays : ReplaysDto

    @Prop({
        required :true,
        type : [{type : mongoose.Schema.Types.ObjectId, ref : 'user'}]
    })
    createdBy : UserSchemaCreator

}

export type ActivityDocument = ActivitySchemaCreator & Document
export const ActivitySchema = SchemaFactory.createForClass(ActivitySchemaCreator)