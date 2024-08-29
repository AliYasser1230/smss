import { IsString, IsInt, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TimeTableDto {
  @ApiProperty()
  @IsInt()
  timeTableId: number;

  @ApiProperty()
  @IsDate()
  dayOfWeek: Date;

  @ApiProperty()
  @IsString()
  startTime: string;

  @ApiProperty()
  @IsString()
  endTime: string;

  @ApiProperty()
  @IsInt()
  teacherId: number;
}
