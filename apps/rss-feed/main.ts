import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RssFeedModule } from './rss-feed.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RssFeedModule,
    {
      transport: Transport.TCP,
      options: { host: '0.0.0.0', port: 8881 },
    },
  );
  await app.listen();
}
bootstrap();
