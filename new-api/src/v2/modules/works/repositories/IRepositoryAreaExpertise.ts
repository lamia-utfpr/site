import ICreateAreaExpertiseDTO from '../dtos/areaExpertise/ICreateAreaExpertise.dto';

import IOrderAreaExpertiseDTO from '../dtos/areaExpertise/IOrderAreaExpertise.dto';

import { EntityAreaExpertise } from '../typeorm/entities/areaExpertise.entity';

export default interface IRepositoryAreaExpertise {
  findByName(name: string): Promise<EntityAreaExpertise | undefined>;

  findAll(
    order?: IOrderAreaExpertiseDTO,
  ): Promise<EntityAreaExpertise[] | undefined>;

  createSave(
    data: ICreateAreaExpertiseDTO,
  ): Promise<EntityAreaExpertise | undefined>;
}
