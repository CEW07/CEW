import ProductCard from "@/custom_components/product-ui/ProductCard";
import { mainProducts, productTypes } from "@/staticdata/static";
import { subproduct } from "@/staticdata/subproduct/subproduct";
// This will be executed at build time
export async function generateStaticParams() {
  return mainProducts.map((product) => ({
    productId: product.product_name_id,
  }));
}

// This function generates metadata dynamically for each page
export async function generateMetadata({ params }) {
  const { productId } = params;
  const product = mainProducts.find(
    (item) => item.product_name_id === productId
  );
  
  const title = product ? product.product_name : 'Product Details';
  const description = product ? product.meta_description : 'Product details page';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}${product?.image}`,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
  };
}

const ProductTypePage = ({ params }) => {
  const { productId } = params;

  // Filter data based on the productId from the static data
  const subCategoryAll = subproduct.filter(
    (product) => product.product_type_name_id === productId
  );

  return (
    <div className="select-none">
      {productTypes.map(
        (type, index) =>
          type.product_name_id === productId && (
            <div className="" key={index}>
              <span className="flex flex-col max-smallest:text-base smallest:text-xl mt-6 mb-3">
                {type.product_types && type.product_types}
              </span>
              <div className="galaxyFold:flex galaxyFold:justify-center">
                <div className="grid small:max-md:grid-cols-2 mainProducts:grid-cols-2 xl:grid-cols-3 gap-6">
                  {subCategoryAll
                    .filter(
                      (filteredData) =>
                        filteredData.product_type_id === type.product_type_id
                    )
                    .map((data, index) => (
                      <div className="h-full" key={index}>
                        <ProductCard
                          keyId={index}
                          name={data.product_sub_types}
                          href={`/products/${productId}/${data.product_sub_types_id}`}
                          imageSrc={data.ImageUrl}
                          imageAlt={data.product_type_name_id}
                          params="subproductImage"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )
      )}

      {mainProducts.map(
        (item, index) =>
          item.product_types === "FALSE" &&
          item.product_name_id === productId && (
            <div
              className="galaxyFold:flex galaxyFold:justify-center"
              key={index}
            >
              <div className="grid small:max-md:grid-cols-2 mainProducts:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
                {subCategoryAll
                  .filter(
                    (filteredData) =>
                      filteredData.product_type_name_id === productId
                  )
                  .map((data, index) => (
                    <div key={index}>
                      <ProductCard
                        keyId={index}
                        name={data.product_sub_types}
                        href={`/products/${productId}/${data.product_sub_types_id}`}
                        imageSrc={data.ImageUrl}
                        imageAlt={data.product_type_name_id}
                        params="subproductImage"
                      />
                    </div>
                  ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ProductTypePage;
