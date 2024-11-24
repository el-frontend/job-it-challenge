import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  resume: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  skills: string;
  @ApiProperty()
  role: string;
}
