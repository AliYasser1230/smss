import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './models/users/entities/adminEntity';
import { Teacher } from './models/users/entities/teacherEntity';
import { Course } from './models/users/entities/courseEntity';
import { DatabaseSeederService } from './seed';
import { Student } from './models/users/entities/studentEntity';
import { ClassRoom } from './models/users/entities/classRoomEntity';
import { Timetable } from './models/users/entities/timeTableEntity';
import { User } from './models/users/entities/userEntity';
import { Grade } from './models/users/entities/gradeEntity';
@Module({
  imports: [TypeOrmModule.forFeature([Admin, Teacher, Course,Student,ClassRoom,Timetable,User,Grade])],
  providers: [DatabaseSeederService],
  exports: [DatabaseSeederService],
})
export class SeederModule {}
