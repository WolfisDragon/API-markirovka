import { Module } from '@nestjs/common';
import { MakerService } from './maker.service';
import { MakerController } from './maker.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maker } from './entities/maker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Maker])],
  controllers: [MakerController],
  providers: [MakerService],
})
export class MakerModule {}
