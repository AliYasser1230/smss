import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SeederModule } from './seeder.module';
import { DatabaseSeederService } from './seed';
import { User } from './models/users/entities/userEntity';
import { Admin } from './models/users/entities/adminEntity';
import { ClassRoom } from './models/users/entities/classRoomEntity';
import { Grade } from './models/users/entities/gradeEntity';
import { Student } from './models/users/entities/studentEntity';
import { Teacher } from './models/users/entities/teacherEntity';
import { Timetable } from './models/users/entities/timeTableEntity';
import { Course } from './models/users/entities/courseEntity';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        User,
        Admin,
        ClassRoom,
        Grade,
        Student,
        Teacher,
        Timetable,
        Course,
      ],
      migrations: ['dist/migrations/*.js'],
      synchronize: true,
    }),
    SeederModule,
  ],
})
  
export class AppModule implements OnModuleInit {
  constructor(private readonly seederService: DatabaseSeederService) {}

  async onModuleInit() {
    await this.seederService.seed(); 
  }
}
