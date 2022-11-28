import { Controller, Get } from '@nestjs/common';
import { DemoService } from '../../services/demo.service';

@Controller()
export class DemoController {
  constructor(private readonly appService: DemoService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
