import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ICreateMemberBasicDataDTO } from '../dtos/ICreateMember.dto';
import IOrderMember, { ISelectOrderMemberDTO } from '../dtos/IOrderMember.dto';
import { IUpdateAvatarMemberDTO } from '../dtos/IUpdateAvatarMember.dto';
import { IUpdateMemberDTO } from '../dtos/IUpdateMember.dto';
import IRepositoryMember from '../repositories/IRepositoryMember';
import IRepositoryPatent from '../repositories/IRepositoryPatent';
import { EntityMember } from '../typeorm/entities/member.entity';
import { RepositoryMember } from '../typeorm/repositories/member.repository';
import { RepositoryPatent } from '../typeorm/repositories/patent.repository';
import * as memberServices from './member';

@Injectable()
export class ServiceMember {
  constructor(
    @InjectRepository(RepositoryMember)
    private readonly memberRepository: IRepositoryMember,

    @InjectRepository(RepositoryPatent)
    private readonly patentRepository: IRepositoryPatent,

    @Inject('HashProvider')
    private readonly hashProvider: IHashProvider,

    @Inject('StorageProvider')
    private readonly storageProvider: IStorageProvider,
  ) {}

  public async createMember(
    data: ICreateMemberBasicDataDTO,
  ): Promise<EntityMember> {
    return memberServices.create({
      data: data,
      repositoryMember: this.memberRepository,
      repositoryPatent: this.patentRepository,
      hashProvider: this.hashProvider,
    });
  }

  public async updateMember({
    idMember,
    newMemberData,
  }: IUpdateMemberDTO): Promise<EntityMember> {
    const member = await memberServices.update({
      newMemberData: {
        ...newMemberData,
        id: idMember,
      },
      repository: this.memberRepository,
      hashProvider: this.hashProvider,
    });

    return member;
  }

  public async updateAvatarMember({
    idMember,
    fileName,
  }: IUpdateAvatarMemberDTO): Promise<EntityMember> {
    return memberServices.updateAvatar({
      repository: this.memberRepository,
      id: idMember,
      fileName,
      storageProvider: this.storageProvider,
    });
  }

  public async findAll({
    attribute,
    direction,
  }: ISelectOrderMemberDTO): Promise<EntityMember[]> {
    const order: IOrderMember = {
      [attribute || 'name']: direction || 'ASC',
    };

    return memberServices.findAll({
      repository: this.memberRepository,
      order,
    });
  }

  public async findByLogin(login: string): Promise<EntityMember> {
    return memberServices.FindByLogin({
      repository: this.memberRepository,
      login,
    });
  }

  public async removeById(id: string): Promise<void> {
    await memberServices.remove({ repository: this.memberRepository, id });
  }
}
