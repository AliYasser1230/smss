import { Repository } from 'typeorm';
import { BaseCrudController } from './baseContoller';
import { Controller } from '@nestjs/common';
import { Teacher } from '../users/entities/teacherEntity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('teachers')
export class TeacherController extends BaseCrudController<Teacher> {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ) {
    super(teacherRepository);
  }
}
