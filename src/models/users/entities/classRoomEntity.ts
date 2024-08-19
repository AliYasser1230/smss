import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
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

  @OneToMany(() => Student, (student) => student.classRoom)
  students: Student[]; // One Classroom has many Students
}
