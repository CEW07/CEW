import connection from "./dbconnect";
import { promisify } from "util";

const queryPromise = promisify(connection.query).bind(connection);

export default async function fetchMainCategory(req, res) {
  try {
    const mainProduct = await queryPromise("SELECT * FROM mainproduct");
    res.status(200).json(mainProduct);
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Error fetching data" });
  }
}
