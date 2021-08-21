import { ICreateMemberBasicDataDTO } from '@modules/members/dtos/ICreateMember.dto';
import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import IRepositoryPatent from '@modules/members/repositories/IRepositoryPatent';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { BadRequestException, ConflictException } from '@nestjs/common';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';

interface IRequest {
  data: ICreateMemberBasicDataDTO;
  repositoryMember: IRepositoryMember;
  repositoryPatent: IRepositoryPatent;
  hashProvider: IHashProvider;
}

const create = async (params: IRequest): Promise<EntityMember> => {
  const { repositoryMember, repositoryPatent, hashProvider, data } = params;

  const emailExists = await repositoryMember.findByEmail(data.email);

  if (emailExists) {
    throw new ConflictException('Email already exists');
  }

  const patent = await repositoryPatent.findById(data.patentId);

  if (!patent) {
    throw new BadRequestException('Patent not found');
  }

  const login = await createLogin(data.email, repositoryMember);
  const password = await hashProvider.generateHash(
    `${process.env.PASSWORD_DEFAULT_MEMBERS}`,
  );

  return repositoryMember.createSave({
    email: data.email,
    name: data.name,
    login,
    password,
    patent,
  });
};

const createLogin = async (
  email: string,
  repositoryMember: IRepositoryMember,
): Promise<string> => {
  const preLogin = email.split('@')[0];
  let login = preLogin;
  const [members, quantity] = await repositoryMember.countLogin(login);

  if (quantity > 0) {
    let existsLogin: EntityMember | undefined;
    let count = quantity;
    do {
      login = `${preLogin}_${count}`;
      existsLogin = members.find((members) => members.login === login);
      count++;
    } while (existsLogin);
  }

  return login;
};

export default create;
