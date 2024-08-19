import {
  Entity,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Course } from './courseEntity';
import { Timetable } from './timeTableEntity';
import { User } from './userEntity';

@Entity('teachers')
export class Teacher extends User {
  @PrimaryGeneratedColumn()
  teacherId: number;

  @Column({ type: 'varchar', length: 255 })
  qualifications: string;

  @Column({ type: 'varchar', length: 100 })
  specialization: string;

  @Column({ type: 'date' })
  hireDate: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  salary: number;

  @OneToMany(() => Course, (course) => course.teachers)
  courses: Course[];

  @OneToOne(() => Timetable, (timetable) => timetable.teacher)
  @JoinColumn()
  timetable: Timetable;
}
