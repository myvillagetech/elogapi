import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";



@Schema()
export class UserSchemaCreator {
    @Prop()
    email: string

    @Prop()
    Name: string

    @Prop()
    password: string

    @Prop()
    organization : string[]

    @Prop()
    department : string

    @Prop({
        type: mongoose.Types.Map
    })
    userAttributes : Object;
}

export type UserDocument = UserSchemaCreator & Document;
export const UserSchema = SchemaFactory.createForClass(UserSchemaCreator); 