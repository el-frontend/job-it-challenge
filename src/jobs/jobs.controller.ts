import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Job } from './entities/job.entity';
import { CreateJobDTO } from './jobs.dto';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobService: JobsService) {}

  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<Job[]> {
    return this.jobService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async getMyJobs(): Promise<Job[]> {
    // Get user id from the JWT
    // Use the user id to find the user's job
    return this.jobService.getMyJobs(1);
  }

  @UseGuards(AuthGuard)
  @Post(':id/apply')
  async applyToJob(@Param() params: { id: string }): Promise<void> {
    // Get user id from the JWT
    // Use the user id to apply to the job
    return this.jobService.applyToJob(Number(params.id), 1);
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createJobDto: CreateJobDTO): Promise<Job> {
    // Get user id from the JWT
    // Use the user id to create the job
    return this.jobService.create(createJobDto, 1);
  }
}
