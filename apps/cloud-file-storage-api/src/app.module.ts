import { Module } from '@nestjs/common';
import { FileModule } from './file/file.module';
import { DirModule } from './dir/dir.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    FileModule, 
    DirModule, 
    AuthModule,
    UserModule,
    MongooseModule.forRoot(process.env.MONGODB_URI),
  ],
})
export class AppModule {}
