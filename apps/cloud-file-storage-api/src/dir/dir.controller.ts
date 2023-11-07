import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('dir')
export class DirController {

    //useId
    @Get()
    directoriesByUser(
        @Param("id")
        userId: string
    ) {

    }

    @Post()
    createDirectory()

    @Delete()
    directoryById(
        @Param("id")
        directoryId: string
    ) {

    }
}
