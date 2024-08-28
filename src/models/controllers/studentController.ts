import { DeepPartial, Repository } from 'typeorm';
import { Student } from '../users/entities/studentEntity';
import { BaseCrudController } from './baseContoller';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentDto } from '../dto/studentDto';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { Controller, Post, Get, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';

@ApiTags('students')
@Controller('students')
export class StudentController extends BaseCrudController<Student> {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {
    super(studentRepository);
  }
  @Post()
  @ApiOperation({ summary: 'Create a new student' })
  @ApiResponse({
    status: 201,
    description: 'The student has been successfully created.',
    type: StudentDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async create(@Body() createDto: StudentDto): Promise<Student> {
    const student = this.studentRepository.create(createDto);
    return this.studentRepository.save(student);
    }
    

    
}
