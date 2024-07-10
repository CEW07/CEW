import connection from "./dbconnect";
import { promisify } from "util";

const queryPromise = promisify(connection.query).bind(connection);

export default async function fetchMainCategory(req, res) {
  const { id } = req.query; // Extract id from query parameters

  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  try {
    const sizeChartQuery = "SELECT * FROM productsizechart WHERE product_sub_types_id = ?";
    const sizeChartArray = await queryPromise(sizeChartQuery, [id]);

    if (sizeChartArray.length === 0) {
      return res.status(200).json({ error: "sizeChartArray table doesn't exist for this product", });
    }
    
    res.status(200).json(sizeChartArray);
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Error fetching data", err });
  }
}
