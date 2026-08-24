import { Injectable } from '@nestjs/common';
import type { IUserRepository } from '../interfaces/users-repository.interface';
import { UserEntity } from '../entities/user.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
class UserRepositoryInMemory implements IUserRepository {
  private users: UserEntity[] = [];

  async create(user: UserEntity): Promise<UserEntity> {
    Object.assign(user, {
      id: uuid(),
    });

    this.users.push(user);
    return Promise.resolve(user);
  }

  async exists(username: string): Promise<boolean> {
    const user = this.users.some((user) => user.username === username);
    return Promise.resolve(user);
  }
}

export { UserRepositoryInMemory };
