import { env } from '@/common/env/env';
import { logger } from '@/common/logger/logger';
import { fetchJson } from '@/common/http/fetchHttpClient';
import { AuthRepository } from '@/application/auth/ports/AuthRepository';
import { LoginDto } from '@/application/auth/dto/LoginDto';
import { Email } from '@/domain/auth/value-objects/Email';
import { User } from '@/domain/auth/entities/User';


export class AuthApiAdapter implements AuthRepository {
  async login( dto: LoginDto ): Promise<User> {
    logger.info( 'AuthApiAdapter.login()', dto.email );
    type ApiResp = {
      id: string;
      email: string;
      name: string;
      token: string;
    }

    const data = await fetchJson<ApiResp>( `${ env.API_URI }/auth/login`, {
      method: 'POST',
      body: JSON.stringify( dto )
    });

    return new User({
      id: data.id,
      email: new Email( data.email ),
      name: data.name,
      token: data.token
    });
  }
}
