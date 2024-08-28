import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsDate } from 'class-validator';

export class AdminDto {
  @ApiProperty()
  @IsInt()
  adminId: number;
}
