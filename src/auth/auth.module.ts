import { Module } from '@nestjs/common';

import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { TOKEN_EXPIRATION_TIME } from 'src/config';
import { jwtCONSTANTS } from 'src/const';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      global: true,
      secret: jwtCONSTANTS.secret,
      signOptions: { expiresIn: TOKEN_EXPIRATION_TIME }
    }),
  ],     

  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
