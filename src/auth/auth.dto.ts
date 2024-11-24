import { ApiProperty } from '@nestjs/swagger';

export class SignInUserDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
