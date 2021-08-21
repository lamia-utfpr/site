import IRepositoryPatent from '@modules/members/repositories/IRepositoryPatent';
import { EntityPatent } from '@modules/members/typeorm/entities/patent.entity';
import IOrderPatentDTO from '../../dtos/Patent/IOrderPatent.dto';

interface IRequest {
  repository: IRepositoryPatent;
  order?: IOrderPatentDTO;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityPatent[]> => {
  return repository.findAll(order);
};

export default findAll;
