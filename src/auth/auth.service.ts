import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { GetTokenDto } from './dto';
import { TokensResponse } from './types';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';
import { createHash, randomBytes } from 'crypto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}
  async getToken({ username, password }: GetTokenDto): Promise<TokensResponse> {
    const hashedPassword = createHash('sha256').update(password).digest('hex');
    const user = await this.userModel.findOne({
      username,
      password: hashedPassword,
    });

    if (!user) {
      throw new HttpException(
        'Invalid username or password',
        HttpStatus.BAD_REQUEST,
      );
    }

    const payload = { username: user.username, userId: user._id };
    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = randomBytes(32).toString('hex');

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }
}
