import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional, IsDate } from 'class-validator';

export class StudentDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly email: string;

  @ApiProperty()
  @IsString()
  readonly password: string;

  @ApiProperty()
  @IsDate()
  readonly dateOfBirth: Date;

  @ApiProperty()
  @IsString()
  readonly address: string;

  @ApiProperty()
  @IsDate()
  readonly enrollmentDate: Date;

  @ApiProperty()
  @IsString()
  readonly guardianName: string;

  @ApiProperty()
  @IsString()
  readonly guardianContact: string;

  @ApiProperty()
  @IsInt()
  readonly classRoomId: number;

  @ApiProperty()
  @IsInt()
  readonly gradeId: number;
}
