import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";
import { OrganizationSchema, OrganizationSchemaCreator } from "src/organizations/schemas/organizations.schema";


@Schema()
export class UserSchemaCreator  {
    @Prop()
    email: string

    @Prop()
    Name: string

    @Prop()
    password: string

    @Prop({
        type : [{type : mongoose.Schema.Types.ObjectId, ref : 'organization'}]
    })
    organization : OrganizationSchemaCreator[]

    @Prop()
    department : string

    @Prop({
        type: mongoose.Types.Map
    })
    userAttributes : Object;

    @Prop()
    roles : string[]
}

export type UserDocument = UserSchemaCreator & Document;
export const UserSchema = SchemaFactory.createForClass(UserSchemaCreator); 