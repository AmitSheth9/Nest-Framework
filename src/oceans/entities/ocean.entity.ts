import { Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ocean {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
