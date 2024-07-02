import { Test, TestingModule } from '@nestjs/testing';
import { Code128BoxService } from './code128_box.service';

describe('Code128BoxService', () => {
  let service: Code128BoxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Code128BoxService],
    }).compile();

    service = module.get<Code128BoxService>(Code128BoxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
