import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './userEntity';

@Entity('admins')
export class Admin extends User{
  @PrimaryGeneratedColumn()
  adminId: number;
  
}
