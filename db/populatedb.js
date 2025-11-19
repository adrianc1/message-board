#! /usr/bin/env node
const fs = require('fs');
const { Client } = require('pg');

const SQL = fs.readFileSync('db/schema.sql', 'utf8');
async function main() {
	console.log('seeding...');
	const client = new Client({
		connectionString: `postgresql://${process.env.DB_USER}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log('done');
}

main();
