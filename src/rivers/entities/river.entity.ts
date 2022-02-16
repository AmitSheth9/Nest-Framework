import { Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class River {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
