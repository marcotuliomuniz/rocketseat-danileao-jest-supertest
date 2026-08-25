import { Logger } from '@nestjs/common';
import { createApp } from './app';

async function bootstrap() {
  const app = await createApp();
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  Logger.log(`Application is running! PORT: ${port}`);
}
bootstrap();
