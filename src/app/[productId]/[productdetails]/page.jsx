"use client";
import SizeChart from "@/custom_components/product-ui/SizeChart";
import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductDetails = ({ params }) => {
  const { productId, productdetails } = params;
  const [productDetails, setProductDetails] = useState();
  const [detailsLoader, setDetailsLoader] = useState(true);
  console.log(params, "details mai params");
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        await axios(
          `http://localhost:3000/api/fetchProductDetails?id=${productdetails}`
        )
          .then((res) => {
            setProductDetails(res.data);
          })
          .catch((err) => {
            console.log(err, "error while fetching product details");
          });
        setDetailsLoader(false);
      } catch (err) {
        console.log("Error while fetching data: ", err);
      }
    };
    fetchProductDetails();
  }, []);

  function byteArrayToBase64(byteArray) {
    let binary = '';
    const bytes = new Uint8Array(byteArray);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
  const [imageSrc, setImageSrc] = useState()
  useEffect(() => {
    if(productDetails){
      async function fetchAndConvertImage() {
        const base64String = byteArrayToBase64(productDetails[0]?.image?.data);
        setImageSrc(`data:image/png;base64,${base64String}`);
        console.log(productDetails);
      }
      fetchAndConvertImage();
    }
  }, [productDetails]);
  
  return (
    <div className="">
      <section className="flex flex-row ">
        <div className="flex flex-col">
          <span>{productDetails && productDetails[0]?.product_subTypes_name} </span>
          {productDetails && (
            productDetails[0]?.product_standard && (
              <span>
              Applicable Standard: {productDetails[0]?.product_standard}
              </span>
              )
            
          )}
        </div>
        {/* <span>Image</span> */}
        {imageSrc && <img src={imageSrc}/>}
      </section>
      <section className=" flex flex-col gap-2 my-8">
        <span className="font-semibold">Construction:</span>
        {productDetails &&
          productDetails?.map((details) => (
            <div className="flex flex-col gap-2">
              {details.product_application && (
                <div>
                  <p className="font-semibold"> Product Applicaton :</p>{" "}
                  {details.product_application}
                </div>
              )}

              {details.product_pressure && (
                <div>
                  <p className="font-semibold"> Product Pressure :</p>{" "}
                  {details.product_pressure}
                </div>
              )}

              {details.product_industrial_applications && (
                <div>
                  <p className="font-semibold"> Industrial application :</p>{" "}
                  {details.product_industrial_applications}
                </div>
              )}

              {details.product_fluid_compatibility && (
                <div>
                  <p className="font-semibold"> Fluid compatibility :</p>{" "}
                  {details.product_fluid_compatibility}
                </div>
              )}

              {details.product_innertube && (
                <div>
                  <p className="font-semibold"> Inner Tube :</p>{" "}
                  {details.product_innertube}
                </div>
              )}

              {details.product_reinforcement && (
                <div>
                  <p className="font-semibold"> Reinforcement :</p>{" "}
                  {details.product_reinforcement}
                </div>
              )}

              {details.product_cover && (
                <div>
                  <p className="font-semibold"> Cover :</p>{" "}
                  {details.product_cover}
                </div>
              )}

              {details.product_note && (
                <div>
                  <p className="font-semibold"> Note :</p>{" "}
                  {details.product_note}
                </div>
              )}

              {details.product_temp && (
                <div>
                  <p className="font-semibold"> Temperature :</p>{" "}
                  {details.product_temp}
                </div>
              )}

              {details.product_features && (
                <div>
                  <p className="font-semibold"> Features :</p>{" "}
                  {details.product_features}
                </div>
              )}

              {details.product_vacuuum && (
                <div>
                  <p className="font-semibold"> Vacuum :</p>{" "}
                  {details.product_vacuum}
                </div>
              )}

              {details.product_construction && (
                <div>
                  <p className="font-semibold"> Product Construction :</p>{" "}
                  {details.product_construction}
                </div>
              )}

              {details.product_hose_material && (
                <div>
                  <p className="font-semibold"> Hose Material :</p>{" "}
                  {details.product_hose_material}
                </div>
              )}

              {details.product_braiding_material && (
                <div>
                  <p className="font-semibold"> Braiding Material :</p>{" "}
                  {details.product_braiding_material}
                </div>
              )}

              {details.product_characteristics && (
                <div>
                  <p className="font-semibold"> Characteristics :</p>{" "}
                  {details.product_characteristics}
                </div>
              )}

              {details.product_core_jacket && (
                <div>
                  <p className="font-semibold"> Core & Jacket :</p>{" "}
                  {details.product_core_jacket}
                </div>
              )}

              {details.product_material && (
                <div>
                  <p className="font-semibold"> Product Material :</p>{" "}
                  {details.product_material}
                </div>
              )}

              {details.product_size && (
                <div>
                  <p className="font-semibold"> Size :</p>{" "}
                  {details.product_size}
                </div>
              )}

              {details.product_application && (
                <div>
                  <p className="font-semibold"> Product Application :</p>{" "}
                  {details.product_application}
                </div>
              )}

              {details.product_thread_type && (
                <div>
                  <p className="font-semibold"> Thread :</p>{" "}
                  {details.product_thread_type}
                </div>
              )}

              {details.product_compatibilty && (
                <div>
                  <p className="font-semibold"> Product Compatibilty :</p>{" "}
                  {details.product_compatibilty}
                </div>
              )}

              {details.product_pressure_rating && (
                <div>
                  <p className="font-semibold"> Rating :</p>{" "}
                  {details.product_pressure_rating}
                </div>
              )}
            </div>
          ))}
      </section>
      <SizeChart />
    </div>
  );
};

export default ProductDetails;
