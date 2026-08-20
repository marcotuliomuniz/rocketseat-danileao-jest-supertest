import { NestFactory } from '@nestjs/core';
import { CreateUserModule } from './modules/createUser/create-user.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(CreateUserModule);
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  Logger.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
