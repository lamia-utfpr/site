import { NestFactory } from '@nestjs/core';
import { Swagger } from 'swagger';
import { AppModule } from './app.module';
import * as express from 'express';
import uploadConfig from '@config/upload';
import { apiConfig } from '@config/api';
import { INestApplication } from '@nestjs/common';

const middlewares = (app: INestApplication): void => {
  app.use(apiConfig.pathFileStatic, express.static(uploadConfig.uploadsFolder));
  Swagger(app);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  middlewares(app);

  await app.listen(process.env.PORT_API);
}
bootstrap();
