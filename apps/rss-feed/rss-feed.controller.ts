import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RssFeedService } from './rss-feed.service';

@Controller()
export class RssFeedController {
  constructor(private readonly rssFeedService: RssFeedService) {}

  @MessagePattern('get_hello')
  getHello(): string {
    return this.rssFeedService.getHello();
  }
}
