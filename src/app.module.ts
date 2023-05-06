import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DB } from './config';

@Module({
  imports: [
    AuthModule,
    UserModule,
    MongooseModule.forRoot(
      `mongodb+srv://${DB.USERNAME}:${DB.PASSWORD}@cluster0.ybyyajc.mongodb.net/?retryWrites=true&w=majority`,
    ),
  ],
})
export class AppModule {}
