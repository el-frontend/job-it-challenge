import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  resume: string;

  @Column()
  password: string;

  @Column()
  skills: string;

  @ManyToOne(() => Role, (role) => role.id)
  role: Role;
}
