import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";
import { OrganizationSchema, OrganizationSchemaCreator } from "src/organizations/schemas/organizations.schema";


@Schema()
export class UserSchemaCreator {
    @Prop()
    email: string

    @Prop()
    Name: string

    @Prop()
    password: string

    @Prop({ _id:false, type: [OrganizationSchema] })
    organization :Types.Array<OrganizationSchemaCreator>

    @Prop()
    department : string

    @Prop({
        type: mongoose.Types.Map
    })
    userAttributes : Object;
}

export type UserDocument = UserSchemaCreator & Document;
export const UserSchema = SchemaFactory.createForClass(UserSchemaCreator); 