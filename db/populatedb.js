#! /usr/bin/env node

const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messageboard (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

INSERT INTO messageboard (username, message) 
VALUES
  ('BSizzle', 'heyooo' ),
  ('Odin', 'Today was the best day ever!'),
  ('Damon489', 'My dog just licked my face.');
`;

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
