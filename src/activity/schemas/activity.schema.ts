import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Date } from "mongoose";
import { OrganizationSchemaCreator } from "src/organizations/schemas/organizations.schema";
import { UserSchemaCreator } from "src/users/schemas/user.schemas";


@Schema({
    timestamps : true
})
export class Attachments { 
    @Prop({
        required: true,
    })
    name: string;
    @Prop({
        required: true,
    })
    size: string;
    @Prop({
        required: true,
    })
    path: string;
}

export const AttachmentsSchema = SchemaFactory.createForClass(
    Attachments
)

@Schema({
    timestamps : true
})
export class ActivityLog{
    @Prop({
        required: true,
    })
    message: string;

    @Prop({
        required: true,
    })
    status: string;

    @Prop({
        type : {type : mongoose.Schema.Types.ObjectId, ref : 'organization'}
    })
    assignTo: OrganizationSchemaCreator;

    @Prop({
        required: true,
    })
    priority: string;

    @Prop({
        required: true,
    })
    visibility: string;

    @Prop({})
    attachments : Attachments[]
}

export const ActivityLogSchema = SchemaFactory.createForClass(
    ActivityLog
)

@Schema({
    timestamps : true
})
export class DueDateLog{
    @Prop({
        type : Date
    })
    dueDate : Date
}

@Schema({
    timestamps : true
})
export class StatusLog{
    @Prop({
        type : String
    })
    dueDate : string
}



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
    attachments : Attachments[]

    @Prop({
        required : true
    })
    priority : string

    @Prop({
        required : true,
    })
    status : string

    @Prop({})
    activityLog : ActivityLog[]

    @Prop({
        type : {type : mongoose.Schema.Types.ObjectId, ref : 'user'}
    })
    createdBy : UserSchemaCreator

    @Prop({
        type : Date
    })
    dueDate : Date

    @Prop()
    dueDateLog : DueDateLog[]

    @Prop()
    statusLog : StatusLog[]

}

export type ActivityDocument = ActivitySchemaCreator & Document
export const ActivitySchema = SchemaFactory.createForClass(ActivitySchemaCreator)