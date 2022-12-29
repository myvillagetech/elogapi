import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";
import { OrganizationSchema, OrganizationSchemaCreator } from "src/organizations/schemas/organizations.schema";


@Schema(  {
    timestamps : true
})
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

    @Prop(
        {
            default  : true
        }
    )
    isActive : boolean

    @Prop({
        type: mongoose.Types.Map
    })
    userAttributes : Object;

    @Prop()
    roles : string[]
}

export type UserDocument = UserSchemaCreator & Document;
export const UserSchema = SchemaFactory.createForClass(UserSchemaCreator); 