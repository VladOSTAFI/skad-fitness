import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto';
import { UserData } from './types';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUserData(): Promise<UserData> {
    return this.userService.getUserData();
  }

  @Post()
  createUser(@Body() createUserArgs: CreateUserDto): Promise<string> {
    return this.userService.createUser(createUserArgs);
  }
}
