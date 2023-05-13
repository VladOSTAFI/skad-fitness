import { Module } from '@nestjs/common';

import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema }],
      'auth'),
      JwtModule.register({
        global: true,
        signOptions: { expiresIn: '60s' }
    })],
      
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
