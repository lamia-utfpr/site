import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNotEmpty } from 'class-validator';

export class IParamsIdDTO {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "Member's id",
    example: 'dc3337c4-c5ed-49da-888a-f0c05d7d75e7',
  })
  id: string;
}
