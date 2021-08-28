import IOrderCategoryDTO from '@modules/works/dtos/category/IOrderCategory.dto';

import { EntityCategory } from '@modules/works/typeorm/entities/category.entity';

import IRepositoryCategory from '@modules/works/repositories/IRepositoryCategory';

interface IRequest {
  repository: IRepositoryCategory;
  order?: IOrderCategoryDTO;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityCategory[]> => {
  return repository.findAll(order);
};

export default findAll;
