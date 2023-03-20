import { Controller, Get } from '@nestjs/common';

import { IResponse } from '@monorepo/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): IResponse<string> {
    return this.appService.getData();
  }
}
