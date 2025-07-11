import { User } from '@/domain/auth/entities/User';
import { LoginDto } from '../dto/LoginDto';


export interface AuthRepository {
  login( dto: LoginDto ): Promise<User>;
}
