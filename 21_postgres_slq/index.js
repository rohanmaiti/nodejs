const { Client } = require("pg");
const client = new Client({
  connectionString:
    "postgresql://neondb_owner:npg_qk8YzKA5hjpc@ep-lingering-salad-a8mqiji0-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require",
});

async function createTable() {
  await client.connect();
  const result = await client.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        )
    `);
  console.log(result);
  await client.end();
}
// createTable();

async function insertData({ username, email, password }) {
  await client.connect();
  const insertQuery = `
  INSERT INTO users (username, email, password) VALUES ($1, $2, $3)
  `;
  const res = await client.query(insertQuery, [username, email, password]);
  console.log("Insertion success:", res);
}
// insertData({ username: "rohanmaiti", email: "rohanmaiti69@gmail.com", password: "123456" });
