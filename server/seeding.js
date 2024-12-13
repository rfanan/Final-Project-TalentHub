const pool = require("./connection");
const data = require("./data.json");

let newData = data.map((el) => {
  return `('${el.imageUrl}', '${el.nameFood}', '${el.deskrip}', '${el.price}', '${el.rate}')`;
});

let newDataToInsert = newData.join(",");

let seedDataQuery = `
  INSERT INTO Food ("imageUrl", "nameFood", "deskrip", "price","rate")
  VALUES ${newDataToInsert}
`;

async function runSeed() {
  try {
    await pool.query(seedDataQuery);
    console.log("Success seed table Food");
  } catch (error) {
    console.log(error);
  }
}

runSeed();
