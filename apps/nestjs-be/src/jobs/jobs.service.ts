import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { LessThanOrEqual, Like, MoreThanOrEqual, Repository } from 'typeorm';
import { Job } from './entities/job.entity';
import { JobCandidate } from './entities/job_candidates.entity';
import { CreateJobDTO, JobSearchDTO } from './jobs.dto';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobsRepository: Repository<Job>,
    @InjectRepository(JobCandidate)
    private jobCandidatesRepository: Repository<JobCandidate>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(search: JobSearchDTO): Promise<Job[]> {
    console.log(search);
    // Implement search logic
    return this.jobsRepository.find({
      where: {
        ...(search?.jobType && { jobType: search.jobType }),
        ...(search?.location && { location: search.location }),
        ...(search?.salary_gt && { salary: MoreThanOrEqual(search.salary_gt) }),
        ...(search?.salary_lt && { salary: LessThanOrEqual(search.salary_lt) }),
        ...(search?.search && {
          description: Like(`%${search.search}%`),
        }),
      },
    });
  }

  async findOne(id: number): Promise<Job> {
    return this.jobsRepository.findOneBy({ id });
  }

  async create(job: CreateJobDTO, userId: number): Promise<Job> {
    const user = await this.usersRepository.findOneBy({ id: userId });
    if (!user) {
      throw new Error('User not found');
    }
    const newJob = this.jobsRepository.create({ ...job, createdBy: user });
    return this.jobsRepository.save(newJob);
  }

  async applyToJob(jobId: number, userId: number): Promise<void> {
    const job = await this.jobsRepository.findOneBy({ id: jobId });
    if (!job) {
      throw new Error('Job not found');
    }
    await this.jobCandidatesRepository.save({ job, user: { id: userId } });
  }

  async getJobCandidates(jobId: number): Promise<JobCandidate[]> {
    return this.jobCandidatesRepository.find({
      where: { job: { id: jobId } },
      relations: ['user'],
    });
  }

  async getMyJobs(id: number): Promise<Job[]> {
    return this.jobsRepository.find({
      where: { createdBy: { id } },
      relations: ['jobCandidates'],
    });
  }
}
