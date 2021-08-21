import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { NotFoundException } from '@nestjs/common';

interface IRequest {
  repository: IRepositoryMember;
  id: string;
}

const deleteById = async ({ repository, id }: IRequest): Promise<void> => {
  const member = await repository.findById(id);

  if (!member) {
    throw new NotFoundException('Not found Member');
  }

  await repository.removeById(id);
};

export default deleteById;
