import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import type { UserRequestDTO } from '../../dto/user-request.dto';

@Controller('user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post('create')
  public async create(@Body() body: UserRequestDTO): Promise<string> {
    const { name, username, email } = body;

    await this.createUserService.execute({ name, username, email });

    return 'Sucess!';
  }

  @Get()
  public get(): string {
    return 'Welcome to my implementation of the Rocketseat Codedrop using Jest and SuperTest!';
  }
}
