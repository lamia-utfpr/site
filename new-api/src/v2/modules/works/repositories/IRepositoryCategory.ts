import ICreateCategoryDTO from '../dtos/category/ICreateCategory.dto';

import IFindCategoryDTO from '../dtos/category/IFindCategory.dto';

import IOrderCategoryDTO from '../dtos/category/IOrderCategory.dto';

import { EntityCategory } from '../typeorm/entities/category.entity';

export default interface IRepositoryCategory {
  createSave(data: ICreateCategoryDTO): Promise<EntityCategory>;
  updateSave(data: EntityCategory): Promise<EntityCategory>;

  findById(id: string): Promise<EntityCategory | undefined>;
  findByName(name: string): Promise<EntityCategory | undefined>;

  findAll(order?: IOrderCategoryDTO): Promise<EntityCategory[] | undefined>;

  findByWhere(
    where: IFindCategoryDTO,
    order?: IOrderCategoryDTO,
  ): Promise<EntityCategory[] | undefined>;

  deleteById(id: string): Promise<void>;
}
