import { Injectable } from '@nestjs/common';
import { CreateDatamatrixMedicamentDto } from './dto/create-datamatrix_medicament.dto';
import { UpdateDatamatrixMedicamentDto } from './dto/update-datamatrix_medicament.dto';

@Injectable()
export class DatamatrixMedicamentService {
  create(createDatamatrixMedicamentDto: CreateDatamatrixMedicamentDto) {
    return 'This action adds a new datamatrixMedicament';
  }

  findAll() {
    return `This action returns all datamatrixMedicament`;
  }

  findOne(id: number) {
    return `This action returns a #${id} datamatrixMedicament`;
  }

  update(id: number, updateDatamatrixMedicamentDto: UpdateDatamatrixMedicamentDto) {
    return `This action updates a #${id} datamatrixMedicament`;
  }

  remove(id: number) {
    return `This action removes a #${id} datamatrixMedicament`;
  }
}
