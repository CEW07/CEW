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
            className="hover:scale-105 transform transition-transform duration-300 h-full flex flex-col border-2 border-newgold galaxyFold:w-[234px] "
            key={keyId}
          >
            <div className="relative aspect-video overflow-hidden bg-offwhite">
              {params === "subproductImage" ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain transform transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                  title={name}
                />
              ) : (
                <Image
                  loading="lazy"
                  alt={imageAlt}
                  fill
                  src={imageSrc}
                  className="object-contain transform transition-transform duration-300 hover:scale-110"
                  title={name}
                />
              )}
            </div>
            <div className="flex-grow flex ">
              <button className="w-full h-full hover:border-newgold hover:border-t font-semibold text-start text-[13px]  text-white px-4 py-2 bg-newgold hover:text-newgold hover:bg-offwhite ">
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
