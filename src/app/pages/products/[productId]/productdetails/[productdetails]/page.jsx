"use client";
import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const ProductDetails = ({ params }) => {
  const { productId, productdetails } = params;
  const [productDetail, setProductDetail] = useState({});
  const [detailsLoader, setDetailsLoader] = useState(true);
  const [mainData, setMainData] = useState([]);
  console.log(params);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        await fetch(
          `http://localhost:3000/api/fetchProductDetails?id=${productdetails}`
        )
          .then((response) => response.json())
          .then((data) => setProductDetail(data))
          .catch((err) => console.log("There is an Error ", err));
        setDetailsLoader(false);
        // setLoading(false);
      } catch (err) {
        console.log("Error while fetching data: ", err);
      }
    };
    fetchProductDetails();
  }, []);
  function testfunc() {
    console.log(productDetail);
  }
  useEffect(() => {
    console.log("The details of the product is ", productDetail);
  }, [productDetail]);

  return (
    <div className="border  ">
      <section className="flex flex-row border border-red-400 ">
        <div className="flex flex-col">
          <button onClick={() => testfunc()}>click</button>
          <span>Name </span>
          <span>Applicable Standard</span>
        </div>
        <span>Image</span>
      </section>
      <section className=" flex flex-col gap-4 border border-blue-300">
        <h3 className="font-semibold">Construction:</h3>
        <div>
          {detailsLoader ? (
            "loading..."
          ) : (
            <>
              {productDetail && (
                <>
                  {productDetail?.map((details) => (
                    <div>
                      {details.product_features && (
                        <p className="mt-2">
                          FEATURE: {details.product_features}{" "}
                        </p>
                      )}

                      {details.product_standard && (
                        <p className="mt-2">
                          STANDARD: {details.product_standard}{" "}
                        </p>
                      )}

                      {details.product_pressure && (
                        <p className="mt-2">
                          PRESSURE: {details.product_pressure}
                        </p>
                      )}

                      {details.product_industrial_applications && (
                        <p className="mt-2">
                          APPLICATION: {details.product_industrial_applications}
                        </p>
                      )}
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>
        <div>
          <span>Industrial Application</span>
        </div>
        <div>
          <span>Fluid compatibility</span>
        </div>
        <div>
          <span>Inner tube </span>
        </div>
        <div>
          <span>Reinforcement</span>
        </div>
        <div>
          <span>Cover</span>
        </div>
        <div>
          <span>Note</span>
        </div>
        <div>
          <span>Temperature</span>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
