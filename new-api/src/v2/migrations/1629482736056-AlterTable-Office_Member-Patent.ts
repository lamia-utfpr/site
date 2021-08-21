import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AlterTableOfficeMemberPatent1629482736056
  implements MigrationInterface {
  name = 'AlterTableOfficeMemberPatent1629482736056';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE tb_office_member RENAME TO tb_patent;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE tb_patent RENAME TO tb_office_member;`,
    );
  }
}
