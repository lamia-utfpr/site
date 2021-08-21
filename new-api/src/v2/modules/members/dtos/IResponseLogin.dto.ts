import { ApiProperty } from '@nestjs/swagger';
import { EntityMember } from '../typeorm/entities/member.entity';

export class IAuthResponse {
  @ApiProperty({
    type: String,
    description: 'API access token',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjM1MDc5MDgsImV4cCI6MTYyMzU5NDMwOH0.ackwo5GtH7nBJRgjes3DfN7SJf5Etl9hkgWSSNg9dYw',
  })
  accessToken: string;
}

export class IResponseLoginDTO {
  @ApiProperty({
    type: IAuthResponse,
    description: "Authentication's data",
  })
  auth: IAuthResponse;

  @ApiProperty({
    type: EntityMember,
    description: "Member's data",
  })
  member: EntityMember;
}
