import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './models/users/entities/adminEntity';
import { Teacher } from './models/users/entities/teacherEntity';
import { Course } from './models/users/entities/courseEntity';
import { Student } from './models/users/entities/studentEntity';
import { Grade } from './models/users/entities/gradeEntity';
import { Timetable } from './models/users/entities/timeTableEntity';
import { ClassRoom } from './models/users/entities/classRoomEntity';

@Injectable()
export class DatabaseSeederService implements OnModuleInit {
  constructor(
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
    @InjectRepository(Course) private courseRepository: Repository<Course>,
    @InjectRepository(Student) private studentRepository: Repository<Student>,
    @InjectRepository(Grade) private gradeRepository: Repository<Grade>,
    @InjectRepository(Timetable)
    private timeTableRepository: Repository<Timetable>,
    @InjectRepository(ClassRoom)
    private classRoomRepository: Repository<ClassRoom>,
  ) {}

  async onModuleInit() {
    await this.seed();
  }

  async seed() {
    // Seed Admin
    const admin = this.adminRepository.create({
        name: 'John Doe',
        email: 'jhon@',
        password:'jhon@'
    });
      
    await this.adminRepository.save(admin);

    // Seed Grade (e.g., Grade 1)
    const grade = this.gradeRepository.create({
      gradeLevel: 'Grade 1',
    });
      
    await this.gradeRepository.save(grade);

    // Seed Classroom
    const classRoom = this.classRoomRepository.create({
      roomNumber: 101,
      capacity: 30,
      location: 'Building A',
    });
    await this.classRoomRepository.save(classRoom);

    // Seed Teacher
    const teacher = this.teacherRepository.create({
        name: 'Jane Smith',
         email: 'jhon@',
        password:'jhon@',
      qualifications: 'MSc in Computer Science',
      specialization: 'Programming',
      hireDate: new Date(),
      salary: 60000,
    });
    await this.teacherRepository.save(teacher);

    // Seed Course linked to Teacher
    const course = this.courseRepository.create({
      courseDescription: 'Introduction to Programming',
      duration: '2 hours',
      credits: 3,
      teachers: teacher, // Establishes relationship between course and teacher
    });
    await this.courseRepository.save(course);

    // Seed Timetable linked to Teacher
    const timetable = this.timeTableRepository.create({
      dayOfWeek: new Date(),
      startTime: '08:00',
      endTime: '10:00',
      teacher: teacher, // Establishes relationship between timetable and teacher
    });
    await this.timeTableRepository.save(timetable);

    // Seed Student linked to Grade and Classroom
    const student = this.studentRepository.create({
        name: 'Alice Johnson',
         email: 'jhon@',
        password:'jhon@',
      dateOfBirth: new Date('2010-05-15'),
      address: '123 Main St',
      enrollmentDate: new Date(),
      guardianName: 'Sarah Johnson',
      guardianContact: '555-1234',
      grade: grade, // Establishes relationship with Grade
      classRoom: classRoom, // Establishes relationship with Classroom
    });
    await this.studentRepository.save(student);
  }
}
