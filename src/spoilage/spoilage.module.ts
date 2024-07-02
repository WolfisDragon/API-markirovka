import { Module } from '@nestjs/common';
import { SpoilageService } from './spoilage.service';
import { SpoilageController } from './spoilage.controller';

@Module({
  controllers: [SpoilageController],
  providers: [SpoilageService],
})
export class SpoilageModule {}
