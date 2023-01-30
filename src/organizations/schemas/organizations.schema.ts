import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as uniqueValidators from 'mongoose-unique-validator';

@Schema({
    timestamps: true,
})
export class OrganizationSchemaCreator {
    @Prop({ required: true })
    type: string;

    @Prop({ required: true, unique: true })
    organization: string;

    @Prop({ required: true })
    shortName: string;

    @Prop({ required: true })
    isActive: boolean;

    @Prop()
    orgActivityAutoIncrementId: number;
}

export type OrganizationDocument = OrganizationSchemaCreator & Document;
export const OrganizationSchema = SchemaFactory.createForClass(
    OrganizationSchemaCreator,
).plugin(uniqueValidators);
