import ICreateRefreshTokenDTO from '@modules/members/dtos/ICreateRefreshToken.dto';
import IRepositoryRefreshToken from '@modules/members/repositories/IRepositoryRefreshToken';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { EntityRefreshToken } from '../entities/refreshToken.entity';

@EntityRepository(EntityRefreshToken)
export class RepositoryRefreshToken
  extends Repository<IRepositoryRefreshToken>
  implements IRepositoryRefreshToken {
  private ormRepository: Repository<EntityRefreshToken>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityRefreshToken);
  }

  public async createSave(
    data: ICreateRefreshTokenDTO,
  ): Promise<EntityRefreshToken> {
    const refreshToken = this.ormRepository.create(data);

    return this.ormRepository.save(refreshToken);
  }

  public async updateSave(
    data: EntityRefreshToken,
  ): Promise<EntityRefreshToken> {
    return this.ormRepository.save(data);
  }

  public async findById(id: string): Promise<EntityRefreshToken | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async findByLogin(
    login: string,
  ): Promise<EntityRefreshToken | undefined> {
    return this.ormRepository.findOne({ where: { login } });
  }

  public async findByHash(
    hash: string,
  ): Promise<EntityRefreshToken | undefined> {
    return this.ormRepository.findOne({ where: { hash } });
  }

  public async findValidByLogin(
    login: string,
  ): Promise<EntityRefreshToken | undefined> {
    return this.ormRepository.findOne({ where: { login, status: true } });
  }

  public async findValidByHash(
    hash: string,
  ): Promise<EntityRefreshToken | undefined> {
    return this.ormRepository.findOne({ where: { hash, status: true } });
  }
}
