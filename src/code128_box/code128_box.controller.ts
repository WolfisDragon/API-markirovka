import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Code128BoxService } from './code128_box.service';
import { CreateCode128BoxDto } from './dto/create-code128_box.dto';
import { UpdateCode128BoxDto } from './dto/update-code128_box.dto';

@Controller('code128-box')
export class Code128BoxController {
  constructor(private readonly code128BoxService: Code128BoxService) {}

  @Post()
  create(@Body() createCode128BoxDto: CreateCode128BoxDto) {
    return this.code128BoxService.create(createCode128BoxDto);
  }

  @Get()
  findAll() {
    return this.code128BoxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.code128BoxService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCode128BoxDto: UpdateCode128BoxDto) {
    return this.code128BoxService.update(+id, updateCode128BoxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.code128BoxService.remove(+id);
  }
}
