import { EntityRepository, getRepository, Repository } from 'typeorm';
import ICreatePatentDTO from '../../dtos/Patent/ICreatePatent.dto';
import IFindPatentDTO from '../../dtos/Patent/IFindPatent.dto';
import IOrderPatentDTO from '../../dtos/Patent/IOrderPatent.dto';
import IRepositoryPatent from '../../repositories/IRepositoryPatent';
import { EntityPatent } from '../entities/patent.entity';

@EntityRepository(EntityPatent)
export class RepositoryPatent
  extends Repository<RepositoryPatent>
  implements IRepositoryPatent {
  private ormRepository: Repository<EntityPatent>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityPatent);
  }

  public async createSave(data: ICreatePatentDTO): Promise<EntityPatent> {
    const patent = this.ormRepository.create(data);

    return this.ormRepository.save(patent);
  }

  public async updateSave(data: EntityPatent): Promise<EntityPatent> {
    return this.ormRepository.save(data);
  }

  public async findById(id: string): Promise<EntityPatent | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async findByName(name: string): Promise<EntityPatent | undefined> {
    return this.ormRepository.findOne({ where: { name } });
  }

  public async findAll(
    order?: IOrderPatentDTO,
  ): Promise<EntityPatent[] | undefined> {
    return this.ormRepository.find({ order });
  }

  public async findByWhere(
    where: IFindPatentDTO,
    order?: IOrderPatentDTO,
  ): Promise<EntityPatent[] | undefined> {
    return this.ormRepository.find({ order, where });
  }

  public async removeById(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
