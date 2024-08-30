import SizeChart from "@/custom_components/product-ui/SizeChart";
import Table from "@/custom_components/table/Table";
import {
  CEW56,
  CEW57,
  CEW66,
  CEW67,
  CEW68,
} from "@/staticdata/tableData/TableData";
import { prdctdetails } from "@/staticdata/productdetails/staticdetails";
import { productsizechart } from "@/staticdata/productsizechart/prdctsizechart";
export async function generateStaticParams() {
  const params = [];

  // Example data; replace with actual dynamic values if needed
  const productIds = [
    "rubber-hose",
    "silicone-hose",
    "stainless-steel-hose",
    "food-beverage-hoses",
    "ptfe-teflon-hose",
    "pharmaceutical-hoses",
    "chemical-hoses",
    "thermoplastic-hose",
    "composite-hose",
    "pvc-hose",
    "expansion-joints",
    "ss-hose-fittings",
    "standard-end-fittings",
    "camlock-couplings",
    "quick-realease-coupling",
    "sms-union",
  ]; // Replace with actual product IDs if dynamic
  const productDetails = Array.from(
    new Set(prdctdetails.map((detail) => detail.product_sub_types_id))
  );

  // Create combinations of productId, productdetails, and page
  productIds.forEach((productId) => {
    productDetails.forEach((detailId) => {
      // Assume page can be any value or a range of values
      params.push({
        productId: productId,
        productdetails: detailId,
        page: "1", // Add logic if page values are dynamic
      });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { productdetails } = params;
  const productDetail =
    prdctdetails.find((pd) => pd.product_sub_types_id === productdetails) || {};

  const title = productDetail.product_subTypes_name || "Product Details";
  const imageUrl = productDetail.ImageUrl || "";
  const description = productDetail.meta_description || "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}${imageUrl}`,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
  };
}

export default function ProductPage({ params }) {
  const { productId, productdetails } = params;

  const productDetail =
    [prdctdetails.find((pd) => pd.product_sub_types_id === productdetails)] ||
    {};
  const productSizeChart =
    productsizechart.filter((p) => p.product_sub_types_id === productdetails) ||
    "";
    const cleanProductSizeChart = (productSizeChart) => {
      if (!Array.isArray(productSizeChart) || productSizeChart.length === 0) {
        return productSizeChart;
      }
    
      // Step 1: Collect keys
      const allKeys = new Set();
      productSizeChart.forEach((item) => {
        Object.keys(item).forEach((key) => {
          allKeys.add(key);
        });
      });
    
      // Step 2: Identify keys with all empty values
      const keysToRemove = new Set();
      allKeys.forEach((key) => {
        const allEmpty = productSizeChart.every((item) => {
          return item[key] === '' || item[key] === undefined;
        });
        if (allEmpty) {
          keysToRemove.add(key);
        }
      });
    
      // Step 3: Remove identified keys from each object
      return productSizeChart.map((item) => {
        const newItem = { ...item };
        keysToRemove.forEach((key) => {
          delete newItem[key];
        });
        return newItem;
      });
    };
    
    // Usage
    const cleanedProductSizeChart = cleanProductSizeChart(productSizeChart);
  const tableProp =
    productDetail && productDetail?.[0]?.product_subTypes_name.split(" ")[0];
  const tableValues =
    tableProp === "CEW56"
      ? CEW56
      : tableProp === "CEW57"
      ? CEW57
      : tableProp === "CEW66"
      ? CEW66
      : tableProp === "CEW67"
      ? CEW67
      : tableProp === "CEW68"
      ? CEW68
      : "";
  return (
    <div className=" select-none ">
      <section className="flex max-xl:flex-col small:justify-between">
        <div className="flex flex-col">
          <span className="font-semibold mb-3">
            {productDetail && productDetail?.[0]?.product_subTypes_name}
          </span>
          {productDetail && productDetail?.[0]?.product_standard && (
            <span className="max-w-lg">
              <span className="font-semibold"> Applicable Standard: </span>
              <span className="max-smallest:text-sm ">
                {productDetail[0]?.product_standard}
              </span>
            </span>
          )}
        </div>
        {productDetail && (
          <div className=" flex justify-end mt-2">
            <img
              src={`${productDetail[0]?.ImageUrl}`}
              alt={productDetail[0]?.product_subTypes_name}
              title={productDetail[0]?.product_subTypes_name}
              className="w-[300px] h-[auto]"
            />
          </div>
        )}
      </section>
      <section className=" flex flex-col gap-2 my-8">
        {productDetail &&
          productDetail?.map((details, index) => (
            <div className="flex flex-col gap-2" key={index}>
              {details.product_thread_type && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48"> Thread :</p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_thread_type}
                  </p>
                </div>
              )}
              {details.product_size && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48"> Size :</p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_size}
                  </p>
                </div>
              )}
              {details.product_pressure_rating && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48">Pressure Rating :</p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_pressure_rating}
                  </p>
                </div>
              )}
              {(details.product_cover ||
                details.product_innertube ||
                details.product_reinforcement) && (
                <span className="font-semibold">Construction :</span>
              )}
              {details.product_innertube && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48"> Inner Tube :</p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_innertube}
                  </p>
                </div>
              )}
              {details.product_reinforcement && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48 "> Reinforcement :</p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_reinforcement}
                  </p>
                </div>
              )}
              {details.product_cover && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48"> Cover :</p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_cover}
                  </p>
                </div>
              )}

              {details.product_hose_material && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48"> Hose Material :</p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_hose_material}
                  </p>
                </div>
              )}
              {details.product_braiding_material && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48">
                    {" "}
                    Braiding Material :
                  </p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_braiding_material}
                  </p>
                </div>
              )}
              {details.product_material && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48">
                    {" "}
                    Product Material :
                  </p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_material}
                  </p>
                </div>
              )}
              {details.product_core_jacket && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48"> Core & Jacket :</p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_core_jacket}
                  </p>
                </div>
              )}
              {details.product_fluid_compatibility && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48">
                    Fluid compatibility :
                  </p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_fluid_compatibility}
                  </p>
                </div>
              )}

              {details.product_compatibilty && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48">
                    Product Compatibilty :
                  </p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_compatibilty}
                  </p>
                </div>
              )}
              {details.product_industrial_applications && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48">
                    Industrial application :
                  </p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_industrial_applications}
                  </p>
                </div>
              )}

              {details.product_application && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48">
                    Product Application :
                  </p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_application}
                  </p>
                </div>
              )}
              {details.product_characteristics && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48">
                    {" "}
                    Characteristics :
                  </p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_characteristics}
                  </p>
                </div>
              )}

              {details.product_features && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48"> Features :</p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_features}
                  </p>
                </div>
              )}
              {details.product_note && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48"> Note :</p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_note}
                  </p>
                </div>
              )}
              {details.product_temp && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48"> Temperature :</p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {" "}
                    {details.product_temp}{" "}
                  </p>
                </div>
              )}
              {details.product_vacuuum && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48"> Vacuum :</p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_vacuum}{" "}
                  </p>
                </div>
              )}
              {details.product_pressure && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48">
                    {" "}
                    Product Pressure :
                  </p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_pressure}
                  </p>
                </div>
              )}
              {details.product_construction && (
                <div className="flex max-sm:flex-col md:max-mainProducts:flex-col max-sm:gap-1 sm:gap-6 mt-3">
                  <p className="font-semibold sm:min-w-48">
                    {" "}
                    Product Construction :
                  </p>
                  <p className="max-w-2xl text-start max-smallest:text-sm">
                    {details.product_construction}
                  </p>
                </div>
              )}
            </div>
          ))}
      </section>
      {productSizeChart.length > 0 ? (
        <div className="grid grid-cols-1 overflow-x-auto max-w-full">
          <SizeChart productSizeChart={productSizeChart} cleanedProductSizeChart={cleanedProductSizeChart} />
        </div>
      ) : (
        <div className="grid grid-cols-1 overflow-x-auto max-w-full ">
          <Table tableValues={tableValues} />
        </div>
      )}
    </div>
  );
}
