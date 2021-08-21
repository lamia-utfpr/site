import { ApiProperty } from '@nestjs/swagger';

export class Unauthorized {
  @ApiProperty({
    default: 401,
    description: 'HTTP Status Code',
  })
  statusCode: 401;

  @ApiProperty({
    example: 'Unauthorized',
    description: 'Error messages',
  })
  message: string;
}

export default {
  description: 'Unauthorized',
  type: Unauthorized,
};
