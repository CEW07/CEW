import connection from "./dbconnect";
import { promisify } from "util";

const queryPromise = promisify(connection.query).bind(connection);

export default async function fetchMainCategory(req, res) {
  const { id, data } = req.query;

  if (data === "search") {
    if (!id) {
      return res.status(400).json({ error: "Search text is required" });
    }
    try {
      const searchPattern = `%${id}%`; // Add wildcards to search for partial matches

      const searchProductQuery =
        "SELECT product_name FROM mainproduct WHERE product_name LIKE ? LIMIT 10";
      const searchProductResult = await queryPromise(searchProductQuery, [searchPattern]);

      if (searchProductResult.length === 0) {
        return res.status(200).json({ message: "No matching sub product found" });
      }

      res.status(200).json(searchProductResult);
    } catch (err) {
      console.error("Error executing query", err);
      res.status(500).json({ error: "Error fetching data", err });
    }
  } else {
    res.status(400).json({ error: "Invalid data parameter" });
  }


  try {
    const mainProduct = await queryPromise("SELECT * FROM mainproduct");
    res.status(200).json(mainProduct);
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Error fetching data" });
  }
 
}
