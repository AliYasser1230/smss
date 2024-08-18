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

  @Column({ type: 'integer' })
  roomNumber: number;

  @Column({ type: 'integer' })
  capacity: number;

  @Column({ type: 'varchar' })
  location: string;

  @OneToMany(() => Student, (student) => student.classRooms)
  students: Student[];
}
