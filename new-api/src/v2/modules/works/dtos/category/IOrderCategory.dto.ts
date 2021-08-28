import { ApiProperty } from '@nestjs/swagger';

import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { EntityCategory } from './../../typeorm/entities/category.entity';

type IDirection = 'ASC' | 'DESC';
type IAttributes = 'name' | 'createdAt';

type IOrderCategoryDTO = {
  [K in keyof EntityCategory]?: IDirection;
};

const AttributesOrderCategory = ['name', 'createdAt'];

const DirectionsOrderCategory = ['ASC', 'DESC'];

export class ISelectOrderCategoryDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(AttributesOrderCategory)
  @ApiProperty({
    type: String,
    required: false,
    description: 'Attribute that will be ordered',
    enum: AttributesOrderCategory,
    default: 'name',
  })
  attribute?: IAttributes;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(DirectionsOrderCategory)
  @ApiProperty({
    type: String,
    required: false,
    description:
      'Direction of the listing, whether it is increasing or decreasing',
    enum: DirectionsOrderCategory,
    default: 'ASC',
  })
  direction?: IDirection;
}

export default IOrderCategoryDTO;
