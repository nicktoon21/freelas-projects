import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('company', (table) => {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('mail').notNullable();
        table.string('whatsapp').notNullable();
        table.string('requester').notNullable();
        table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
    });
};


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('company');
};

