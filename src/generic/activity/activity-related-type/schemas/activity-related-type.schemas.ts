import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps : true
})
export class ActivityRelatedTypeSchemaCreator {
    @Prop()
    name : string
}

export type ActivityRelatedTypeDocument = ActivityRelatedTypeSchemaCreator & Document;
export const ActivityRelatedTypesSchema = SchemaFactory.createForClass(ActivityRelatedTypeSchemaCreator);
