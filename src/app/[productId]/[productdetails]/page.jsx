import axios from 'axios';
import ProductDetails from './productDetails';

async function fetchProductSize(productId) {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/fetchSizeChart?id=${productId}`);
    return res.data; 
  } catch (error) {
    console.error('Failed to fetch product data:', error);
    throw new Error('Failed to fetch product data');
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
    console.error('Failed to fetch product data:', error);
    throw new Error('Failed to fetch product data');
  }
}

export default async function ProductId({ params }) {
  const { productId,productdetails } = params;
  const productSizeChart = await fetchProductSize(productdetails);
  const productDetails = await fetchProductDetails(productdetails)

  return <ProductDetails sizeChartDetails={productSizeChart} productDetails={productDetails} params={params} />;
}
