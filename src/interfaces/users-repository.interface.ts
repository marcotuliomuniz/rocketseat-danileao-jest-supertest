import { UserEntinty } from 'src/entities/user.entity';

interface IUserRepository {
  create(user: UserEntinty): UserEntinty;
  exists(username: string): boolean;
}

export type { IUserRepository };
