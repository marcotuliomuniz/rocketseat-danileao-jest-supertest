import { Inject, Injectable, ConflictException } from '@nestjs/common';
import type { IUserRepository } from '../../interfaces/users-repository.interface';
import type { UserRequestDTO } from '../../dto/user-request.dto';
import { UserEntity } from '../../entities/user.entity';

@Injectable()
class CreateUserService {
  constructor(
    @Inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  async execute({ email, username, name }: UserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.exists(username);

    if (userAlreadyExists) {
      throw new ConflictException('User already exists!');
    }

    const userCreate = UserEntity.create({ email, username, name });
    const user = await this.usersRepository.create(userCreate);
    return user;
  }
}

export { CreateUserService };
