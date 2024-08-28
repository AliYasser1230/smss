import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsDate } from 'class-validator';

export class StudentDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsDate()
  dateOfBirth: Date;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsDate()
  enrollmentDate: Date;

  @ApiProperty()
  @IsString()
  guardianName: string;

  @ApiProperty()
  @IsString()
  guardianContact: string;

  @ApiProperty()
  @IsInt()
  classRoomId: number;

  @ApiProperty()
  @IsInt()
  gradeId: number;
}
