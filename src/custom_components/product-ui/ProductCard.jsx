import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ keyId, name, href, imageSrc, imageAlt, params }) => {
  return (
    <section className="h-full" key={keyId}>
      <div className="h-full">
        <Link
          href={{
            pathname: href,
          }}
        >
          <div
            className="hover:shadow-xl h-full flex flex-col border-2 border-newgold rounded-md"
            key={keyId}
          >
             
            <div className="relative aspect-video">
              {params === "subproductImage" ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain "
                  loading="lazy"
                />
              ) : (
                <Image
                  loading="lazy"
                  alt={imageAlt}
                  fill
                  src={imageSrc}
                  className="object-cover "
                />
              )}
            </div>
            <div className="flex-grow flex">
              <button className="w-full h-full flex items-center justify-center text-white px-4 py-2  bg-newgold ">
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
