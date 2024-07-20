import connection from "./dbconnect";
import { promisify } from "util";

const queryPromise = promisify(connection.query).bind(connection);

export default async function fetchSubCategoryType(req, res) {
  const { id, data } = req.query; // Extract id from query parameters
  console.log(req.query);
  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }
if(data === 'main'){
  try {
    const subProductQuery = "SELECT * FROM subproduct WHERE product_type_name_id = ?";
    const subProduct = await queryPromise(subProductQuery, [id]);

    if (subProduct.length === 0) {
      return res.status(404).json({ error: "Subproduct not found" });
    }
    const subProductDetails = subProduct.map((product) => {
      const { thumbnailImage, ...rest } = product;
      return {
        ...rest,
      };
    });
    res.status(200).json(subProductDetails);
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Error fetching data", err });
  }
}
else if(data==='sub'){
  try {
    const subProductQuery = "SELECT * FROM subproduct WHERE product_type_id = ?";
    const subProduct = await queryPromise(subProductQuery, [id]);

    if (subProduct.length === 0) {
      return res.status(404).json({ error: "Subproduct not found" });
    }
    const subProductDetails = subProduct.map((product) => {
      const { thumbnailImage, ...rest } = product;
      return {
        ...rest,
      };
    });
    res.status(200).json(subProductDetails);
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Error fetching data", err });
  }
}
}
