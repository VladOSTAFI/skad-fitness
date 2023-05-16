import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DB_URL } from './config';

@Module({
  imports: [AuthModule, UserModule, MongooseModule.forRoot(DB_URL)],
})
export class AppModule {}
