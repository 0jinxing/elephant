import { firstValueFrom } from 'rxjs';
import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('RSS_FEED') private client: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/proxy')
  async getProxyHello() {
    return await firstValueFrom(this.client.send<string>('get_hello', {}));
  }
}
