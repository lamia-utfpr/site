import ICreatePatentDTO from '../dtos/Patent/ICreatePatent.dto';
import IFindPatentDTO from '../dtos/Patent/IFindPatent.dto';
import IOrderPatentDTO from '../dtos/Patent/IOrderPatent.dto';
import { EntityPatent } from '../typeorm/entities/patent.entity';

export default interface IRepositoryPatent {
  createSave(data: ICreatePatentDTO): Promise<EntityPatent>;
  updateSave(data: EntityPatent): Promise<EntityPatent>;

  findById(id: string): Promise<EntityPatent | undefined>;
  findByName(name: string): Promise<EntityPatent | undefined>;

  findAll(order?: IOrderPatentDTO): Promise<EntityPatent[] | undefined>;
  findByWhere(
    where: IFindPatentDTO,
    order?: IOrderPatentDTO,
  ): Promise<EntityPatent[] | undefined>;

  removeById(id: string): Promise<void>;
}
