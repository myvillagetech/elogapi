import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class OrganizationSchemaCreator {
    @Prop()
    type  : string

    @Prop()
    organization : string

    @Prop()
    shortName : string

    @Prop()
    isActive : boolean
}

export type OrganizationDocument = OrganizationSchemaCreator & Document;
export const OrganizationSchema = SchemaFactory.createForClass(OrganizationSchemaCreator);