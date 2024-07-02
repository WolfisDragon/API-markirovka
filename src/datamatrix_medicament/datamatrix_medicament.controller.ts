import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatamatrixMedicamentService } from './datamatrix_medicament.service';
import { CreateDatamatrixMedicamentDto } from './dto/create-datamatrix_medicament.dto';
import { UpdateDatamatrixMedicamentDto } from './dto/update-datamatrix_medicament.dto';

@Controller('datamatrix-medicament')
export class DatamatrixMedicamentController {
  constructor(private readonly datamatrixMedicamentService: DatamatrixMedicamentService) {}

  @Post()
  create(@Body() createDatamatrixMedicamentDto: CreateDatamatrixMedicamentDto) {
    return this.datamatrixMedicamentService.create(createDatamatrixMedicamentDto);
  }

  @Get()
  findAll() {
    return this.datamatrixMedicamentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datamatrixMedicamentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatamatrixMedicamentDto: UpdateDatamatrixMedicamentDto) {
    return this.datamatrixMedicamentService.update(+id, updateDatamatrixMedicamentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datamatrixMedicamentService.remove(+id);
  }
}
