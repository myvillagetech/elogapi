import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class OrganizationTypeSchemaCreator {
    @Prop()
    name : string
}

export type OrganizationTypeDocument = OrganizationTypeSchemaCreator & Document;
export const OrganizationTypesSchema = SchemaFactory.createForClass(OrganizationTypeSchemaCreator);
