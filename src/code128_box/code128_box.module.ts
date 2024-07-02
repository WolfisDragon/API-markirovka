import { Module } from '@nestjs/common';
import { Code128BoxService } from './code128_box.service';
import { Code128BoxController } from './code128_box.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Code128Box } from './entities/code128_box.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Code128Box])],
  controllers: [Code128BoxController],
  providers: [Code128BoxService],
})
export class Code128BoxModule {}
