import { Provider } from '@nestjs/common';
import BCryptHashProvider from './implementations/BCryptHashProvider';

export default {
  provide: 'HashProvider',
  useClass: BCryptHashProvider,
} as Provider;
