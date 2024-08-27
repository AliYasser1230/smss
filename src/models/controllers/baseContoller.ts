import {
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { BaseEntity } from '../users/entities/baseEntity';
import { Equal } from 'typeorm';

@ApiTags('base')
export abstract class BaseCrudController<T extends BaseEntity> {
  constructor(private readonly repository: Repository<T>) {}

  async create(@Body() createDto: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  @Get()
  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDto: QueryDeepPartialEntity<T>,
  ): Promise<T> {
    await this.repository.update(id, updateDto);
    return this.repository.findOneBy({ id } as FindOptionsWhere<T>);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<T> {
    const entity = await this.repository.findOneBy({
      id,
    } as FindOptionsWhere<T>);
    if (!entity) {
      throw new NotFoundException(`Entity with id ${id} not found`);
    }
    await this.repository.remove(entity);
    return entity;
  }
}
