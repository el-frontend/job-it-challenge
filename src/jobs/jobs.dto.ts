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
}
