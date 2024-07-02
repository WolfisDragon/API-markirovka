import { Medicament } from 'src/medicament/entities/medicament.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Maker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Medicament, (Medicament) => Medicament.maker)
  medicaments: Medicament[];
}
