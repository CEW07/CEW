import connection from "./dbconnect";
import { promisify } from "util";

const queryPromise = promisify(connection.query).bind(connection);

const withCSP = (handler) => async (req, res) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self';"
  );
  return handler(req, res);
};

const fetchMainCategory = async (req, res) => {
  // console.log('Response Headers:', res.getHeaders());
  const { id, data } = req.query; // Extract id from query parameters

  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  if (data === "details") {
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
  } else if (data === "search") {
    if (!id) {
      return res.status(400).json({ error: "Search text is required" });
    }
    try {
      const searchPattern = `%${id}%`; // Add wildcards to search for partial matches

      const searchProductQuery =
        "SELECT product_subTypes_name, post_url FROM productdetails WHERE product_subTypes_name LIKE ? LIMIT 10";
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
};

export default withCSP(fetchMainCategory);
