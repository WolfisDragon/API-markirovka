import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMakerDto } from './dto/create-maker.dto';
import { UpdateMakerDto } from './dto/update-maker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Maker } from './entities/maker.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MakerService {
  constructor(
    @InjectRepository(Maker)
    private readonly makerRepository: Repository<Maker>,
  ) {}
  async create(createMakerDto: CreateMakerDto) {
    const newMaker = {
      name: createMakerDto.name,
    };
    return await this.makerRepository.save(newMaker);
  }

  async findAll() {
    return await this.makerRepository.find();
  }

  async findOne(id: number) {
    const maker = await this.makerRepository.findOne({
      where: { id },
    });
    if (!maker) throw new NotFoundException('Maker not found');
    return maker;
  }

  async update(id: number, updateMakerDto: UpdateMakerDto) {
    return await this.makerRepository.update(id, updateMakerDto);
  }

  async remove(id: number) {
    return await this.makerRepository.delete(id);
  }
}
