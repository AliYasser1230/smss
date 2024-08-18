import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Teacher } from './teacherEntity';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  courseId: number;

  @Column({ type: 'varchar' })
  courseDescription: String;

  @Column({ type: 'varchar' })
  duration: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.courses)
  teachers: Teacher;

  @Column({ type: 'integer' })
  credits: number;
}
