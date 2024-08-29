import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsDate } from 'class-validator';
import { UserDto } from './userDto';

export class TeacherDto extends UserDto {
  @ApiProperty()
  @IsInt()
  teacherId: number;

  @ApiProperty()
  @IsString()
  qualifications: string;

  @ApiProperty()
  @IsString()
  specialization: string;

  @ApiProperty()
  @IsDate()
  hireDate: Date;

  @ApiProperty()
  @IsInt()
  salary: number;

  @ApiProperty()
  @IsInt()
  courseId: number; 

  @ApiProperty()
  @IsInt()
  timeTableId: number; 
}
