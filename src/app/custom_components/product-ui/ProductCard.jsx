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
import { mainProductImages } from "@/app/staticdata/static";
const ProductCard = ({ keyId, name, href, query, imageSrc, imageAlt }) => {
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
          <div className=" hover:shadow-xl" key={keyId}>
            <div className="relative aspect-video">
              <Image
                alt={imageAlt}
                fill
                src={imageSrc}
                className=" object-cover border-2 border-black  rounded-t-sm "
              />
            </div>
            <div>
              <button className="w-full text-white px-4 py-2 rounded-b-sm bg-newgold  hover:bg-white hover:text-newgold hover:border-b-2 hover:border-r-2 hover:border-l-2 border-newgold hover:font-semibold">
                {name}
              </button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ProductCard;
