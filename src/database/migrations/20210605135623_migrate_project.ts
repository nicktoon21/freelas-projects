import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('project', (table) => {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();

        table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
        
        table.string('company_id').notNullable();

        table.foreign('company_id').references('id').inTable('company');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('project');
}

