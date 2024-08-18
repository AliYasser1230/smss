import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  Column,
  Entity,
} from 'typeorm';
Entity('users');
export abstract class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({type:'varchar'})
    name:string

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
