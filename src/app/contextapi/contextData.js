"use client";
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";
import axios from "axios";
import ApiCall from "@/constant/ApiCall";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

export default function ContextData({ children }) {
  const [productData, setProductData] = useState({
    mainCategory: [],
    subCategory: "",
  });
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchMainCategoryData = async () => {
  //       try {
  //        await ApiCall({
  //           api: "http://localhost:3000/api/fetchMainCategory",
  //         })
  //           .then((res) => {
  //             setProductData((prev) => ({ ...prev, mainCategory: res }));
  //             console.log(res)
  //           })
  //           .catch((err) => console.log(err));
  //       } catch (err) {
  //         console.log("Error while fetching main category data: ", err);
  //       }
  //   };
  //   fetchMainCategoryData();
  // }, []);

  // useEffect(() => {
  //   const fetchSubCategoryData = async () => {
  //       try {
  //         await ApiCall({
  //           api: "http://localhost:3000/api/fetchSubCategory",
  //         })
  //         .then((res)=>{
  //           setProductData((prev) => ({ ...prev, subCategory: res }));
  //           setLoading(false);
  //         })
  //         .catch((error)=>console.log(error,'error message here'))
  //       } catch (err) {
  //         console.log("Error while fetching sub category data: ", err);
  //       }
      
  //   };
  //   fetchSubCategoryData();
  // }, []);

  ////

  
  useEffect(() => {
    const fetchMainCategoryData = async () => {
        try {
          const res = await axios("/api/fetchMainCategory");
          setProductData((prev) => ({ ...prev, mainCategory: res.data }));
          console.log(res.data, "mainCategory response");
        } catch (err) {
          console.log("Error while fetching main category data: ", err);
        } 
      
    };
    fetchMainCategoryData();
  }, []);

  useEffect(() => {
    const fetchSubCategoryData = async () => {
        try {
          const res = await axios("/api/fetchSubCategory");
          setProductData((prev) => ({ ...prev, subCategory: res.data }));
          console.log(res.data, "subCategory response");
          setLoading(false);
        } catch (err) {
          console.log("Error while fetching sub category data: ", err);
        }
      
    };
    fetchSubCategoryData();
  }, []);
  return (
    <DataContext.Provider value={{ productData, loading }}>
      {children}
    </DataContext.Provider>
  );
}
