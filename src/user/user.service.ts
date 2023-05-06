import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto';
import { UserData } from './types';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUserData(): Promise<UserData> {
    // todo: get user data from db
    return {
      username: 'johny',
    };
  }

  async createUser({ username, password }: CreateUserDto): Promise<string> {
    // todo: hash user password
    const user = await this.userModel.create({ username, password });

    return user._id.toString();
  }
}
