import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as uniqueValidators from 'mongoose-unique-validator';


@Schema(
    {
        timestamps: true
    }
)
export class CompanySettingsSchemaCreator {
    @Prop({ required: true, unique: true })
    name: string

    @Prop({ required: true })
    isActive: boolean
}

export type CompanySettingsDocument = CompanySettingsSchemaCreator & Document;
export const CompanySettingsSchema = SchemaFactory.createForClass(CompanySettingsSchemaCreator).plugin(uniqueValidators);