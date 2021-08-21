import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { UnauthorizedException } from '@nestjs/common';
import TARGET_FOLDER from '@providers/StorageProvider/enums/targetFolder.enum';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';

interface IRequest {
  repository: IRepositoryMember;
  id: string;
  storageProvider: IStorageProvider;
  fileName: string;
}

const updateAvatar = async ({
  repository,
  id,
  storageProvider,
  fileName,
}: IRequest): Promise<EntityMember> => {
  const member = await repository.findById(id);
  const targetFolder = TARGET_FOLDER.MEMBERS;

  if (!member) {
    throw new UnauthorizedException();
  }

  if (member.avatar) {
    await storageProvider.deleteFile({
      fileName: member.avatar,
      targetFolder,
    });
  } else {
    member.avatar = fileName;
    await repository.updateSave({
      ...member,
      avatar: fileName,
    });
  }
  await storageProvider.saveFile({
    fileName,
    targetFolder,
  });

  return member;
};

export default updateAvatar;
