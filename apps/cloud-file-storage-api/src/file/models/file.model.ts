import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Directory } from "src/dir/models/directory.model";

@Schema()
export class File {
    _id: string;

    @Prop()
    name: string;

    @Prop()
    fileId: string;

    @Prop()
    createdAt?: Date;

    @Prop()
    updatedAt?: Date;

    @Prop({ type: [Directory], required: false })
    directory?: Directory;
}

export type FileDocument = File & mongoose.Document