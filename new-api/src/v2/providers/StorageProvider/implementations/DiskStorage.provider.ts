import uploadConfig from '@config/upload';
import { InternalServerErrorException } from '@nestjs/common';
import * as fs from 'fs';
import { resolve } from 'path';
import ILocationFileDTO from '../dtos/ILocationFile.dto';
import IStorageProvider from '../models/IStorageProvider';

export default class DiskStorageProvider implements IStorageProvider {
  public async saveFile({
    fileName,
    targetFolder,
    subFolders = [],
  }: ILocationFileDTO): Promise<string> {
    const currentPath = resolve(uploadConfig.tmpFolder, fileName);
    const newPath = resolve(
      uploadConfig.uploadsFolder,
      targetFolder,
      ...subFolders,
    );
    try {
      if (!fs.existsSync(newPath)) {
        await fs.promises.mkdir(newPath, { recursive: true });
      }
      await fs.promises.rename(currentPath, resolve(newPath, fileName));
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }

    return fileName;
  }

  public async deleteFile({
    fileName,
    targetFolder,
    subFolders = [],
  }: ILocationFileDTO): Promise<void> {
    const filePath = resolve(
      uploadConfig.uploadsFolder,
      targetFolder,
      ...subFolders,
      fileName,
    );
    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }

  public async getUrl({
    fileName,
    targetFolder,
    subFolders = [],
  }: ILocationFileDTO): Promise<string> {
    const pathFile = targetFolder + '/' + subFolders.join('/') + fileName;

    return `${uploadConfig.url}${encodeURI(pathFile)}`;
  }
}
