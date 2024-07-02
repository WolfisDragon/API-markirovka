import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MakerService } from './maker.service';
import { CreateMakerDto } from './dto/create-maker.dto';
import { UpdateMakerDto } from './dto/update-maker.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('maker')
export class MakerController {
  constructor(private readonly makerService: MakerService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() createMakerDto: CreateMakerDto) {
    return this.makerService.create(createMakerDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.makerService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.makerService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateMakerDto: UpdateMakerDto) {
    return this.makerService.update(+id, updateMakerDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.makerService.remove(+id);
  }
}
