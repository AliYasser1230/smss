import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Student } from './studentEntity';

@Entity('grades')
export class Grade {
  @PrimaryGeneratedColumn()
  gradeId: number;

  @Column({ type: 'varchar', length: 20 })
  gradeLevel: string;

  @OneToMany(() => Student, (student) => student.grade)
  students: Student[];
}
