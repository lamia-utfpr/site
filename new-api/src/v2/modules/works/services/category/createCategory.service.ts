import ICreateCategoryDTO from '@modules/works/dtos/category/ICreateCategory.dto';

import IRepositoryCategory from '@modules/works/repositories/IRepositoryCategory';

import { EntityCategory } from '@modules/works/typeorm/entities/category.entity';

import { ConflictException } from '@nestjs/common';

interface IRequest {
  data: ICreateCategoryDTO;
  repository: IRepositoryCategory;
}

const create = async (params: IRequest): Promise<EntityCategory> => {
  const { repository, data } = params;

  const categoryExists = await repository.findByName(data.name);

  if (categoryExists) {
    throw new ConflictException(['Category already exists!']);
  }

  return repository.createSave(data);
};

export default create;
