import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsDate } from 'class-validator';

export class ClassRoomDto {
  @ApiProperty()
  @IsInt()
  classRoomId: number;

  @ApiProperty()
  @IsInt()
  roomNumber: number;

  @ApiProperty()
  @IsInt()
  capacity: number;

  @ApiProperty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsInt()
  studentId: number;
}
