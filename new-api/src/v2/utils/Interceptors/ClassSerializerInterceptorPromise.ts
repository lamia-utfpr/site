/* eslint-disable @typescript-eslint/ban-types */
import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
  Optional,
} from '@nestjs/common';
import { classToPlain, ClassTransformOptions } from 'class-transformer';
import { isDate, isObject } from 'class-validator';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isPromise } from '../validationsType';

const CLASS_SERIALIZER_OPTIONS = 'class_serializer:options';

export interface PlainLiteralObject {
  [key: string]: any;
}

const REFLECTOR = 'Reflector';

@Injectable()
export class ClassSerializerInterceptorPromise implements NestInterceptor {
  constructor(
    @Inject(REFLECTOR) protected readonly reflector: any,
    @Optional() protected readonly defaultOptions: ClassTransformOptions = {},
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const contextOptions = this.getContextOptions(context);
    const options = {
      ...this.defaultOptions,
      ...contextOptions,
    };
    return next
      .handle()
      .pipe(
        map((res: PlainLiteralObject | Array<PlainLiteralObject>) =>
          this.serialize(res, options),
        ),
      );
  }

  async serialize(
    response: PlainLiteralObject | Array<PlainLiteralObject>,
    options: ClassTransformOptions,
  ): Promise<PlainLiteralObject | PlainLiteralObject[]> {
    const isArray = Array.isArray(response);
    if (!isObject(response) && !isArray) {
      return response;
    }
    const responseSerialized = isArray
      ? (response as PlainLiteralObject[]).map((item) =>
          this.transformToPlain(item, options),
        )
      : this.transformToPlain(response, options);

    return this.serializePromise(responseSerialized);
  }

  transformToPlain(
    plainOrClass: any,
    options: ClassTransformOptions,
  ): PlainLiteralObject {
    return plainOrClass ? classToPlain(plainOrClass, options) : plainOrClass;
  }

  async serializePromise(
    response: PlainLiteralObject | Array<PlainLiteralObject>,
  ): Promise<PlainLiteralObject | PlainLiteralObject[]> {
    const isArray = Array.isArray(response);

    if (isArray) {
      return Promise.all(
        (response as PlainLiteralObject[]).map(
          async (item) => await this.serializePromise(item),
        ),
      );
    }

    const pairs = await Promise.all(
      Object.entries(response).map(async ([key, v]) => {
        let value = isPromise(v) ? await v : v;

        if ((isObject(value) && !isDate(value)) || Array.isArray(value)) {
          value = await this.serializePromise(value);
        }

        return [key, value];
      }),
    );

    return Object.fromEntries(pairs);
  }

  protected getContextOptions(
    context: ExecutionContext,
  ): ClassTransformOptions | undefined {
    return (
      this.reflectSerializeMetadata(context.getHandler()) ||
      this.reflectSerializeMetadata(context.getClass())
    );
  }

  private reflectSerializeMetadata(
    obj: object | Function,
  ): ClassTransformOptions | undefined {
    return this.reflector.get(CLASS_SERIALIZER_OPTIONS, obj);
  }
}
