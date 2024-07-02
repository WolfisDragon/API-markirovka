import { Test, TestingModule } from '@nestjs/testing';
import { SpoilageController } from './spoilage.controller';
import { SpoilageService } from './spoilage.service';

describe('SpoilageController', () => {
  let controller: SpoilageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpoilageController],
      providers: [SpoilageService],
    }).compile();

    controller = module.get<SpoilageController>(SpoilageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
