const { Pool } = require("pg");

const pool = new Pool({
  host: "aws-0-ap-southeast-1.pooler.supabase.com",
  user: "postgres.wmxvpbguvcqakfncazab",
  database: "postgres",
  password: "!Kirishima05",
  port: "6543",
  max: 20,
  idleTimeoutMillis: 2000,
  connectionTimeoutMillis: 2000,
});
postgresql: module.exports = pool;
