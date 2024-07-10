import React from "react";
import Image from "next/image";
const HeroMain = () => {
  return (
    <div className="relative w-full  lg:h-[100vh] overflow-hidden">
      <Image
        fill
        src="/assests/images/hero3.jpg"
        className="w-full h-full object-cover shadow-md"
        alt="Hero Background"
      />
      <div className="absolute inset-0 bg-black opacity-50  "></div>
      <div className="absolute inset-0 flex flex-col mt-36 items-center text-center  text-white ">
        <h2 className="text-2xl lg:text-6xl font-bold">
          Pioneers in Fluid Conveyance Solutions
        </h2>
        <p className="max-w-5xl text-base mt-6">
          Since 1985, Crown Engineering Works has been at the forefront of
          providing high-quality hose solutions. Our extensive experience and
          ISO 9001:2015 certification ensure that we deliver top-notch products
          and services to our clients. With nearly four decades of expertise, we
          are committed to innovation and excellence
        </p>
        <div className="flex mt-6 space-x-3">
          <button className="px-4 py-2 bg-newgold rounded-full">
            Explore Products
          </button>
          <button className="px-4 py-2 border-2 border-newgold rounded-full">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
