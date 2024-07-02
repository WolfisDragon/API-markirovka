import { Injectable } from '@nestjs/common';
import { CreateSpoilageDto } from './dto/create-spoilage.dto';
import { UpdateSpoilageDto } from './dto/update-spoilage.dto';

@Injectable()
export class SpoilageService {
  create(createSpoilageDto: CreateSpoilageDto) {
    return 'This action adds a new spoilage';
  }

  findAll() {
    return `This action returns all spoilage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spoilage`;
  }

  update(id: number, updateSpoilageDto: UpdateSpoilageDto) {
    return `This action updates a #${id} spoilage`;
  }

  remove(id: number) {
    return `This action removes a #${id} spoilage`;
  }
}
