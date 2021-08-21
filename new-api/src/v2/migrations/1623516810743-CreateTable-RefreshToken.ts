import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableRefreshToken1623516810743
  implements MigrationInterface {
  name = 'CreateTableRefreshToken1623516810743';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tb_refresh_token" ("id" character varying NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "hash" character varying(255) NOT NULL, "login" character varying(100) NOT NULL, "status" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_c189aff1620edadedae9af15778" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tb_refresh_token"`);
  }
}
