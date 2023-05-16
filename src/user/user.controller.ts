import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto';
import { UserData } from './types';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard)
  getUserData(@Req() req: any): Promise<UserData> {
    const userId = req.user._id
    return this.userService.getUserData(userId);
  }

  @Post()
  createUser(@Body() createUserArgs: CreateUserDto): Promise<string> {
    return this.userService.createUser(createUserArgs);
  }
}
