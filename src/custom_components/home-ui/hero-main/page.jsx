import React from "react";
import Image from "next/image";
const HeroMain = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden ">
      <Image
        fill
        src="/assets/images/hero3.jpg"
        className="w-full h-full object-cover shadow-md"
        alt="Hero Background"
      />
      <div className="absolute inset-0 bg-black opacity-50  "></div>
      <div className="absolute inset-0 flex flex-col mt-36 items-center text-center text-white sm:px-10 px-5">
        <h2 className="text-xl smallest:text-2xl md:text-4xl lg:text-6xl font-bold">
          Pioneers in Fluid Conveyance Solutions
        </h2>
        <p className="max-w-5xl text-xs smallest:text-sm  lg:text-base mt-6">
          Since 1985, Crown Engineering Works has been at the forefront of
          providing high-quality hose solutions. Our extensive experience and
          ISO 9001:2015 certification ensure that we deliver top-notch products
          and services to our clients. With nearly four decades of expertise, we
          are committed to innovation and excellence
        </p>
        <div className="max-smallest:flex-col max-smallest:space-y-3 flex mt-6 space-x-3">
          <button className="px-4 py-2 text-xs smallest:text-sm  lg:text-base bg-newgold rounded-full">
            Explore Products
          </button>
          <button className="px-4 py-2 text-xs smallest:text-sm  lg:text-base border-2 border-newgold rounded-full">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
