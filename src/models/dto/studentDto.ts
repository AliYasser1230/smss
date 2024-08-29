import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsDate } from 'class-validator';
import { UserDto } from './userDto';
export class StudentDto extends UserDto{
 
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
