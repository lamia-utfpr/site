import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export default class ICreatePatentDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({
    description: "Patent's name",
    example: 'Novato',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    description: "Patent's description",
    example: 'Os novatos são os alunos que acabaram de iniciar no laboratório',
    required: false,
  })
  description?: string;
}
