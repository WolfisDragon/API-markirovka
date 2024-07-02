import { Test, TestingModule } from '@nestjs/testing';
import { DatamatrixMedicamentController } from './datamatrix_medicament.controller';
import { DatamatrixMedicamentService } from './datamatrix_medicament.service';

describe('DatamatrixMedicamentController', () => {
  let controller: DatamatrixMedicamentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatamatrixMedicamentController],
      providers: [DatamatrixMedicamentService],
    }).compile();

    controller = module.get<DatamatrixMedicamentController>(DatamatrixMedicamentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
