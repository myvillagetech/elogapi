import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as uniqueValidators from 'mongoose-unique-validator';


@Schema()
export class OrganizationSchemaCreator {
    @Prop({ required: true})
    type  : string

    @Prop({ required: true, unique: true })
    organization : string

    @Prop({ required: true})
    shortName : string

    @Prop({ required: true})
    isActive : boolean
}

export type OrganizationDocument = OrganizationSchemaCreator & Document;
export const OrganizationSchema = SchemaFactory.createForClass(OrganizationSchemaCreator).plugin(uniqueValidators);