import connection from "./dbconnect";
import { promisify } from "util";

const queryPromise = promisify(connection.query).bind(connection);

export default async function fetchMainCategory(req, res) {
  try {
    const subProductQuery = "SELECT * FROM subproduct";
    const subProduct = await queryPromise(subProductQuery);

    if (subProduct.length === 0) {
      return res.status(404).json({ error: "Subproduct not found" });
    }

    res.status(200).json(subProduct);
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Error fetching data", err });
  }
}
