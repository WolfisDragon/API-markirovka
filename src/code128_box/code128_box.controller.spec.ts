import { Test, TestingModule } from '@nestjs/testing';
import { Code128BoxController } from './code128_box.controller';
import { Code128BoxService } from './code128_box.service';

describe('Code128BoxController', () => {
  let controller: Code128BoxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Code128BoxController],
      providers: [Code128BoxService],
    }).compile();

    controller = module.get<Code128BoxController>(Code128BoxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
