import { DatamatrixMedicament } from 'src/datamatrix_medicament/entities/datamatrix_medicament.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Code128Box {
  @PrimaryGeneratedColumn({ name: 'code128_id' })
  id: number;

  @Column()
  code128: string;

  @CreateDateColumn()
  createAt: Date;

  @OneToMany(
    () => DatamatrixMedicament,
    (DatamatrixMedicament) => DatamatrixMedicament.codes128,
  )
  datamatrix: DatamatrixMedicament[];
}
