import { Inject, Injectable, ConflictException } from '@nestjs/common';
import type { IUserRepository } from '../../interfaces/users-repository.interface';
import type { UserRequestDTO } from '../../dto/user-request.dto';
import { UserEntinty } from '../../entities/user.entity';

@Injectable()
class CreateUserService {
  constructor(
    @Inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  execute({ email, username, name }: UserRequestDTO) {
    const userAlreadyExists = this.usersRepository.exists(username);

    if (userAlreadyExists) {
      throw new ConflictException('User already exists!');
    }

    const userCreate = UserEntinty.create({ email, username, name });
    const user = this.usersRepository.create(userCreate);
    return user;
  }
}

export { CreateUserService };
