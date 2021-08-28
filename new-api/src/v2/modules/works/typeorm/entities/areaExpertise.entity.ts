import BasicEntity from '@modules/BasicEntity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';

@Entity('tb_area_expertise')
export class EntityAreaExpertise extends BasicEntity {
  // Definindo os parametros do ID
  @ApiProperty({
    description: 'Name of Area Expertise',
    example: 'Ciência de Dados',
  })
  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  name: string;

  // Description

  @ApiProperty({
    description: 'Description of Area Expertise',
    example: 'Ciência de Dados é...',
  })
  @Column({
    nullable: true,
    type: 'varchar',
  })
  description: string;

  constructor(data?: Partial<EntityAreaExpertise>) {
    super();
    Object.assign(this, data);
  }
}
