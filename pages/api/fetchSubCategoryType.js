import connection from "./dbconnect";
import { promisify } from "util";

const queryPromise = promisify(connection.query).bind(connection);

export default async function fetchMainCategory(req, res) {
  const { id } = req.query; // Extract id from query parameters

  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  try {
    const subProductQuery = "SELECT * FROM subproduct WHERE product_type_name_id = ?";
    const subProduct = await queryPromise(subProductQuery, [id]);

    if (subProduct.length === 0) {
      return res.status(404).json({ error: "Subproduct not found" });
    }
    const subProductWithImage = subProduct.map((product) => ({
      ...product,
      images: product.thumbnailImage
        ? Buffer.from(product.thumbnailImage, "binary").toString("base64")
        : null,
    }));
    res.status(200).json(subProductWithImage);
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Error fetching data", err });
  }
}
