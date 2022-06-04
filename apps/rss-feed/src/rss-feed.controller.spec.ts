import { Test, TestingModule } from '@nestjs/testing';
import { RssFeedController } from './rss-feed.controller';
import { RssFeedService } from './rss-feed.service';

describe('RssFeedController', () => {
  let rssFeedController: RssFeedController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RssFeedController],
      providers: [RssFeedService],
    }).compile();

    rssFeedController = app.get<RssFeedController>(RssFeedController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rssFeedController.getHello()).toBe('Hello World!');
    });
  });
});
