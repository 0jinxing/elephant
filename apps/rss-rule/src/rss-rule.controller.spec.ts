import { Test, TestingModule } from '@nestjs/testing';
import { RssRuleController } from './rss-rule.controller';
import { RssRuleService } from './rss-rule.service';

describe('RssRuleController', () => {
  let rssRuleController: RssRuleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RssRuleController],
      providers: [RssRuleService],
    }).compile();

    rssRuleController = app.get<RssRuleController>(RssRuleController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rssRuleController.getHello()).toBe('Hello World!');
    });
  });
});
