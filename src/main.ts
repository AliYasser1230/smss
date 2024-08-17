import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  await app.listen(port);

  // Log a message to the console to ensure the backend is running
  console.log(`Backend is running on http://localhost:${port}`);
}

bootstrap();
