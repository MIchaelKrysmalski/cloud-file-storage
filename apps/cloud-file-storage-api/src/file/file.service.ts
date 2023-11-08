import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FileDocument } from './models/file.model';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Directory, DirectoryDocument } from 'src/dir/models/directory.model';
import { dir } from 'console';


@Injectable()
export class FileService {
    constructor(
        @InjectModel(File.name)
        private fileModel: Model<FileDocument>,

        @InjectModel(Directory.name)
        private directoryModel: Model<DirectoryDocument>
    ) {}

    async getFileById(id: string): Promise<File> {
        return this.fileModel.findById(id);
    }

    async createFile(userId: string, fileName: string, directoryId: string) {
        const directory = await this.directoryModel.findById(directoryId);

        if(directory) {
            const file = await this.fileModel.create({
                name: fileName,
                fileId: uuidv4(),
                createdAt: new Date(),
                updatedAt: new Date(),
                direcory: directory
            });
        } else {
            throw(NotFoundException);
        }
    }
}
