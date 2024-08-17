import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Teacher } from './teacherEntity';
import { Student } from './studentEntity';

@Entity('classrooms')
export class ClassRoom {
  @PrimaryGeneratedColumn()
  classRoomId: number;

  @Column({ type: 'number' })
  roomNumber: number;

  @Column({ type: 'number' })
  capacity: number;

  @Column({ type: 'string' })
  location: string;

  @OneToMany(() => Student, (student) => student.classRoom)
  students: Student[];
}
