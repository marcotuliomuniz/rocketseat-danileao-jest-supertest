import { UserEntity } from '../entities/user.entity';

interface IUserRepository {
  create(user: UserEntity): Promise<UserEntity>;
  exists(username: string): Promise<boolean>;
}

export type { IUserRepository };
