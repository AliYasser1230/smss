import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsDate } from 'class-validator';

export class GradeDto {
  @ApiProperty()
  @IsInt()
  gradeId: number;

  @ApiProperty()
  @IsString()
  gradeLevel: string;

  @ApiProperty()
  @IsInt()
  studentId: number;
}
