import { AuthRepository } from '../ports/AuthRepository';
import { LoginDto } from '../dto/LoginDto';
import { Email } from '@/domain/auth/value-objects/Email';
import { User } from '@/domain/auth/entities/User';


export class LoginUserUseCase {
  constructor(
    private readonly repo: AuthRepository
  ) {}

  async execute( dto: LoginDto ): Promise<User> {
    const emailVO = new Email( dto.email );
    return this.repo.login({ ...dto, email:emailVO.toString() });
  }
}
