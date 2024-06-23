"use client";
import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const ProductDetails = ({ params }) => {
  const { productId, productdetails } = params;
  const [productDetails, setProductDetails] = useState({});
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
          // .then((data) => console.log(data, "data here"));
          .then((data) => setProductDetails(data));
        // .then((data) => setMainData([...mainData, data[0]]));
        setDetailsLoader(false);
        // setLoading(false);
      } catch (err) {
        console.log("Error while fetching data: ", err);
      }
    };
    fetchProductDetails();
  }, []);
  function testfunc() {
    console.log(productDetails);
  }
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
          {/* {detailsLoader ? (
              "loading..."
          ) : (
            <span>Pressure - {productDetails[0].product_pressure} </span>
          )} */}
        </div>
        <div>
          <span>Industrial Application</span>
        </div>
        <div>
          <span>Fluid compatibility</span>
        </div>
        <div>
          <span>Inner tube</span>
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
