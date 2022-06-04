import { Controller, Get } from '@nestjs/common';
import { RssFeedService } from './rss-feed.service';

@Controller()
export class RssFeedController {
  constructor(private readonly rssFeedService: RssFeedService) {}

  @Get()
  getHello(): string {
    return this.rssFeedService.getHello();
  }
}
