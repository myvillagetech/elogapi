import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class ActivityTypeSchemaCreator {
    @Prop()
    name : string
}

export type ActivityTypeDocument = ActivityTypeSchemaCreator & Document;
export const ActivityTypesSchema = SchemaFactory.createForClass(ActivityTypeSchemaCreator);
