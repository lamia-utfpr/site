import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { NotFoundException } from '@nestjs/common';

interface IRequest {
  repository: IRepositoryMember;
  login: string;
}

const findByLogin = async ({
  repository,
  login,
}: IRequest): Promise<EntityMember> => {
  const member = await repository.findByLogin(login);

  if (!member) {
    throw new NotFoundException('Not found Member');
  }

  return member;
};

export default findByLogin;
