import ICreateOfficeMemberDTO from '@modules/members/dtos/ICreateOfficeMember.dto';
import IRepositoryOfficeMember from '@modules/members/repositories/IRepositoryOfficeMember';
import { EntityOfficeMember } from '@modules/members/typeorm/entities/officeMember.entity';
import { ConflictException } from '@nestjs/common';

interface IRequest {
  data: ICreateOfficeMemberDTO;
  repository: IRepositoryOfficeMember;
}

const create = async (params: IRequest): Promise<EntityOfficeMember> => {
  const { repository, data } = params;

  const officeExists = await repository.findByName(data.name);

  if (officeExists) {
    throw new ConflictException(['Office member already exists']);
  }

  return repository.createSave(data);
};

export default create;
