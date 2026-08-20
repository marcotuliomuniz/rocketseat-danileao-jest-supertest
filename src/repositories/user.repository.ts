import { Injectable } from '@nestjs/common';
import type { IUserRepository } from 'src/interfaces/users-repository.interface';
import { UserEntinty } from 'src/entities/user.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
class UserRepository implements IUserRepository {
  private users: UserEntinty[] = [];

  create(user: UserEntinty): UserEntinty {
    Object.assign(user, {
      id: uuid(),
    });

    this.users.push(user);
    return user;
  }

  exists(username: string): boolean {
    const user = this.users.some((user) => user.username === username);
    return user;
  }
}

export { UserRepository };
