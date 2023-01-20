import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { OrganizationSchemaCreator } from 'src/organizations/schemas/organizations.schema';
import { UserSchemaCreator } from './user.schemas';

@Schema({
    timestamps: true,
})
export class UserActivityLogSchemaCreator {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    })
    user: UserSchemaCreator;

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'organization' }],
    })
    organization: OrganizationSchemaCreator[];
}

export type UserActivityLogDocument = UserActivityLogSchemaCreator & Document;
export const UserActivityLogSchema = SchemaFactory.createForClass(
    UserActivityLogSchemaCreator,
);
