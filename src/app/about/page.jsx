import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <main>
      <section>
        <div className="bg-offwhite">
          <div className="grid lg:grid-cols-2 mt-16 gap-10 mx-5 md:mx-20 xl:mx-32  pb-20 ">
            <div className="relative aspect-video lg:aspect-square max-lg:order-2 ">
              <Image
                fill
                src="/assests/images/OurStory.jpg"
                className=" object-cover shadow-lg rounded-md w-full mt-2 h-full "
                alt="Hero Background"
              />
            </div>
            <div className="flex flex-col justify-center lg:max-xl:my-3">
              <h1 className="text-3xl md:text-4xl font-semibold text-newgold">
                Our story
              </h1>
              <p className="max-smallest:text-xs text-sm sm:text-base lg:text-lg mt-6">
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

          <div className="w-full ">
            <Image
              src="/assests/icons/WaveTop.png"
              alt="waves"
              width={500}
              height={400}
              className="w-full -mb-[1px] sm:-mb-[3px]"
            />
          </div>
          <section className="bg-elementColor pt-20 pb-20 md:px-20 px-10">
            <h1 className="text-textColor text-3xl md:text-4xl text-center  font-semibold ">
              About us
            </h1>
            <div className="flex flex-col justify-center items-center ">
              <p className="text-textColor max-smallest:text-xs text-sm sm:text-base lg:text-lg mt-3 text-center max-w-6xl">
                Crown Engineering Works, an ISO 9001:2015 certified company,
                specializes in manufacturing hose assemblies and fluid
                connectors, including FDA-approved, Hydraulic, Stainless Steel
                Flexible, Thermoplastic, PTFE, Industrial, Composite, Silicone,
                and PVC hoses. Our commitment to upholding the highest standards
                guarantees that every product meets stringent quality standards
              </p>
              <p className="text-textColor max-smallest:text-xs text-sm sm:text-base lg:text-lg mt-3 text-center max-w-6xl">
                We have formed trusted partnerships with key corporations in the
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
              src="/assests/icons/WaveBottom.png"
              alt="waves"
              width={500}
              height={400}
              className="w-full"
            />
          </div>

          <div className="grid lg:grid-cols-2 mt-16 gap-10 mx-5 md:mx-20 xl:mx-32 pb-20 ">
            <div className="relative aspect-video lg:aspect-square max-lg:order-2">
              <Image
                fill
                src="/assests/images/Mission.jpg"
                className=" object-cover shadow-lg rounded-md w-full mt-2 h-full "
                alt="Hero Background"
              />
            </div>
            <div className="flex flex-col justify-center lg:max-xl:my-3">
              <h1 className="text-3xl md:text-4xl font-semibold text-newgold">
                Our Vision
              </h1>
              <p className="max-smallest:text-xs text-sm sm:text-base lg:text-lg mt-6">
                To lead the global fluid conveyance industry with innovative,
                high-quality hose solutions, fostering growth and reliability
                worldwide
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-newgold mt-6">
                Our Mission
              </h1>
              <p className="max-smallest:text-xs text-sm sm:text-base lg:text-lg mt-2">
                Our mission is to manufacture and deliver premium hose products
                globally, leveraging advanced technology and prioritizing
                customer-focused service to exceed expectations and drive
                industry standards.
              </p>
            </div>
          </div>
        </div>
        <Image
          height={800}
          width={800}
          src="/assests/images/Waves.png"
          className="w-full rounded-md"
          alt="Hero Background"
        />
      </section>
      <div>
        <h1 className="text-newgold text-center  text-3xl font-semibold">
          Why Choose us
        </h1>
        <div>
          <h1>Decades of Expertise</h1>
        </div>
      </div>
    </main>
  );
};

export default About;
