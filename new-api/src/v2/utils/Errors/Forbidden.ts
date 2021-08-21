import { ApiProperty } from '@nestjs/swagger';

export class Forbidden {
  @ApiProperty({
    default: 403,
    description: 'HTTP Status Code',
  })
  statusCode: 403;

  @ApiProperty({
    example: 'Without permission',
    description: 'Error messages',
  })
  message: string;

  @ApiProperty({
    example: 'Forbidden',
    description: 'Type Error',
  })
  error: string;
}

export default {
  description: 'Forbidden',
  type: Forbidden,
};
