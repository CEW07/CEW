import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({ keyId, name,href,query }) => {
  function test(id) {
    console.log(id, "id here");
  }
  
  // let productData = [
  //   {
  //     product_id: 1001,
  //     product_name: "product1",
  //   },
  //   {
  //     product_id: 1002,
  //     product_name: "product2",
  //   },
  //   {
  //     product_id: 1003,
  //     product_name: "product3",
  //   },
  // ];
  return (
    <div className=" ">
      <Link
        onClick={() => test(keyId)}
        href={{
          pathname:href,
        }}
      >
        <Card
          className="w-[300px] h-[auto] rounded-sm hover:shadow-xl  bg-offwhite "
          key={keyId}
        >
          <Image
            alt=""
            height={300}
            width={300}
            src="/assests/images/hero-bg.jpeg"
            className="h-[40%] object-cover w-[100%] rounded-tr-sm rounded-tl-sm"
          />
          <CardHeader className=" border-red-500 h-[auto] flex items-center justify-center ">
            <CardTitle className="text-[1rem]  border">
              {name}  
            </CardTitle>
            {/* <CardDescription>
              CORRUGATED STAINLESS STEEL HOSE WITH BRAID: A 100 SERIES & A 200
              SERIES
            </CardDescription> */}
          </CardHeader>
          <CardFooter className="flex justify-center h-[auto] items-center  border-red-600 ">
            <Button variant="goldbtn" className="w-[60%]">
              Explore
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCard;
