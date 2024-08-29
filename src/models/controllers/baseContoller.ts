import {
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { BaseEntity } from '../users/entities/baseEntity';

export abstract class BaseCrudController<T extends BaseEntity> {
  constructor(private readonly repository: Repository<T>) {}

  @Post()
  @ApiOperation({ summary: 'Create entity' })
  @ApiResponse({ status: 201, description: 'Entity created successfully' })
  async create(@Body() createDto: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  @Get()
  @ApiOperation({ summary: 'Get all entities' })
  @ApiResponse({ status: 200, description: 'Entities retrieved successfully' })
  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update entity by ID' })
  @ApiResponse({ status: 200, description: 'Entity updated successfully' })
  async update(
    @Param('id') id: number,
    @Body() updateDto: QueryDeepPartialEntity<T>,
  ): Promise<T> {
    await this.repository.update(id, updateDto);
    return this.repository.findOneBy({ id } as any);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete entity by ID' })
  @ApiResponse({ status: 200, description: 'Entity deleted successfully' })
  async delete(@Param('id') id: number): Promise<T> {
    const entity = await this.repository.findOneBy({ id } as any);
    if (!entity) {
      throw new NotFoundException(`Entity with id ${id} not found`);
    }
    await this.repository.remove(entity);
    return entity;
  }
}
