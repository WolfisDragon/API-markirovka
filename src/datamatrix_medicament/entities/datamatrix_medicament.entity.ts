import { Code128Box } from 'src/code128_box/entities/code128_box.entity';
import { Series } from 'src/series/entities/series.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class DatamatrixMedicament {
  @PrimaryGeneratedColumn({ name: 'datamatrix_id' })
  id: number;

  @Column()
  matrixCode: string;

  @CreateDateColumn()
  date: Date;

  @ManyToOne(() => Series, (Series) => Series.datamatrix)
  series: Series;

  @ManyToOne(() => Code128Box, (Code128Box) => Code128Box.datamatrix)
  codes128: Code128Box;
}
