import { User } from 'src/users/entities/user.entity';
import { Entity, ManyToOne } from 'typeorm';
import { Job } from './job.entity';

@Entity()
export class JobCandidate {
  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Job, (job) => job.id)
  job: Job;
}
