import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { Job } from './entities/job.entity';
import { JobCandidate } from './entities/job_candidates.entity';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Job, JobCandidate, User])],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
