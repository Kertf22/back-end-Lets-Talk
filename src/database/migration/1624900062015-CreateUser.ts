import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1624900062015 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"users",
                columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"email",
                        type:"varchar"
                    },
                    {
                        name:"password",
                        type:"varchar"
                    },
                    {
                        name:"admin",
                        type:"boolean",
                        default: false
                    },
                    {
                        name:"created_at",
                        type:"Date",
                        default:"now()"
                    },
                    {
                        name:"updated_at",
                        type:"Date",
                        default:"now()"
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("users")
    }

}
