import React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({ keyId, name, href, query }) => {
  function test(id) {
    console.log(id, "id here");
  }
  return (
    <section className="">
      <div className=" ">
        <Link
          onClick={() => test(keyId)}
          href={{
            pathname: href,
          }}
        >
          <div className="hover:shadow-xl" key={keyId}>
            <Image
              alt=""
              height={300}
              width={300}
              src="/assests/images/hero-bg.jpeg"
              className="h-[40%] object-cover w-[100%] rounded-t-sm "
            />
            <div>
              <button className="w-full text-white px-4 py-2 rounded-b-sm bg-newgold  hover:bg-white hover:text-newgold hover:border-b-2 hover:border-r-2 hover:border-l-2 border-newgold hover:font-semibold">
                {name}
              </button>
            </div>
          </div>

          {/* <Card
          className="max-w-[300px] h-[auto] rounded-sm hover:shadow-xl  bg-offwhite "
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
            <CardTitle className="text-[1rem]  border"></CardTitle>
          </CardHeader>
          <CardFooter className="  ">
            <Button variant="goldbtn" className="w-full">
              {name}
            </Button>
          </CardFooter>
        </Card> */}
        </Link>
      </div>
    </section>
  );
};

export default ProductCard;
