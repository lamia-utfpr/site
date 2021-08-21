import ICreatePatentDTO from '@modules/members/dtos/Patent/ICreatePatent.dto';
import IRepositoryPatent from '@modules/members/repositories/IRepositoryPatent';
import { EntityPatent } from '@modules/members/typeorm/entities/patent.entity';
import { ConflictException } from '@nestjs/common';

interface IRequest {
  data: ICreatePatentDTO;
  repository: IRepositoryPatent;
}

const create = async (params: IRequest): Promise<EntityPatent> => {
  const { repository, data } = params;

  const patentExists = await repository.findByName(data.name);

  if (patentExists) {
    throw new ConflictException(['Patent already exists']);
  }

  return repository.createSave(data);
};

export default create;
