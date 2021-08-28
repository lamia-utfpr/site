// Interface
import IRepositoryAreaExpertise from '@modules/works/repositories/IRepositoryAreaExpertise';

// Entidade
import { EntityAreaExpertise } from '@modules/works/typeorm/entities/areaExpertise.entity';

// DTO
import ICreateAreaExpertiseDTO from '@modules/works/dtos/areaExpertise/ICreateAreaExpertise.dto';
import IOrderOfficeMemberDTO from '@modules/members/dtos/IOrderOfficeMember.dto';

export class FakeRepositoryAreaExpertise implements IRepositoryAreaExpertise {
  private areasExpertise: EntityAreaExpertise[];

  constructor() {
    this.areasExpertise = [];
  }

  public async createSave(
    data: ICreateAreaExpertiseDTO,
  ): Promise<EntityAreaExpertise | undefined> {
    const areaExpertise = new EntityAreaExpertise(data);

    this.areasExpertise.push(areaExpertise);

    return areaExpertise;
  }

  // Método para retornar todos os dados, em forma de um array
  public async findAll(
    order?: IOrderOfficeMemberDTO,
  ): Promise<EntityAreaExpertise[] | undefined> {
    return this.areasExpertise;
  }

  // Retorna somente um
  public async findByName(
    name: string,
  ): Promise<EntityAreaExpertise | undefined> {
    const areaExpertise = this.areasExpertise.find(
      (area) => area.name === name,
    );

    return areaExpertise;
  }
}
