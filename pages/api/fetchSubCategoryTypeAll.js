import connection from "./dbconnect";
import { promisify } from "util";

const queryPromise = promisify(connection.query).bind(connection);

export default async function fetchSubCategoryTypeAll(req, res) {
  const { id, data } = req.query; // Extract id from query parameters
  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }
  try {
    const subProductQuery = "SELECT * FROM subproduct WHERE product_type_name_id = ?";
    const subProduct = await queryPromise(subProductQuery, [id]);
    if (subProduct.length === 0) {
      return res.status(404).json({ error: "Subproduct not found" });
    }
    // const subProductWithImage = subProduct.map((product) => {
    //   const { thumbnailImage, ...rest } = product;
    //   return {
    //     ...rest,
    //   };
    // });
    res.status(200).json(subProduct);
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Error fetching data", err });
  }
}






// import connection from "./dbconnect";
// import { promisify } from "util";

// const queryPromise = promisify(connection.query).bind(connection);

// export default async function fetchMainCategory(req, res) {
//   const { id } = req.query;

//   if (!id) {
//     return res.status(400).json({ error: "ID is required" });
//   }

//   try {
//     const subProductQuery = "SELECT * FROM subproduct WHERE product_type_id = ?";
//     const subProduct = await queryPromise(subProductQuery, [id]);

//     if (subProduct.length === 0) {
//       return res.status(404).json({ error: "Subproduct not found" });
//     }

//     res.status(200).json(subProduct);
//   } catch (err) {
//     console.error("Error executing query", err);
//     res.status(500).json({ error: "Error fetching data", err });
//   }
// }