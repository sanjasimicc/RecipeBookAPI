import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cuisine {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 70 })
  name: string;
}
