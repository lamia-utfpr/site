import BasicEntity from '@modules/BasicEntity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany } from 'typeorm';
import { EntityMember } from './member.entity';

@Entity('tb_patent')
export class EntityPatent extends BasicEntity {
  @ApiProperty({
    description: "Patent's name",
    example: 'Novato',
  })
  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  name: string;

  @ApiProperty({
    nullable: true,
    description: "Patent's description",
    example: 'Os novatos são os alunos que acabaram de iniciar no laboratório',
  })
  @Column({
    nullable: true,
    type: 'text',
  })
  description: string;

  @OneToMany(() => EntityMember, (member) => member.patent)
  members: EntityMember[];
}
