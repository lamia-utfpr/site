import ICreateRefreshToken from '../dtos/ICreateRefreshToken.dto';
import { EntityRefreshToken } from '../typeorm/entities/refreshToken.entity';

export default interface IRepositoryRefreshToken {
  createSave(data: ICreateRefreshToken): Promise<EntityRefreshToken>;
  updateSave(data: EntityRefreshToken): Promise<EntityRefreshToken>;

  findById(id: string): Promise<EntityRefreshToken | undefined>;
  findByHash(hash: string): Promise<EntityRefreshToken | undefined>;
  findByLogin(login: string): Promise<EntityRefreshToken | undefined>;
  findValidByLogin(login: string): Promise<EntityRefreshToken | undefined>;
  findValidByHash(login: string): Promise<EntityRefreshToken | undefined>;
}
