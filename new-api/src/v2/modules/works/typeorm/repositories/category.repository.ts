import { EntityRepository, getRepository, Repository } from 'typeorm';

import ICreateCategoryDTO from '@modules/works/dtos/category/ICreateCategory.dto';

import IFindCategoryDTO from '@modules/works/dtos/category/IFindCategory.dto';

import IOrderCategoryDTO from '@modules/works/dtos/category/IOrderCategory.dto';

import IRepositoryCategory from '@modules/works/repositories/IRepositoryCategory';

import { EntityCategory } from '../entities/category.entity';

@EntityRepository(EntityCategory)
export class RepositoryCategory
  extends Repository<RepositoryCategory>
  implements IRepositoryCategory {
  private ormRepository: Repository<EntityCategory>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityCategory);
  }

  public async createSave(data: ICreateCategoryDTO): Promise<EntityCategory> {
    const category = this.ormRepository.create(data);

    return this.ormRepository.save(category);
  }

  public async updateSave(data: EntityCategory): Promise<EntityCategory> {
    return this.ormRepository.save(data);
  }

  public async findById(id: string): Promise<EntityCategory> {
    return this.ormRepository.findOne(id);
  }

  public async findByName(name: string): Promise<EntityCategory> {
    return this.ormRepository.findOne({ where: { name } });
  }

  public async findAll(order?: IOrderCategoryDTO): Promise<EntityCategory[]> {
    return this.ormRepository.find({ order });
  }

  public async findByWhere(
    where: IFindCategoryDTO,
    order?: IOrderCategoryDTO,
  ): Promise<EntityCategory[]> {
    return this.ormRepository.find({ order, where });
  }

  public async deleteById(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
