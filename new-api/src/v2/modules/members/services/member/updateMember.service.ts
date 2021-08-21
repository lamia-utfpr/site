import { IUpdateMemberBasicDataDTO } from '@modules/members/dtos/IUpdateMember.dto';
import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';

interface IUpdateMemberData extends IUpdateMemberBasicDataDTO {
  id: string;
}

interface IRequest {
  repository: IRepositoryMember;
  newMemberData: IUpdateMemberData;
  hashProvider: IHashProvider;
}

const update = async ({
  repository,
  newMemberData,
  hashProvider,
}: IRequest): Promise<EntityMember> => {
  const member = await repository.findById(newMemberData.id);

  if (!member) {
    throw new UnauthorizedException();
  }

  if (
    newMemberData.oldPassword &&
    !(await hashProvider.compareHash(
      newMemberData.oldPassword,
      member.password,
    ))
  ) {
    throw new BadRequestException('Invalid Old password');
  }

  return repository.updateSave({
    ...member,
    ...newMemberData,
    password:
      newMemberData.oldPassword &&
      (await hashProvider.generateHash(newMemberData.newPassword)),
  });
};

export default update;
