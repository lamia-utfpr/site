import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryAreaExpertise } from '../typeorm/repositories/areaExpertise.repository';
import IRepositoryAreaExpertise from '../repositories/IRepositoryAreaExpertise';
import ICreateAreaExpertiseDTO from '../dtos/areaExpertise/ICreateAreaExpertise.dto';
import { EntityAreaExpertise } from '../typeorm/entities/areaExpertise.entity';

// Service
import { create, findAll } from './areaExpertise';

// Order
import IOrderAreaExpertiseDTO, {
  ISelectOrderAreaExpertiseDTO,
} from '../dtos/areaExpertise/IOrderAreaExpertise.dto';

@Injectable()
export class ServiceAreaExpertise {
  constructor(
    @InjectRepository(RepositoryAreaExpertise)
    private readonly repositoryAreaExpertise: IRepositoryAreaExpertise,
  ) {}

  public async createAreaExpertise(
    data: ICreateAreaExpertiseDTO,
  ): Promise<EntityAreaExpertise> {
    return create({
      data: data,
      repository: this.repositoryAreaExpertise,
    });
  }

  public async findAll({
    attribute,
    direction,
  }: ISelectOrderAreaExpertiseDTO): Promise<EntityAreaExpertise[]> {
    const order: IOrderAreaExpertiseDTO = {
      [attribute || 'name']: direction || 'ASC',
    };

    return findAll({ repository: this.repositoryAreaExpertise, order });
  }
}
