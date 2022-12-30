import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps : true
})
export class ActivityRelatedTypesSchemaCreator {
    @Prop()
    name : string
}

export type ActivityRelatedTypesDocument = ActivityRelatedTypesSchemaCreator & Document
export const ActivityRelatedTypesSchema = SchemaFactory.createForClass(ActivityRelatedTypesSchemaCreator);


@Schema({timestamps : true})
export class ActivityTypesSchemaCreator {
    @Prop()
    name : string
}

export type ActivityTypesDocument = ActivityTypesSchemaCreator & Document
export const ActivityTypesSchema = SchemaFactory.createForClass(ActivityTypesSchemaCreator);

@Schema({timestamps : true})
export class ActivityEntryTypesSchemaCreator {
    @Prop()
    name : string
}

export type ActivityEntryTypesDocument = ActivityEntryTypesSchemaCreator & Document
export const ActivityEntryTypesSchema = SchemaFactory.createForClass(ActivityEntryTypesSchemaCreator);

@Schema({timestamps : true})
export class ActivitySectorsSchemaCreator {
    @Prop()
    name : string
}

export type ActivitySectorsDocument = ActivitySectorsSchemaCreator & Document
export const ActivitySectorsSchema = SchemaFactory.createForClass(ActivitySectorsSchemaCreator);

@Schema({timestamps : true})
export class ActivityScopesSchemaCreator {
    @Prop()
    name : string
}

export type ActivityScopesDocument = ActivityScopesSchemaCreator & Document
export const ActivityScopesSchema = SchemaFactory.createForClass(ActivityScopesSchemaCreator);
