import { Module } from '@nestjs/common';
import { DatamatrixMedicamentService } from './datamatrix_medicament.service';
import { DatamatrixMedicamentController } from './datamatrix_medicament.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatamatrixMedicament } from './entities/datamatrix_medicament.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DatamatrixMedicament])],
  controllers: [DatamatrixMedicamentController],
  providers: [DatamatrixMedicamentService],
})
export class DatamatrixMedicamentModule {}
