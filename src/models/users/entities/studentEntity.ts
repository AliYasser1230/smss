import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToMany,
} from 'typeorm';
import { ClassRoom } from './classRoomEntity';
@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  studentId: number;

  @Column({ type: 'date' })
  dateOfBirth: Date;

  @Column({ type: 'varchar', length: 150 })
  address: String;
  @ManyToMany(() => ClassRoom, (classroom) => classroom.students)
    classRoom:ClassRoom

  @Column({ type: 'date' })
  enrollmentDate: Date;

  @Column({ type: 'varchar' })
  guardianName: String;
  @Column({ type: 'varchar', length: 15 })
  guardianContact: string;


}
