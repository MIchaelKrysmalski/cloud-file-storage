import { Module } from '@nestjs/common';
import { DirController } from './dir.controller';
import { DirService } from './dir.service';

@Module({
  controllers: [DirController],
  providers: [DirService]
})
export class DirModule {}
