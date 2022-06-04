import { Module } from '@nestjs/common';
import { RssRuleController } from './rss-rule.controller';
import { RssRuleService } from './rss-rule.service';

@Module({
  imports: [],
  controllers: [RssRuleController],
  providers: [RssRuleService],
})
export class RssRuleModule {}
