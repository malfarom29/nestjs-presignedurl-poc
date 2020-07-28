import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAttachment1595881931630 implements MigrationInterface {
    name = 'CreateAttachment1595881931630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "attachment" ("id" SERIAL NOT NULL, "key" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_d2a80c3a8d467f08a750ac4b420" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "attachment"`);
    }

}
