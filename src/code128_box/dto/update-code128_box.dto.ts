import { PartialType } from '@nestjs/mapped-types';
import { CreateCode128BoxDto } from './create-code128_box.dto';

export class UpdateCode128BoxDto extends PartialType(CreateCode128BoxDto) {}
