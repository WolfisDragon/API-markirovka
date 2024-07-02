import { Test, TestingModule } from '@nestjs/testing';
import { DatamatrixMedicamentService } from './datamatrix_medicament.service';

describe('DatamatrixMedicamentService', () => {
  let service: DatamatrixMedicamentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatamatrixMedicamentService],
    }).compile();

    service = module.get<DatamatrixMedicamentService>(DatamatrixMedicamentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
