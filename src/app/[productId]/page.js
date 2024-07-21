import axios from 'axios';
import ProductIdPage from './productType';
async function fetchProductData(productId) {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/fetchSubCategoryTypeAll?id=${productId}`)
      return res.data; 
  } catch (error) {
    // console.error('Failed to fetch product data:', error);
  }
}

export default async function ProductId({ params }) {
  const { productId } = params;
  const subCategoryAll = await fetchProductData(productId);
  return <ProductIdPage subCategory={subCategoryAll} params={params} />;
}