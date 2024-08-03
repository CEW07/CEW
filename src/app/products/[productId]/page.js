import axios from "axios";
import ProductIdPage from "./productType";
import { mainProducts } from "@/staticdata/static";
async function fetchProductData(productId) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/fetchSubCategoryTypeAll?id=${productId}`
    );
    return res.data;
  } catch (error) {
    // console.error('Failed to fetch product data:', error);
  }
}
function formatTitleFromParam(param) {
  if (!param) return "";
  // Replace hyphens with spaces
  const replaced = param.replace(/-/g, " ");
  // Capitalize each word
  return replaced
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export async function generateMetadata({ params }) {
  const { productId } = params;
  let title = "Products types";
  let findProduct;
  try {
    // const productDetails = await fetchProductData(productId);
    // if (productDetails && productDetails[0]?.product_subTypes_name) {
    //   title = productDetails[0].product_subTypes_name;
    // }
    findProduct = mainProducts.find(
      (item) => item.product_name_id === productId
    );
    title = formatTitleFromParam(productId);
  } catch (error) {
    console.error("Error fetching product details:", error);
  }

  return {
    title,
    description: "Product Types.",
    openGraph: {
      title,
      description: "Product Types",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}${findProduct?.image}`,
          width: 800,
          height: 600,
          alt: `${title}`,
        },
      ],
    },
  };
}
export default async function ProductId({ params }) {
  const { productId } = params;
  const subCategoryAll = await fetchProductData(productId);
  return <ProductIdPage subCategory={subCategoryAll} params={params} />;
}
