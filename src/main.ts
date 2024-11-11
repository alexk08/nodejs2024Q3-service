import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // init
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
