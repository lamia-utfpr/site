import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ICreatePatentDTO from '../dtos/Patent/ICreatePatent.dto';
import IOrderPatentDTO, {
  ISelectOrderPatentDTO,
} from '../dtos/Patent/IOrderPatent.dto';
import IRepositoryPatent from '../repositories/IRepositoryPatent';
import { EntityPatent } from '../typeorm/entities/patent.entity';
import { RepositoryPatent } from '../typeorm/repositories/patent.repository';
import { create, findAll } from './patent';

@Injectable()
export class ServicePatent {
  constructor(
    @InjectRepository(RepositoryPatent)
    private readonly patentRepository: IRepositoryPatent,
  ) {}

  public async createPatent(data: ICreatePatentDTO): Promise<EntityPatent> {
    return create({
      data: data,
      repository: this.patentRepository,
    });
  }

  public async findAll({
    attribute,
    direction,
  }: ISelectOrderPatentDTO): Promise<EntityPatent[]> {
    const order: IOrderPatentDTO = {
      [attribute || 'name']: direction || 'ASC',
    };

    return findAll({ repository: this.patentRepository, order });
  }
}
