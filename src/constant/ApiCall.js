// components/ApiCall.js
import axios from "axios";

export default async function ApiCall({ api }) {
  try {
    const response = await axios.get(api);
    return response.data; // Return the data instead of the entire response
  } catch (err) {
    console.error("Error while fetching data: ", err);
    throw err; // Throw the error to handle it in the caller function
  }
}
