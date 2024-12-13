const express = require("express");
const pool = require("./connection");
const cors = require("cors");

const app = express();

const port = 3000;

// nambahin cors/ permission
app.use(cors());

app.get("/", (request, response) => {
  response.send("Conction suksess");
});

app.get("/food", async (request, response) => {
  try {
    const data = await pool.query(`SELECT * FROM Food`);

    let dataFood = data.rows;

    response.json(dataFood);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/Food/:id", async (request, response) => {
  try {
    const data = await pool.query(
      `SELECT * FROM Food WHERE id = ${request.params.id}`
    );

    let dataFood = data.rows[0];

    if (!dataFood) {
      response.status(404).json({ message: "Data Not Found" });
    } else {
      response.json(dataFood);
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
