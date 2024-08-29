import { Repository } from 'typeorm';
import { BaseCrudController } from './baseContoller';
import { Body, Controller, Post } from '@nestjs/common';
import { Teacher } from '../users/entities/teacherEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TeacherDto } from '../dto/teacherDto';

@ApiTags('teachers')
@Controller('teachers')
export class TeacherController extends BaseCrudController<Teacher> {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ) {
    super(teacherRepository);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new teacher' })
  @ApiResponse({ status: 201, description: 'Teacher created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async create(@Body() teacherDto: TeacherDto): Promise<Teacher> {
    return super.create(teacherDto);
  }
}

