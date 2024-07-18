import axios from 'axios';
import ProductIdPage from './productId';

async function fetchProductData(productId) {
  try {
    const res = await axios.get(`${process.env.FRONTEND_URL}api/fetchSubCategoryType?id=${productId}`);
    return res.data; // Ensure that only the data is returned
  } catch (error) {
    console.error('Failed to fetch product data:', error);
    throw new Error('Failed to fetch product data');
  }
}

export default async function ProductId({ params }) {
  const { productId } = params;
  console.log(params, 'params here');
  const subCategoryAll = await fetchProductData(productId);
  // console.log(subCategoryAll, 'subCategoryAll');
  return <ProductIdPage subCategory={subCategoryAll} params={params} />;
}
