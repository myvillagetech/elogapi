import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Date, modelNames } from "mongoose";
import { ActivityEntryTypesSchemaCreator, ActivityRelatedTypesSchemaCreator, ActivityScopesSchemaCreator, ActivitySectorsSchemaCreator, ActivityTypesSchemaCreator } from "src/generic/activity-masterdata/schemas/activity-masterdata.schema";
import { OrganizationSchemaCreator } from "src/organizations/schemas/organizations.schema";
import { MODEL_ENUMS } from "src/shared/enums/model.enums";
import { UserSchemaCreator } from "src/users/schemas/user.schemas";
import { Priority, Status } from "../enums/activity.enums";

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
        required: false,
    })
    status: string;

    @Prop({
        required : false,
        type : {type : mongoose.Schema.Types.ObjectId, ref : 'organization'}
    })
    assignTo: OrganizationSchemaCreator;

    @Prop({
        required: false,
    })
    priority: string;

    @Prop({
        required: false,
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
    status : Status
}



@Schema({
    timestamps : true
})
export class ActivitySchemaCreator {

    @Prop({
        type : mongoose.Schema.Types.ObjectId, ref : 'activityTypes',
    })
    activityType : ActivityTypesSchemaCreator

    @Prop({
        type : mongoose.Schema.Types.ObjectId, ref : 'activityRelatedType',
    })
    activityRelatedTo : ActivityRelatedTypesSchemaCreator

    @Prop({
        type : [{type : mongoose.Schema.Types.ObjectId, ref : 'organization'}]
    })
    organization : OrganizationSchemaCreator[]

    @Prop({
        type : mongoose.Schema.Types.ObjectId, ref : MODEL_ENUMS.ACTIVITY_ENTRY_TYPE,
    })
    activitEntryType : ActivityEntryTypesSchemaCreator

    @Prop({
        type : mongoose.Schema.Types.ObjectId, ref : MODEL_ENUMS.ACTIVITY_SECTORS,
    })
    activitySector : ActivitySectorsSchemaCreator

    @Prop({
        type : mongoose.Schema.Types.ObjectId, ref : MODEL_ENUMS.ACTIVITY_SCOPES,
    })
    activityScope : ActivityScopesSchemaCreator

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
        required : true,
        default : 'NONE'
    })
    priority : Priority

    @Prop({
        required : true,
    })
    status : Status

    @Prop({})
    activityLog : ActivityLog[]

    @Prop({
        type : mongoose.Schema.Types.ObjectId, ref : 'user'
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

    @Prop({})
    isArchive : Boolean

    @Prop({
        type : mongoose.Schema.Types.ObjectId , ref : 'organization'
    })
    createdByOrganization : OrganizationSchemaCreator

    @Prop({
        type : Number
    })
    activityNumber : number

}

export type ActivityDocument = ActivitySchemaCreator & Document
export const ActivitySchema = SchemaFactory.createForClass(ActivitySchemaCreator)