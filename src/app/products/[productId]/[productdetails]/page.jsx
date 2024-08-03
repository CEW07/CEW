import axios from 'axios';
import ProductDetails from './productDetails';

async function fetchProductSize(productId) {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/fetchSizeChart?id=${productId}`);
    return res.data; 
  } catch (error) {
    // console.error('Failed to fetch product data:', error);
  }
}

async function fetchProductDetails(productId) {
  try {
    const res = await axios(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/fetchProductDetails`, {
      params: {
        id: productId,
        data: "details",
      },
    })
    return res.data;
  } catch (error) {
    // console.error('Failed to fetch product data:', error);
  }
}
export async function generateMetadata({ params }) {
  const { productId,productdetails } = params;
  let title = "Product Details";
  let imageUrl = ''
  try {
    const productDetails = await fetchProductDetails(productdetails);
    if (productDetails && productDetails[0]?.product_subTypes_name) {
      title = productDetails[0]?.product_subTypes_name;
      imageUrl = productDetails[0]?.ImageUrl
    }
  } catch (error) {
    console.error("Error fetching product details:", error);
  }

  return {
    title,
    description: "Product details and size chart.",
    openGraph: {
      title,
      description: "Product details and size chart.",
      images:[
        {
          url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}${imageUrl}`,
          width: 800,
          height: 600,
          alt: `${title}`,
        }
      ]
    },
  };
}

export default async function ProductId({ params }) {
  const { productId,productdetails } = params;
  const productSizeChart = await fetchProductSize(productdetails);
  const productDetails = await fetchProductDetails(productdetails)

  return <ProductDetails sizeChartDetails={productSizeChart} productDetails={productDetails} params={params} />;
}
