import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ClassRoom } from './classRoomEntity';
import { Grade } from './gradeEntity';
import { User } from './userEntity';

@Entity('students')
export class Student extends User {
  @PrimaryGeneratedColumn()
  studentId: number;
  
  @Column({ type: 'date' })
  dateOfBirth: Date;

  @Column({ type: 'varchar', length: 150 })
  address: string;

  @Column({ type: 'date' })
  enrollmentDate: Date;

  @Column({ type: 'varchar' })
  guardianName: string;

  @Column({ type: 'varchar', length: 15 })
  guardianContact: string;

  @ManyToOne(() => ClassRoom, (classroom) => classroom.students)
  classRoom: ClassRoom;

  @ManyToOne(() => Grade, (grade) => grade.students)
  grade: Grade;
}
