import { Test, TestingModule } from '@nestjs/testing';
import { DemoController } from '../../src/demo/api/controllers/demo.controller';
import { DemoService } from '../../src/demo/services/demo.service';

describe('BppController', () => {
  let baseController: DemoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DemoController],
      providers: [DemoService],
    }).compile();

    baseController = app.get<DemoController>(DemoController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(baseController.getHello()).toBe('Hello World!');
    });
  });
});
