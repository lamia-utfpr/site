import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { RepositoryCategory } from '../typeorm/repositories/category.repository';

import IRepositoryCategory from '../repositories/IRepositoryCategory';

import ICreateCategoryDTO from '../dtos/category/ICreateCategory.dto';

import { EntityCategory } from '../typeorm/entities/category.entity';

import { create, findAll } from './category';

import IOrderCategoryDTO, {
  ISelectOrderCategoryDTO,
} from '../dtos/category/IOrderCategory.dto';

@Injectable()
export class ServiceCategory {
  constructor(
    @InjectRepository(RepositoryCategory)
    private readonly exampleRepository: IRepositoryCategory,
  ) {}

  public async createCategory(
    data: ICreateCategoryDTO,
  ): Promise<EntityCategory> {
    return create({
      data: data,
      repository: this.exampleRepository,
    });
  }

  public async findAll({
    attribute,
    direction,
  }: ISelectOrderCategoryDTO): Promise<EntityCategory[]> {
    const order: IOrderCategoryDTO = {
      [attribute || 'name']: direction || 'ASC',
    };

    return findAll({ repository: this.exampleRepository, order });
  }
}
