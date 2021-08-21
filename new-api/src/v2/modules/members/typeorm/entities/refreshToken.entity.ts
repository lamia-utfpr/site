import BasicEntity from '@modules/BasicEntity';
import { Column, Entity } from 'typeorm';

@Entity('tb_refresh_token')
export class EntityRefreshToken extends BasicEntity {
  @Column({
    type: 'varchar',
    length: 255,
  })
  hash: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  login: string;

  @Column({
    type: Boolean,
    default: true,
  })
  status: boolean;
}
