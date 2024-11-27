import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiQuery } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { getUserFromRequest } from 'src/utils/request.util';
import { Job } from './entities/job.entity';
import { CreateJobDTO, JobSearchDTO } from './jobs.dto';
import { JobType } from './jobs.enum';
import { JobsService } from './jobs.service';

@ApiBearerAuth()
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobService: JobsService) {}

  @ApiQuery({
    name: 'jobType',
    required: false,
    enum: JobType,
    enumName: 'JobType',
  })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'salary_gt', required: false, type: 'number' })
  @ApiQuery({ name: 'salary_lt', required: false, type: 'number' })
  @ApiQuery({ name: 'location', required: false })
  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Query() query: JobSearchDTO): Promise<Job[]> {
    return this.jobService.findAll(query);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async getMyJobs(@Req() request: Request): Promise<Job[]> {
    const user = getUserFromRequest(request);
    return this.jobService.getMyJobs(user.sub);
  }

  @ApiParam({ name: 'id', type: 'string' })
  @UseGuards(AuthGuard)
  @Post(':id/apply')
  async applyToJob(
    @Param() params: { id: string },
    @Req() request: Request,
  ): Promise<void> {
    const user = getUserFromRequest(request);
    return this.jobService.applyToJob(Number(params.id), user.sub);
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body() createJobDto: CreateJobDTO,
    @Req() request: Request,
  ): Promise<Job> {
    const user = getUserFromRequest(request);
    return this.jobService.create(createJobDto, user.sub);
  }
}
