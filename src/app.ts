import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CreateUserModule } from './modules/createUser/create-user.module';

export async function createApp(): Promise<NestExpressApplication> {
  const app =
    await NestFactory.create<NestExpressApplication>(CreateUserModule);
  return app;
}
