import { Injectable } from '@nestjs/common';

import { GetTokenDto } from './dto';
import { TokensResponse } from './types';

@Injectable()
export class AuthService {
  async getToken({ username, password }: GetTokenDto): Promise<TokensResponse> {
    // todo: validate user and generate tokens
    console.log(username);
    console.log(password);

    return {
      accessToken: 'dummy_access_token',
      refreshToken: 'dummy_refresh_token',
    };
  }

  async refreshToken(refreshToken: string): Promise<TokensResponse> {
    // todo: validate refresh token and generate new tokens
    console.log(refreshToken);

    return {
      accessToken: 'dummy_access_token',
      refreshToken: 'dummy_refresh_token',
    };
  }
}
