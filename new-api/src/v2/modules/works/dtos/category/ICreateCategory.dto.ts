import { ApiProperty } from '@nestjs/swagger';

import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export default class ICreateCategoryDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({
    description: 'Category name',
    example: 'Latinoware event',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({
    description: 'Description of category',
    example: 'Latinoware event at 2020, where I study Linux!',
  })
  description: string;
}
