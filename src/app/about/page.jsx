import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <main>
      <section className="bg-offwhite">
        <div className="flex  justify-center mb-10">
          <div className="grid lg:grid-cols-2 pt-16 gap-10 max-smallest:mx-5 smallest:max-sm:mx-10  max-xl:mx-20 max-w-[74rem] ">
            <div className="relative aspect-video lg:aspect-square max-lg:order-2 ">
              <Image
                fill
                src="/assets/images/OurStory.jpg"
                className=" object-cover shadow-lg rounded-md w-full mt-2 h-full "
                alt="Hero Background"
              />
            </div>
            <div className="flex flex-col justify-center lg:max-xl:my-3">
              <h1 className="text-3xl md:text-4xl font-semibold text-newgold">
                Our story
              </h1>
              <div className="flex justify-center">

              <p className="max-smallest:text-xs text-justify text-sm sm:text-base  lg:text-lg mt-6 max-smallest:mx-5 smallest:max-sm:mx-10  max-xl:mx-20 max-w-[74rem]">
                Abdul Majeed Khan established Crown Engineering Works in 1979
                with the intention of offering premium hydraulic hose assemblies
                and high-pressure hose fittings to diverse sectors. At the time
                of its establishment, it was one of several companies in Mumbai
                that assembled and offered high-pressure hydraulic hoses. Over
                the years, Crown Engineering Works has earned a reputation for
                quality and client satisfaction by working with large
                corporations and providing materials to a wide range of
                industries. Our commitment to high-quality products and
                exceptional customer service has made us a trusted and respected
                name in the engineering business.
              </p>
              </div>
            </div>
          </div>
          </div>

          <div className="w-full ">
            <Image
              src="/assets/icons/WaveTop.png"
              alt="waves"
              width={500}
              height={400}
              className="w-full -mb-[1px] sm:-mb-[3px]"
            />
          </div>
          <section className="bg-newgold pt-20 pb-20 md:px-20 px-10">

            <h1 className="text-3xl md:text-4xl text-center text-white font-semibold ">
              About us
            </h1>
            <div className="flex flex-col justify-center items-center text-white   ">
              <p className="max-smallest:text-xs text-sm sm:text-base lg:text-lg mt-3 text-justify max-w-6xl ">
                Crown Engineering Works, an ISO 9001:2015 certified company,
                specializes in manufacturing hose assemblies and fluid
                connectors, including FDA-approved, Hydraulic, Stainless Steel
                Flexible, Thermoplastic, PTFE, Industrial, Composite, Silicone,
                and PVC hoses. Our commitment to upholding the highest standards
                guarantees that every product meets stringent quality standards.We have formed trusted partnerships with key corporations in the
                pharmaceutical, food, defense, oil, industrial manufacturing,
                and renewable energy sectors. Our success is built on strong
                relationships and a deep understanding of our clients' needs,
                allowing us to provide tailored solutions. Crown Engineering
                Works is more than just a supplier; we are partners in our
                clients' success, dedicated to providing businesses globally
                with persistent, high-performance solutions they can trust.
              </p>
             
            </div>
          </section>
          <div className="w-full ">
            <Image
              src="/assets/icons/WaveBottom.png"
              alt="waves"
              width={500}
              height={400}
              className="w-full"
            />
          </div>

          <div className="flex  justify-center">
           
            

          <div className="grid lg:grid-cols-2 mt-16 gap-10 max-smallest:mx-5 smallest:max-sm:mx-10  max-xl:mx-20 max-w-[74rem] ">
            <div className="relative aspect-video lg:aspect-square max-lg:order-2">
              <Image
                fill
                src="/assets/images/Mission.jpg"
                className=" object-cover shadow-lg rounded-md w-full mt-2 h-full "
                alt="Hero Background"
              />
            </div>
            <div className="flex flex-col justify-center lg:max-xl:my-3">
              <h1 className="text-3xl md:text-4xl font-semibold text-newgold">
                Our Vision
              </h1>
              <p className="max-smallest:text-xs text-sm sm:text-base text-justify lg:text-lg mt-6">
                To lead the global fluid conveyance industry with innovative,
                high-quality hose solutions, fostering growth and reliability
                worldwide
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-newgold mt-6">
                Our Mission
              </h1>
              <p className="max-smallest:text-xs text-sm sm:text-base text-justify lg:text-lg mt-2">
                Our mission is to manufacture and deliver premium hose products
                globally, leveraging advanced technology and prioritizing
                customer-focused service to exceed expectations and drive
                industry standards.
              </p>
            </div>
          </div>
 
      
          </div>

         
       
      </section>
      <div className="flex justify-center bg-offwhite pt-10">

      <div className=" max-smallest:mx-5 smallest:max-sm:mx-10  max-xl:mx-20 max-w-[74rem]">
        <h1 className="text-newgold text-center  text-3xl font-semibold">
          Why Choose us
        </h1>
        <div>
          <h1>Decades of Expertise</h1>
          <h1>Commitment to Quality</h1>
          <h1>Custom Solutions</h1>

          <h1>Client-Centric Approach</h1>
          <h1>Industry  Partnership</h1>
          <h1>Innovation and Technology</h1>
          <h1>Global Reach</h1>
        </div>
      </div>
      </div>
    </main>
  );
};

export default About;
 



