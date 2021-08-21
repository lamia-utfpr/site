import uploadConfig from '@config/upload';
import { Provider } from '@nestjs/common';
import DiskStorageProvider from './implementations/DiskStorage.provider';

const providers = {
  disk: DiskStorageProvider,
};

export const storageProvider = new providers[uploadConfig.driver]();

export default {
  provide: 'StorageProvider',
  useClass: providers[uploadConfig.driver],
} as Provider;
