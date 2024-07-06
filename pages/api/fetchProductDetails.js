import connection from "./dbconnect";
import { promisify } from "util";

const queryPromise = promisify(connection.query).bind(connection);

export default async function fetchMainCategory(req, res) {
  const { id,data } = req.query; // Extract id from query parameters
  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }
  if(data === 'details'){

  
  try {
    const subProductDetailsQuery =
      "SELECT * FROM productdetails WHERE product_sub_types_id = ?";
    const subProductDetails = await queryPromise(subProductDetailsQuery, [id]);

    if (subProductDetails.length === 0) {
      return res.status(404).json({ error: "SubproductDetails not found" });
    }
    const SubproductDetailsWithImage = subProductDetails.map((data)=>({
      ...data,
      image:data.image
      ? Buffer.from(data.image, "binary").toString("base64")
      : null,
    }))
    res.status(200).json(SubproductDetailsWithImage);
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Error fetching data", err });
  }
  }
  else if(data === 'search'){
    if (!id) {
      return res.status(400).json({ error: "Search text is required" });
    }
    try {
      const sizeChartQuery = "SELECT product_sub_types_id FROM productdetails WHERE product_sub_types_id LIKE ? LIMIT 10";
      const searchPattern = `%${id}%`; // Add wildcards to search for partial matches
      const sizeChartResults = await queryPromise(sizeChartQuery, [searchPattern]);
  
      if (sizeChartResults.length === 0) {
        return res.status(404).json({ error: "No matching product sub type IDs found" });
      }
  
      // Extracting only the product_sub_types_id values from the results
      const productSubTypeIds = sizeChartResults.map(result => result.product_sub_types_id);
  
      res.status(200).json(productSubTypeIds);
      // console.log(productSubTypeIds);
    } catch (err) {
      console.error("Error executing query", err);
      res.status(500).json({ error: "Error fetching data", err });
    }
  }

}
