import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class ILoginDTO {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "Member's email",
    example: 'john_doe@lamia.sh.utfpr.edu.br',
  })
  username: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "Member's password",
    example: 'my secret super password',
  })
  password: string;
}
