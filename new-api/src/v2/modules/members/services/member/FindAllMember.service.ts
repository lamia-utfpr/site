import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import IOrderMember from '../../dtos/IOrderMember.dto';

interface IRequest {
  repository: IRepositoryMember;
  order?: IOrderMember;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityMember[]> => {
  return repository.findAll(order);
};

export default findAll;
