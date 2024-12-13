// file ini untuk melakukan setup table ke dalam database
const pool = require("./connection");

let createTableFood = `
  CREATE TABLE Food (
  "id" SERIAL PRIMARY KEY, 
  "imageUrl" TEXT, 
  "nameFood" VARCHAR(120),
  "deskrip" VARCHAR(120),
  "price" INTEGER,
  "rate" INTEGER
);
`;

// koneksi ke database => asynchronous

async function runSetup() {
  try {
    await pool.query(createTableFood);
    console.log("Success setup table Food");
  } catch (error) {
    console.log(error);
  }
}

runSetup();
