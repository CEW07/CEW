import connection from "./dbconnect";
import { promisify } from "util";

const queryPromise = promisify(connection.query).bind(connection);

export default async function fetchMainCategory(req, res) {
  const { id } = req.query; // Extract id from query parameters

  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  try {
    const subProductDetailsQuery =
      "SELECT * FROM productdetails WHERE product_sub_types_id = ?";
    const subProductDetails = await queryPromise(subProductDetailsQuery, [id]);

    if (subProductDetails.length === 0) {
      return res.status(404).json({ error: "SubproductDetails not found" });
    }

    res.status(200).json(subProductDetails);
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Error fetching data", err });
  }
}
