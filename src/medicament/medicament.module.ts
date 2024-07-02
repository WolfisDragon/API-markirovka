import { Module } from '@nestjs/common';
import { MedicamentService } from './medicament.service';
import { MedicamentController } from './medicament.controller';
import { Medicament } from './entities/medicament.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Medicament])],
  controllers: [MedicamentController],
  providers: [MedicamentService],
})
export class MedicamentModule {}
