"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
const DataContext = createContext();
export const useData = () => useContext(DataContext);
export default function ContextData({ children }) {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetching the data from fetchData routes - pages/api/fetchData.js
    const fetchData = async () => {
      try {
        await fetch("http://localhost:3000/api/fetchData")
          .then((response) => response.json())
          // .then((data) => console.log(data.productCategories,'data here'))
          .then((data) => setProductData(data));
        setLoading(false);
      } catch (err) {
        console.log('Error while fetching data: ',err);
      }
    };

    fetchData();
  }, []);
  return (
    <DataContext.Provider
      value={{ productData: productData, loading: loading }}
    >
      {children}
    </DataContext.Provider>
  );
}
