import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, modelNames } from 'mongoose';
import {
    ActivityEntryTypesSchemaCreator,
    ActivityRelatedTypesSchemaCreator,
    ActivityScopesSchemaCreator,
    ActivitySectorsSchemaCreator,
    ActivityTypesSchemaCreator,
} from 'src/generic/activity-masterdata/schemas/activity-masterdata.schema';
import { OrganizationSchemaCreator } from 'src/organizations/schemas/organizations.schema';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { UserSchemaCreator } from 'src/users/schemas/user.schemas';
import { Priority, Status } from '../enums/activity.enums';

@Schema({
    timestamps: true,
})
export class Attachment {
    @Prop({})
    name: string;
    @Prop({})
    size: string;
    @Prop({})
    path: string;
}

export const AttachmentSchema = SchemaFactory.createForClass(Attachment);

@Schema({
    timestamps: true,
})
export class ActivityLog {
    @Prop({
        required: true,
    })
    message: string;

    @Prop({
        required: false,
    })
    status: string;

    @Prop({
        required: false,
        type: { type: mongoose.Schema.Types.ObjectId, ref: 'organization' },
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

    @Prop({ type: [AttachmentSchema] })
    attachments: Attachment[];

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    })
    userId: UserSchemaCreator;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'organization',
    })
    organizationId: OrganizationSchemaCreator;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
    createdBy: UserSchemaCreator;

    @Prop()
    createdByUserName: string;
}

export const ActivityLogSchema = SchemaFactory.createForClass(ActivityLog);

@Schema({
    timestamps: true,
})
export class DueDateLog {
    @Prop({
        type: Date,
    })
    dueDate: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
    createdBy: UserSchemaCreator;

    @Prop()
    createdByUserName: string;
}

export const DueDateLogSchema = SchemaFactory.createForClass(DueDateLog);

@Schema({
    timestamps: true,
})
export class StatusLog {
    @Prop({
        type: String,
    })
    status: Status;
}

export const StatusLogSchema = SchemaFactory.createForClass(StatusLog);

@Schema({
    timestamps: true,
})
export class ActivitySchemaCreator {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'activityTypes',
    })
    activityType: ActivityTypesSchemaCreator;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'activityRelatedType',
    })
    activityRelatedTo: ActivityRelatedTypesSchemaCreator;

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'organization' }],
    })
    organization: OrganizationSchemaCreator[];

    @Prop({
        required: false,
    })
    visibility: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: MODEL_ENUMS.ACTIVITY_ENTRY_TYPE,
    })
    activitEntryType: ActivityEntryTypesSchemaCreator;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: MODEL_ENUMS.ACTIVITY_SECTORS,
    })
    activitySector: ActivitySectorsSchemaCreator;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: MODEL_ENUMS.ACTIVITY_SCOPES,
    })
    activityScope: ActivityScopesSchemaCreator;

    @Prop({
        required: true,
    })
    title: string;

    @Prop({
        required: true,
        unique: true,
    })
    uniqIdentity: string;

    @Prop({
        required: true,
    })
    description: string;

    @Prop({ type: [AttachmentSchema] })
    attachments: Attachment[];

    @Prop({
        required: true,
        default: 'NONE',
    })
    priority: Priority;

    @Prop({
        required: true,
    })
    status: Status;

    @Prop({
        type: [ActivityLogSchema],
    })
    activityLog: ActivityLog[];

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    })
    createdBy: UserSchemaCreator;

    @Prop({
        type: Date,
    })
    dueDate: Date;

    @Prop({
        type: [DueDateLogSchema],
    })
    dueDateLog: DueDateLog[];

    @Prop({
        type: [StatusLogSchema],
    })
    statusLog: StatusLog[];

    @Prop({
        type: Boolean,
        default: false,
    })
    isArchive: boolean;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'organization',
    })
    createdByOrganization: OrganizationSchemaCreator;

    @Prop({
        type: Number,
    })
    activityNumber: number;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'organization',
    })
    assignTo: OrganizationSchemaCreator;
}

export type ActivityDocument = ActivitySchemaCreator & Document;
export const ActivitySchema = SchemaFactory.createForClass(
    ActivitySchemaCreator,
);
