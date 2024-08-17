import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { Course } from './courseEntity';

@Entity('teachers')
export class Teacher extends BaseEntity {
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

    @OneToMany(() => Course, (course) => course.teacher)
    courses: Course[];
}
