import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableMember1619372634460 implements MigrationInterface {
  name = 'CreateTableMember1619372634460';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tb_member" ("id" character varying NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "email" character varying NOT NULL, "login" character varying NOT NULL, "linkedin" character varying, "gitHub" character varying, "lattes" character varying, "quoteName" character varying, "description" text, "avatar" character varying, "password" character varying NOT NULL, "patentId" character varying NOT NULL, CONSTRAINT "UQ_ca6a020b5a8d64866c562a66405" UNIQUE ("email"), CONSTRAINT "UQ_c89fa239944392fb11eb023c879" UNIQUE ("login"), CONSTRAINT "UQ_fb706139d4ca534aae71e20c3fc" UNIQUE ("linkedin"), CONSTRAINT "UQ_a27c284b94e9f2e15239575fb32" UNIQUE ("gitHub"), CONSTRAINT "UQ_a02e921d1cdc5f84c45d24fecde" UNIQUE ("lattes"), CONSTRAINT "UQ_ee566090760783363806f504d38" UNIQUE ("quoteName"), CONSTRAINT "UQ_bd64f08459271e5413bd40044c1" UNIQUE ("avatar"), CONSTRAINT "PK_3626e5e1012b79c4a520e734590" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_member" ADD CONSTRAINT "FK_5ea9c8b39572f2bfeb6c5cd8294" FOREIGN KEY ("patentId") REFERENCES "tb_office_member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tb_member" DROP CONSTRAINT "FK_5ea9c8b39572f2bfeb6c5cd8294"`,
    );
    await queryRunner.query(`DROP TABLE "tb_member"`);
  }
}
