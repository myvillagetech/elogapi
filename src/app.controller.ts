import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/app')
export class AppController {
  constructor() {}


  @Get('/health')
  getHealth(): string {
    return "I am Good";
  }
}
