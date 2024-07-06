import React from "react";
import { Button } from "@/components/ui/button";

const HeroSubMain = () => {
  return (
    <section className="w-[100%] h-[70vh] flex lg:flex-row flex-col ">
      <div className="lg:w-[50%] w-[100%] h-[50vh] lg:h-[auto] flex justify-center items-center flex-col gap-5  bg-offwhite">
        <span className="text-xl lg:text-3xl text-black">
          Checkout our services
        </span>
        <span>Coming soon....!!!</span>
        <Button variant="goldbtn">Services</Button>
      </div>
      <div className="lg:w-[50%]  w-[100%] h-[50vh] lg:h-[auto] bg-newgold flex justify-center items-center flex-col gap-5">
        <span className="text-xl lg:text-3xl text-offwhite">
          How can we help you ?
        </span>
        <span className="text-offwhite">Coming soon....!!!</span>
        <Button variant="whitegold">Request Information</Button>
      </div>
    </section>
  );
};

export default HeroSubMain;
