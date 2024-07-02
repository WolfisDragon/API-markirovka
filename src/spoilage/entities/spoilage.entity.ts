import { DatamatrixMedicament } from 'src/datamatrix_medicament/entities/datamatrix_medicament.entity';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Spoilage {
  @PrimaryGeneratedColumn({ name: 'spoilage_id' })
  id: number;

  @OneToOne(() => DatamatrixMedicament)
  @JoinColumn()
  datamatrix: DatamatrixMedicament;
}
