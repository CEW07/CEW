"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
const DataContext = createContext();
export const useData = () => useContext(DataContext);
export default function ContextData({ children }) {
  const [productData, setProductData] = useState(
    {
      mainCategory: [],
    },
    {
      subCategory: "",
    }
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetching the data from fetchData routes - pages/api/fetchData.js
    const fetchMainCategoryData = async () => {
      try {
        await axios("http://localhost:3000/api/fetchMainCategory")
          .then((res) => {
            setProductData((prev) => ({ ...prev, mainCategory: res.data }));
            console.log(res.data, "response");
          })
          .catch((err) => console.log(err));

        
      } catch (err) {
        console.log("Error while fetching data: ", err);
      }
    };
    const fetchSubCategoryData = async () => {
      await axios("http://localhost:3000/api/fetchSubCategory")
      .then((res) => {
        setProductData((prev) => ({ ...prev, subCategory: res.data }));
        console.log(res.data, "response");
        setLoading(false);
      })
      .catch((err) => console.log(err));
    }
    fetchMainCategoryData();
    fetchSubCategoryData();
  }, []);
  return (
    <DataContext.Provider
      value={{ productData: productData, loading: loading }}
    >
      {children}
    </DataContext.Provider>
  );
}
