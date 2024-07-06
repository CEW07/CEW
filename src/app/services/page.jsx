import React from "react";
import { services } from "@/staticdata/static";
import Image from "next/image";
const Services = () => {
  return (
    <section className="mt-10 py-4">
      <div className="flex justify-center items-center flex-col xl:mx-32 max-sm:mx-5 sm:mx-10">
        <h1 className="text-center font-semibold xl:text-4xl text-3xl text-newgold">
          Quality Testing at Crown Engineering Works
        </h1>
        <p className="max-galaxyFold:text-xs max-sm:text-sm text-lg text-center mt-6">
          Discover the comprehensive range of fluid engineering services
          provided by Crown Engineering Works. Our commitment to excellence
          extends across various aspects of the flexible solutions we offer.
        </p>
      </div>
      <div className="xl:mx-32 grid md:grid-cols-2 gap-6 xl:gap-12 max-sm:mx-5 sm:mx-10">
        {services?.map((service, index) => (
          <div key={index} className="relative">
            <div className="absolute inset-0 px-4 mt-10">
              <h1 className="text-offwhite  max-galaxyFold:text-base relative text-lg lg:text-2xl z-10 items-center px-4">
                {service.name}
              </h1>
              <p className="text-offwhite mt-6 relative  max-galaxyFold:text-base text-lg  z-10 items-center px-4">
                {service.detail}
              </p>
            </div>
            <div className="w-full h-full">
              <Image
                width={700}
                height={700}
                src="https://static7.depositphotos.com/1010683/702/i/450/depositphotos_7025209-stock-photo-cement-factory-at-night.jpg"
                alt={service.alt}
                className=" object-cover shadow-lg rounded-md md:w-full md:h-full "
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
