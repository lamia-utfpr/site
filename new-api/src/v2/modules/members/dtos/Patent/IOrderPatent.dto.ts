import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EntityPatent } from '../../typeorm/entities/patent.entity';

type IDirection = 'ASC' | 'DESC';
type IAttributes = 'name' | 'createAt';

type IOrderPatentDTO = {
  [K in keyof EntityPatent]?: IDirection;
};

const AttributesOrderPatentEum = ['name', 'createAt'];
const DirectionsOrderPatentEum = ['ASC', 'DESC'];

export class ISelectOrderPatentDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(AttributesOrderPatentEum)
  @ApiProperty({
    type: String,
    required: false,
    description: 'Attribute that will be ordered',
    enum: AttributesOrderPatentEum,
    default: 'name',
  })
  attribute?: IAttributes;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(DirectionsOrderPatentEum)
  @ApiProperty({
    type: String,
    required: false,
    description:
      'Direction of the listing, whether it is increasing or decreasing',
    enum: DirectionsOrderPatentEum,
    default: 'ASC',
  })
  direction?: IDirection;
}

export default IOrderPatentDTO;
