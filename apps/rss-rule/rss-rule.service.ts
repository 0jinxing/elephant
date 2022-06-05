import { Injectable } from '@nestjs/common';

@Injectable()
export class RssRuleService {
  getHello(): string {
    return 'Hello World!';
  }
}
