import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Directory, DirectoryDocument } from './models/directory.model';
import { FileDocument } from 'src/file/models/file.model';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DirService {
    constructor(
        @InjectModel(Directory.name)
        private fileModel: Model<DirectoryDocument>,

        @InjectModel(File.name)
        private directoryModel: Model<FileDocument>
    ) {}

    async getDirectoryById(id: string): Promise<File> {
        return this.directoryModel.findById(id);
    }

    async createDirectory(userId: string, directoryName: string) {
            const file = await this.directoryModel.create({
                name: directoryName,
                directoryId: uuidv4(), 
                createdAt: new Date(),
                updatedAt: new Date()
            });

            //update parent dir
    }
}
