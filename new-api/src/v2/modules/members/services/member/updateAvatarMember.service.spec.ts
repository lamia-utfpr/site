import MembersMock from '@modules/members/mocks/member.mock';
import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import FakeHashProvider from '@providers/HashProvider/implementations/fakes/FakeHashProvider';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import TARGET_FOLDER from '@providers/StorageProvider/enums/targetFolder.enum';
import FakeStorageProvider from '@providers/StorageProvider/implementations/fakes/FakeStorage.provider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ServiceMember } from '../member.service';

jest.mock(
  '@providers/StorageProvider/implementations/fakes/FakeStorage.provider',
);

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;

const FakeStorageProviderMock = FakeStorageProvider as jest.Mock<FakeStorageProvider>;

let fakeHashProvider: IHashProvider;
let fakeStorageProviderMock: jest.Mocked<IStorageProvider>;

let serviceMember: ServiceMember;

describe("Update Member's avatar  - SERVICES", () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();

    fakeHashProvider = new FakeHashProvider();
    fakeStorageProviderMock = new FakeStorageProviderMock() as jest.Mocked<FakeStorageProvider>;

    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      fakeHashProvider,
      fakeStorageProviderMock,
    );
  });

  describe('successful cases', () => {
    it("Should add the member's avatar when member logged in exists and he don't have avatar", async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const fileName = 'avatar_mock.jpg';

      const memberUpdated = await serviceMember.updateAvatarMember({
        fileName,
        idMember: memberLoggedIn.id,
      });

      expect(memberUpdated).toBeInstanceOf(EntityMember);
      expect(memberUpdated.id).toBe(memberLoggedIn.id);
      expect(memberUpdated.avatar).toBe(fileName);

      expect(fakeStorageProviderMock.saveFile).toHaveBeenCalledTimes(1);
      expect(fakeStorageProviderMock.saveFile).toHaveBeenNthCalledWith(1, {
        fileName,
        targetFolder: TARGET_FOLDER.MEMBERS,
      });
      expect(fakeStorageProviderMock.deleteFile).toHaveBeenCalledTimes(0);
    });

    it("Should update the member's avatar when member logged in exists and he already have avatar", async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const oldFileName = 'old_avatar_mock.jpg';

      Object.assign(memberLoggedIn, {
        avatar: oldFileName,
      });

      await fakeRepositoryMember.updateSave(memberLoggedIn);

      const fileName = 'avatar_mock.jpg';

      const memberUpdated = await serviceMember.updateAvatarMember({
        fileName,
        idMember: memberLoggedIn.id,
      });

      expect(memberUpdated).toBeInstanceOf(EntityMember);
      expect(memberUpdated.id).toBe(memberLoggedIn.id);
      expect(memberUpdated.avatar).toBe(fileName);

      expect(fakeStorageProviderMock.saveFile).toHaveBeenCalledTimes(1);
      expect(fakeStorageProviderMock.saveFile).toHaveBeenNthCalledWith(1, {
        fileName,
        targetFolder: TARGET_FOLDER.MEMBERS,
      });
      expect(fakeStorageProviderMock.deleteFile).toHaveBeenCalledTimes(1);
      expect(fakeStorageProviderMock.deleteFile).toHaveBeenNthCalledWith(1, {
        fileName: oldFileName,
        targetFolder: TARGET_FOLDER.MEMBERS,
      });
    });
  });

  describe('failure cases', () => {
    it('Should return UNAUTHORIZED when not the member logged in exists', async () => {
      const fileName = 'avatar_mock.jpg';

      let error;
      let memberNoUpdated = undefined;

      try {
        memberNoUpdated = await serviceMember.updateAvatarMember({
          fileName,
          idMember: "id member doesn't exists",
        });
      } catch (err) {
        error = err;
      }

      expect(memberNoUpdated).toBe(undefined);
      expect(error).toBeInstanceOf(UnauthorizedException);
      expect(error.response.message).toStrictEqual([
        `It should be logged in with a valid member`,
      ]);

      expect(fakeStorageProviderMock.deleteFile).toHaveBeenCalledTimes(0);
      expect(fakeStorageProviderMock.saveFile).toHaveBeenCalledTimes(0);
    });
  });
});
