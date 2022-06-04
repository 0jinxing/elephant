import { NestFactory } from '@nestjs/core';
import { RssFeedModule } from './rss-feed.module';

async function bootstrap() {
  const app = await NestFactory.create(RssFeedModule);
  await app.listen(3000);
}
bootstrap();
