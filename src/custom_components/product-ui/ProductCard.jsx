import React, { useState, useEffect } from "react";
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
import { mainProductImages } from "@/staticdata/static";
const ProductCard = ({ keyId, name, href, imageSrc, imageAlt, params }) => {

  return (
    <section className="">
      <div className=" ">
        <Link
          href={{
            pathname: href,
          }}
        >
          <div className=" hover:shadow-xl" key={keyId}>
            <div className="relative aspect-video">
              {params === "subproductImage" ? (
                <Image
                  src={`data:image/png;base64,${imageSrc}`}
                  alt={imageAlt}
                  fill
                  className=" object-contain border-2 border-black  rounded-t-sm "
                />
              ) : (
                <Image
                loading="lazy"
                  alt={imageAlt}
                  fill
                  src={imageSrc}
                  className=" object-cover border-2 border-black  rounded-t-sm "
                />
              )}
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
