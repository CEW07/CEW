import connection from "./dbconnect";
// const id = 101
const sqlQuery = "CALL fetchProductDetails(?)";
let col = [];
export default function fetchProductDetails(req, res) {
  const { id } = req.query;
  connection.query(sqlQuery, [id], (error, results) => {
    if (error) {
      console.error("Error calling stored procedure:", error);
      return;
    }
    if (!col.includes(id)) {
      if (col.length < 5) {
        col.push(id);
      } else {
        col.shift();
        col.push(id);
      }
    }

    console.log(results[0][0].product_pressure);
    res.status(200).json([results[0], col]);
  });
}
