import { Module } from '@nestjs/common';
import { RssFeedController } from './rss-feed.controller';
import { RssFeedService } from './rss-feed.service';

@Module({
  imports: [],
  controllers: [RssFeedController],
  providers: [RssFeedService],
})
export class RssFeedModule {}
