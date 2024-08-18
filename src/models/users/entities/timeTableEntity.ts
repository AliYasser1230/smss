import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  Timestamp,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Teacher } from './teacherEntity';
@Entity('timetables')
export class Timetable {
  @PrimaryGeneratedColumn()
  timeTableId: number;
  @Column({ type: 'date' })
  dayOfWeek: Date;

  @Column({ type: 'time' })
  startTime: string;


  @Column({ type: 'time' })
  endTime: string;

  @OneToOne(() => Teacher, (teacher) => teacher.timetable)
  teachers: Teacher[];
}
