import { Test, TestingModule } from '@nestjs/testing';
import { SpoilageService } from './spoilage.service';

describe('SpoilageService', () => {
  let service: SpoilageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpoilageService],
    }).compile();

    service = module.get<SpoilageService>(SpoilageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
