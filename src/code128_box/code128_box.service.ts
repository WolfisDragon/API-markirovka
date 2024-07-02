import { Injectable } from '@nestjs/common';
import { CreateCode128BoxDto } from './dto/create-code128_box.dto';
import { UpdateCode128BoxDto } from './dto/update-code128_box.dto';

@Injectable()
export class Code128BoxService {
  create(createCode128BoxDto: CreateCode128BoxDto) {
    return 'This action adds a new code128Box';
  }

  findAll() {
    return `This action returns all code128Box`;
  }

  findOne(id: number) {
    return `This action returns a #${id} code128Box`;
  }

  update(id: number, updateCode128BoxDto: UpdateCode128BoxDto) {
    return `This action updates a #${id} code128Box`;
  }

  remove(id: number) {
    return `This action removes a #${id} code128Box`;
  }
}
