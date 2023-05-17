import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto';
import { UserData } from './types';
import { User } from './schemas/user.schema';
import { createHash } from 'crypto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUserData(userId: string): Promise<UserData> {
    const user = await this.userModel.findById(userId);
    
    if(!user) {
      throw new HttpException('User entity is not found', HttpStatus.BAD_REQUEST);
    }
    return {
      username: user.username,
    };
  }

  async createUser({ username, password }: CreateUserDto): Promise<string> {
    const hashPassword = createHash('sha256').update(password).digest('hex');

    const user = await this.userModel.create({
      username,
      password: hashPassword,
    });

    return user.toString();
  }
}
