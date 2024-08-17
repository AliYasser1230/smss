import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { Teacher } from './teacherEntity';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  courseId: number;

  @Column({ type: 'varchar' })
  courseDescription: String;

  @Column({ type: 'time' })
  duration: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.courses)
  teacher: Teacher;

  @Column({ type: 'number' })
  credits: number;
}
