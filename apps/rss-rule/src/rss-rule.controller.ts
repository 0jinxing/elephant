import { Controller, Get } from '@nestjs/common';
import { RssRuleService } from './rss-rule.service';

@Controller()
export class RssRuleController {
  constructor(private readonly rssRuleService: RssRuleService) {}

  @Get()
  getHello(): string {
    return this.rssRuleService.getHello();
  }
}
