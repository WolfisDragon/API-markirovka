import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpoilageService } from './spoilage.service';
import { CreateSpoilageDto } from './dto/create-spoilage.dto';
import { UpdateSpoilageDto } from './dto/update-spoilage.dto';

@Controller('spoilage')
export class SpoilageController {
  constructor(private readonly spoilageService: SpoilageService) {}

  @Post()
  create(@Body() createSpoilageDto: CreateSpoilageDto) {
    return this.spoilageService.create(createSpoilageDto);
  }

  @Get()
  findAll() {
    return this.spoilageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spoilageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpoilageDto: UpdateSpoilageDto) {
    return this.spoilageService.update(+id, updateSpoilageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spoilageService.remove(+id);
  }
}
