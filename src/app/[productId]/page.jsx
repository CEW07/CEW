import axios from 'axios';
import ProductIdPage from './productId';

async function fetchProductData(productId) {
  try {
    const res = await axios.get(`https://crownengineerings.netlify.app/api/fetchSubCategoryTypeAll?id=${productId}`);
    return res.data; // Ensure that only the data is returned
  } catch (error) {
    console.error('Failed to fetch product data:', error);
    throw new Error('Failed to fetch product data');
  }
}

export default async function ProductId({ params }) {
  const { productId } = params;
  const subCategoryAll = await fetchProductData(productId);
  return <ProductIdPage subCategory={subCategoryAll} params={params} />;
}
