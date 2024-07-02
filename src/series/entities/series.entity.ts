import { DatamatrixMedicament } from 'src/datamatrix_medicament/entities/datamatrix_medicament.entity';
import { Medicament } from 'src/medicament/entities/medicament.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Series {
  @PrimaryGeneratedColumn({ name: 'series_id' })
  id: number;

  @Column()
  series_num: number;

  @ManyToOne(() => Medicament, (Medicament) => Medicament.series)
  medicament: Medicament;

  @OneToMany(
    () => DatamatrixMedicament,
    (DatamatrixMedicament) => DatamatrixMedicament.series,
  )
  datamatrix: DatamatrixMedicament[];
}
