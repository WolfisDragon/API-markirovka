import { Maker } from 'src/maker/entities/maker.entity';
import { Series } from 'src/series/entities/series.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Medicament {
  @PrimaryGeneratedColumn({ name: 'medicament_id' })
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Maker, (Maker) => Maker.medicaments)
  @JoinColumn({ name: 'maker_id' })
  maker: Maker;

  @Column()
  compound: string;

  @OneToMany(() => Series, (Series) => Series.medicament)
  series: Series[];
}
