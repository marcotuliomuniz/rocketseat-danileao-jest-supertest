import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user.controller';
import { CreateUserService } from './create-user.service';
import { UserRepositoryInMemory } from '../../repositories/user.repository-in-memory';

@Module({
  imports: [],
  controllers: [CreateUserController],
  providers: [
    CreateUserService,
    {
      provide: 'UserRepository',
      useClass: UserRepositoryInMemory,
    },
  ],
})
export class CreateUserModule {}
