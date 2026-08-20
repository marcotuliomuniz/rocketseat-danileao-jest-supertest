import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import type { UserRequestDTO } from 'src/dto/user-request.dto';

@Controller('user')
export class CreateUserController {
  constructor(private readonly CreateUserService: CreateUserService) {}

  @Post('create')
  public create(@Body() body: UserRequestDTO): string {
    const { name, username, email } = body;

    this.CreateUserService.execute({ name, username, email });

    return 'sucess!';
  }

  @Get('helloworld')
  public get(): string {
    return 'Hello World!';
  }
}
