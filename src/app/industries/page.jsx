import React from "react";
import { industries } from "@/staticdata/static";
import Image from "next/image";
const Industries = () => {
  return (
    <main className="flex justify-center">

    <div className="py-6 max-smallest:mx-5 smallest:max-sm:mx-10  max-xl:mx-20 max-w-[74rem]">
      <div className="flex justify-center items-center flex-col ">
        <h1 className="text-center font-semibold text-2xl md:text-4xl text-newgold">
          Industries We Serve
        </h1>
        <p className="max-w-6xl text-xs smallest:text-sm  lg:text-base text-center mt-6">
          Crown Engineering Works is a versatile provider of precision flexible
          solutions, catering to a diverse array of industries. Our commitment
          to quality, innovation, and client satisfaction positions us as a
          trusted partner in critical applications. Explore how our flexible
          solutions enhance efficiency and reliability across various sectors
        </p>
      </div>

      <section className="mt-10">
        <div className=" grid small:grid-cols-2 md:grid-cols-3 gap-6  ">
          {industries?.map((industry, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-offwhite flex text-center justify-center max-smallest:text-sm  max-small:text-lg  text-base lg:text-xl z-10 items-center px-4">
                  {industry.name}
                </h1>
              </div>
              <div className="aspect-video relative">
                <Image
                  fill
                  src={industry.image}
                  alt={industry.alt}
                  className=" object-cover shadow-lg rounded-md "
                />
              </div>
              <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </main>
  );
};

export default Industries;
