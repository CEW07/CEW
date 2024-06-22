import React from "react";
// import { productGrid } from "@/app/staticdata/static";
import Image from "next/image";
import ProductCard from "./ProductCard";
const ProductGrid = ({ productData, loading, cardId }) => {
  
  const { productCategories, productTypes, productSubTypes } = productData;
  console.log(cardId);
  return (
    <>
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-6 grid-cols-1 sm:grid-cols-2 ">

      {cardId}
    </div>
    </>
    // <Link href={`${path}`}>
    // <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-6 grid-cols-1 sm:grid-cols-2 ">
    //   {/* <span> {productData.length>0?'product rendered':'loading...'} </span> */}
    //   {loading ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <>
    //       {productTypes.map((item) =>
    //         item.product_name ? (
    //           <div onClick={() => test(item.product_name_id)}>
    //             <Card
    //               className="w-[300px] h-[400px] rounded-sm hover:shadow-xl  bg-offwhite "
    //               key={item.product_name_id}
    //             >
    //               <Image
    //                 alt=""
    //                 height={300}
    //                 width={300}
    //                 src="/assests/images/hero-bg.jpeg"
    //                 className="h-[40%] object-cover w-[100%] rounded-tr-sm rounded-tl-sm"
    //               />
    //               <CardHeader className="mt-2">
    //                 <CardTitle className="text-[1rem]">
    //                   {item.product_types}
    //                 </CardTitle>
    //                 <CardDescription>
    //                   CORRUGATED STAINLESS STEEL HOSE WITH BRAID: A 100 SERIES &
    //                   A 200 SERIES
    //                 </CardDescription>
    //               </CardHeader>
    //               <CardFooter className="flex justify-center ">
    //                 <Button variant="goldbtn" className="w-[60%]">
    //                   Explore
    //                 </Button>
    //               </CardFooter>
    //             </Card>
    //           </div>
    //         ) : null
    //       )}
    //     </>
    //   )}
    // </div>
    // </Link>
  );
};

export default ProductGrid;

// {productGrid.map((product) => (
//   <div key={product.id}>
//     <div>
//       <Image
//         width={300}
//         height={300}
//         src='https://static7.depositphotos.com/1010683/702/i/450/depositphotos_7025209-stock-photo-cement-factory-at-night.jpg'
//         alt={product.alt}
//         className=" object-cover shadow-lg rounded-md md:w-full md:h-full "
//       />
//     </div>
//     <div className="bg-offwhite px-4 py-2 rounded-bl-md rounded-br-md ">
//       <p className="text-newgold font-semibold">{product.name}</p>
//     </div>
//   </div>
// ))}
