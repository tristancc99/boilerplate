const pg = require("pg");
const { Client } = pg;

const client = new Client("postgres://localhost/judas");

client.connect();

const sync = async () => {
  const SQL = `
    DROP TABLE IF EXISTS table;
    `;
  return await client.query(SQL);
};

const get = async () => {
  const SQL = `SELECT * FROM table;`;
  const response = await client.query(SQL);
  return response.rows;
};

module.exports = {
  sync,
  get
};
