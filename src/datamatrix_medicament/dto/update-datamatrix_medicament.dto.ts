import { PartialType } from '@nestjs/mapped-types';
import { CreateDatamatrixMedicamentDto } from './create-datamatrix_medicament.dto';

export class UpdateDatamatrixMedicamentDto extends PartialType(CreateDatamatrixMedicamentDto) {}
