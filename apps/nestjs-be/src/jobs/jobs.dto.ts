import { ApiProperty } from '@nestjs/swagger';

export class CreateJobDTO {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  salary: number;
  @ApiProperty()
  location: string;
  @ApiProperty()
  jobType: string;
  @ApiProperty()
  tags: string;
  @ApiProperty()
  company_name: string;
  @ApiProperty()
  company_image: string;
}

export class JobSearchDTO {
  jobType?: string;
  salary_gt?: number;
  salary_lt?: number;
  location?: string;
  search?: string;
}
