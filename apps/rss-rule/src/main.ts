import { NestFactory } from '@nestjs/core';
import { RssRuleModule } from './rss-rule.module';

async function bootstrap() {
  const app = await NestFactory.create(RssRuleModule);
  await app.listen(3000);
}
bootstrap();
