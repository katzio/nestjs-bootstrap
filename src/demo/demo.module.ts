import { Module } from '@nestjs/common';
import { DemoController } from './api/controllers/demo.controller';
import { DemoService } from './services/demo.service';

@Module({
  imports: [],
  controllers: [DemoController],
  providers: [DemoService],
})
export class DemoModule {}
