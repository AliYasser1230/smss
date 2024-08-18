import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './models/users/entities/adminEntity';
import { Teacher } from './models/users/entities/teacherEntity';
import { Course } from './models/users/entities/courseEntity';
import { Student } from './models/users/entities/studentEntity';
import { Grade } from './models/users/entities/gradeEntity';
import { Timetable } from './models/users/entities/timeTableEntity';

@Injectable()
export class DatabaseSeederService implements OnModuleInit {
  constructor(
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
    @InjectRepository(Course) private courseRepository: Repository<Course>,
      @InjectRepository(Student) private studentRepository: Repository<Student>,
    @InjectRepository(Grade) private gradeRepository:Repository<Grade>,
   @InjectRepository(Timetable) private timeTableRepository:Repository<Timetable>
  ) { }

  async onModuleInit() {
    await this.seed();
  }

  async seed() {
    // Seed Admin
    const admin = this.adminRepository.create({
      name: 'John Doe',
    });

    await this.adminRepository.save(admin);

    // Seed Teacher
    const teacher = this.teacherRepository.create({
      name: 'Jane Smith', // Assuming 'name' is defined in the User entity which Teacher extends
      qualifications: 'MSc in Computer Science',
      specialization: 'Programming',
      hireDate: new Date(),
      salary: 60000,
    });
    await this.teacherRepository.save(teacher);

    // Seed Course
    const course = this.courseRepository.create({
      courseDescription: 'Introduction to Programming',
      duration: '2 hours',
      credits: 3,
      teachers: teacher, // Assuming a ManyToOne relationship
    });
    await this.courseRepository.save(course);

    console.log('Database seeding completed');
  }
}
