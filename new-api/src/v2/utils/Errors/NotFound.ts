import { ApiProperty } from '@nestjs/swagger';

export class NotFound {
  @ApiProperty({
    default: 404,
    description: 'HTTP Status Code',
  })
  statusCode: 404;

  @ApiProperty({
    example: ['not found'],
    description: 'Error messages',
    isArray: true,
  })
  message: string;

  @ApiProperty({
    default: 'NotFound',
    description: 'Not found',
  })
  error: 'NotFound';
}

export default {
  description: "Not found - Don't exists data",
  type: NotFound,
};
