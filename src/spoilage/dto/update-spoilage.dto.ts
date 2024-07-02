import { PartialType } from '@nestjs/mapped-types';
import { CreateSpoilageDto } from './create-spoilage.dto';

export class UpdateSpoilageDto extends PartialType(CreateSpoilageDto) {}
