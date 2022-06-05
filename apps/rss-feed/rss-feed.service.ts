import { Injectable } from '@nestjs/common';

@Injectable()
export class RssFeedService {
  getHello(): string {
    return 'Microservices Hello World!';
  }
}
