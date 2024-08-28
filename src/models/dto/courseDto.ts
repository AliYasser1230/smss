import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsDate } from 'class-validator';


export class CourseDto {
  @ApiProperty()
  @IsInt()
  courseId: number;

  @ApiProperty()
  @IsString()
  courseDescription: string;

  @ApiProperty()
  @IsString()
  duration: string;

  @ApiProperty()
  @IsInt()
  teacherId: number;

  @ApiProperty()
  @IsInt()
  credits: number;
}
