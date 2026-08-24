import { beforeEach, describe, expect, it } from '@jest/globals';
import { UserRepositoryInMemory } from '../src/repositories/user.repository-in-memory';
import { CreateUserService } from '../src/modules/createUser/create-user.service';
import { IUserRepository } from 'src/interfaces/users-repository.interface';
import { USERMOCK } from './mocks/user.mock';

describe('Create User Service', () => {
  let userRepositoryInMemory: IUserRepository;
  let createUserService: CreateUserService;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserService = new CreateUserService(userRepositoryInMemory);
  });

  it('It should be possible to create a user.', async () => {
    const user = await createUserService.execute(USERMOCK.DATA);

    console.log(user);

    expect(user).toHaveProperty('id');
    expect(user.id).toBeDefined();
  });

  it('It should not be possible to create a duplicated user.', async () => {
    const user = await createUserService.execute(USERMOCK.DATA);

    await expect(createUserService.execute(user)).rejects.toEqual(
      new Error('User already exists!'),
    );
  });
});
