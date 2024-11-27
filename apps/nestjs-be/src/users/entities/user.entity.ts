import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  resume: string;

  @Column()
  password: string;

  @Column('simple-array')
  skills: string[];

  @ManyToOne(() => Role, (role) => role.id)
  role: Role;
}
