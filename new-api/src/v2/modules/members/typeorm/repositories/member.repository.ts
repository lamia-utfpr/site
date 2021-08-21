import { EntityRepository, getRepository, Repository, Like } from 'typeorm';
import ICreateMemberDTO from '../../dtos/ICreateMember.dto';
import IOrderMember from '../../dtos/IOrderMember.dto';
import IRepositoryMember from '../../repositories/IRepositoryMember';
import { EntityMember } from '../entities/member.entity';

@EntityRepository(EntityMember)
export class RepositoryMember
  extends Repository<RepositoryMember>
  implements IRepositoryMember {
  private ormRepository: Repository<EntityMember>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityMember);
  }

  public async createSave(data: ICreateMemberDTO): Promise<EntityMember> {
    const member = this.ormRepository.create(data);

    return this.ormRepository.save(member);
  }

  public async updateSave(data: EntityMember): Promise<EntityMember> {
    await this.ormRepository.save(data);
    return this.findById(data.id);
  }

  public async findById(id: string): Promise<EntityMember | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async findByEmail(email: string): Promise<EntityMember | undefined> {
    return this.ormRepository.findOne({ where: { email } });
  }

  public async findByLogin(login: string): Promise<EntityMember | undefined> {
    return this.ormRepository.findOne({ where: { login } });
  }

  public async findByLikeName(
    name: string,
    order?: IOrderMember,
  ): Promise<EntityMember[] | undefined> {
    return this.ormRepository.find({
      where: { name: Like(`%${name}%`) },
      order,
    });
  }

  public async findAll(
    order?: IOrderMember,
  ): Promise<EntityMember[] | undefined> {
    return this.ormRepository.find({ order });
  }

  public async countLogin(login: string): Promise<[EntityMember[], number]> {
    return this.ormRepository.findAndCount({
      where: { login: Like(`${login}%`) },
    });
  }

  public async removeById(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
