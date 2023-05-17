import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { GetTokenDto, RefreshTokenDto } from './dto';
import { TokensResponse } from './types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  getToken(@Body() getTokenArgs: GetTokenDto): Promise<TokensResponse> {
    return this.authService.getToken(getTokenArgs);
  };
};
