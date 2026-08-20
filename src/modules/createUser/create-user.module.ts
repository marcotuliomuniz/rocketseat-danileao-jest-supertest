import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user.controller';
import { CreateUserService } from './create-user.service';
import { UserRepository } from 'src/repositories/user.repository';

@Module({
  imports: [],
  controllers: [CreateUserController],
  providers: [
    CreateUserService,
    {
      provide: 'UserRepository',
      useClass: UserRepository,
    },
  ],
})
export class CreateUserModule {}
