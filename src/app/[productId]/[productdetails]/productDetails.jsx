"use client";
import SizeChart from "@/custom_components/product-ui/SizeChart";
import Table from "@/custom_components/table/Table";
import { CEW56, CEW57, CEW66, CEW67, CEW68 } from "@/staticdata/tableData/TableData";
import { data } from "autoprefixer";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductDetails = ({ sizeChartDetails,productDetails,params }) => {
  // console.log(productDetails,'details here');
  const router = useRouter();
  useEffect(() => {
    
    if(!Array.isArray(sizeChartDetails) && !Array.isArray(productDetails)){
      router.replace('/not-found')
    }
  }, [])
  const tableProp = productDetails && productDetails[0]?.product_subTypes_name.split(' ')[0];
  const tableValues = tableProp ==='CEW56' ? CEW56 : tableProp ==='CEW57' ? CEW57  : tableProp ==='CEW66' ? CEW66 :tableProp ==='CEW567' ? CEW67 : tableProp ==='CEW68' ? CEW68 : ''
  return (
    <div className="">
      <section className="flex max-xl:flex-col small:justify-between">
        <div className="flex flex-col">
          <span className="font-semibold mb-3">
            {productDetails && productDetails[0]?.product_subTypes_name}
          </span>
          {productDetails && productDetails[0]?.product_standard && (
            <span>
              <span className="font-semibold"> Applicable Standard: </span>
              <span className="max-smallest:text-sm">
                {" "}
                {productDetails[0]?.product_standard}
              </span>
            </span>
          )}
        </div>
        {/* <span>Image</span> */}
        {productDetails && (
          <div className=" flex justify-end mt-2">
            <img src={`${productDetails[0]?.ImageUrl}`} alt={productDetails[0]?.product_subTypes_name} />
          </div>
        )}
      </section>
      <section className=" flex flex-col gap-2 my-8">
        {productDetails &&
          productDetails?.map((details,index) => (
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
      {sizeChartDetails && Array.isArray(sizeChartDetails) ? (
        <div className="grid grid-cols-1 overflow-x-auto max-w-full">
          <SizeChart sizeChartDetails={sizeChartDetails} />
        </div>
      )
      : 
      (
        <Table tableValues={tableValues} />
      )
      }
      
    </div>
  );
};

export default ProductDetails;
