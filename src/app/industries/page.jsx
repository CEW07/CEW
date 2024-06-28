import React from "react";
import { industries } from "@/staticdata/static";
import Image from "next/image";
const Industries = () => {
  return (
    <main className="py-6">
      <div className="flex justify-center items-center flex-col xl:mx-32 max-sm:mx-5 sm:mx-10">
        <h1 className="text-center font-semibold xl:text-4xl text-3xl text-newgold">
          Industries We Serve
        </h1>
        <p className="max-galaxyFold:text-xs max-sm:text-sm text-lg text-center mt-6">
          Crown Engineering Works is a versatile provider of precision flexible
          solutions, catering to a diverse array of industries. Our commitment
          to quality, innovation, and client satisfaction positions us as a
          trusted partner in critical applications. Explore how our flexible
          solutions enhance efficiency and reliability across various sectors
        </p>
      </div>

      <section className="mt-10">
        <div className="xl:mx-32  grid small:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-12 max-sm:mx-5 sm:mx-10">
          {industries?.map((industry, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-offwhite flex text-center justify-center  text-lg  z-10 items-center px-4">
                  {industry.name}
                </h1>
              </div>
              <div className="w-full h-full">
                <Image
                  width={700}
                  height={700}
                  src={industry.image}
                  alt={industry.alt}
                  className=" object-cover shadow-lg rounded-md md:w-full md:h-full "
                />
              </div>
              <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Industries;
