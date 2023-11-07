import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Directory {
    _id: string;

    @Prop()
    name: string;

    @Prop()
    directoryId: string;

    @Prop()
    createdAt?: Date;

    @Prop()
    updatedAt?: Date;

    @Prop({ type: [Directory], required: false })
    subDirectories?: Directory[];

    @Prop({ type: [], required: false })
    files;
}

export const DirectorySchema = SchemaFactory.createForClass(Directory);