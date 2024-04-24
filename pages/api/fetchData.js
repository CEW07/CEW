import connection from "./dbconnect";
import { promisify } from "util";

const queryPromise = promisify(connection.query).bind(connection);
export default function fetchData(req, res) {
  Promise.all([
    // Fetching product categories
    queryPromise("SELECT * FROM product_categories"),
    // Fetching product types
    queryPromise("SELECT * FROM product_types"),
    // Fetching product sub types
    queryPromise("SELECT * FROM product_sub_types"),
  ])
    .then(
      ([
        productCategoriesResults,
        productTypesResults,
        productSubTypesResults,
      ]) => {
        const responseData = {
          productCategories: productCategoriesResults,
          productTypes: productTypesResults,
          productSubTypes: productSubTypesResults,
        };
        res.status(200).json(responseData);
      }
    )
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data" });
    });
}
