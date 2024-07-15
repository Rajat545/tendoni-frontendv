import Image from "next/image";
import React from "react";
import Grand from "@Images/slider/grains.jpeg";
import {
  exportImport,
  foodDivisionGrains,
  foodDivisionVegetable,
} from "@/Data/foodDivision";
import Section from "@/components/Section/Section";

const GrainsSpices = () => {
  return (
    <>
      <div>
        <div className=" z-20">
          <Image
            src={Grand}
            alt="this is a image"
            className="
          lg:h-[80vh] h-auto w-full"
          />
        </div>

        <div>
          <Section
            title=" VARIETY & RANGE"
            id="food-division"
            subtitle="We are in the export and domestic supply of crop's &
          vegetables products in bulk."
          >
            <div>
              <div className="w-full flex justify-center ">
                {/* <div className="sm:col-span-0 md:col-span-2"></div> */}
                <div className=" col-span-12 md:col-span-8 container">
                  <div className=" flex justify-center items-center flex-col  ">
                    <p className="font-poppins px-0 py-3 md:py-5 first-letter:text-4xl text-left first-letter:font-bold first-letter:text-black text-sm md:text-base lg:text-lg">
                      Welcome to Tendoni Group, a trusted name in the global export of high-quality grains. With a rich legacy built on a foundation of excellence and sustainability, we are dedicated to supplying premium grains to markets around the world.
                      Tendoni Group has a proud heritage of providing top-tier grains globally. Our journey is marked by a steadfast commitment to quality, ethical sourcing, and a vision of contributing to global food security.
                    </p>
                    <p className="font-poppins px-0 md:py-5  text-left  first-letter:text-black text-sm md:text-base lg:text-lg">
                      At Tendoni Group, we offer a diverse portfolio of premium grains that meet the stringent quality standards our customers deserve. From hearty whole grains to specialized varieties, our selection caters to a range of culinary preferences and dietary needs
                      Tendoni Group holds globally recognized certifications, including ISO standards and other relevant certifications, assuring our customers of the highest quality and safety standards.
                    </p>
                  </div>
                </div>
                {/* <div className="sm:col-span-0 md:col-span-2"></div> */}
              </div>
            </div>
          </Section>
          {/* <section className="w-full bg-white  ">
            <div>
              <div className={``}>
                <div
                  className={`box-border flex flex-col max-w-7xl  md:py-8 items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row`}
                >
                  <div
                    className={`box-border  relative w-full max-w-md  mt-5 mb-4  text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2  `}
                  >
                    <Image
                      src="https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg"
                      // className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"
                      alt="..."
                    />
                  </div>

                  <div
                    className={`  box-border text-wrap w-full text-black border-solid md:w-1/2 md:pl-10 `}
                  >
                    <h2 className="text-[#8E6A3E] m-0 text-xl text-balance font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                      Grains
                    </h2>
                    <p className="pt-4 pb-8 m-0 leading-7  text-gray-700 border-0 border-gray-300 sm:pr-12 = ">
                      Our Company is engaged into trading and marketing of
                      agricultural produce and commodities such as sugar, spices
                      like dry red chillies, turmeric, coriander, cumin seeds,
                      food grains like rice, wheat, corn, sorghum and tea,
                      pulses and agricultural feed like soyabean meal and rice
                      bran de-oiled cake. We import lentils, faba beans, black
                      Matpe, and toor (Pigean Peas) in India in bulk quantities.
                      Our major imports are from Canada, Australia and Burma. We
                      are B2Btraders, highly specialized in sugar, corn and dal.
                      We maintain stocks and distribute them to different
                      institutional parties like manufacturers, exporters, etc.
                      We provide them in bulk quantities. We follow standard
                      packing process to ensure that quality and authentic taste
                      of commodities remains intact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <div>
            {/* <div className=" py-4 md:py-4">
              <div className="container md:px-4 px-8 mx-auto">
                <div className="md:text-center max-w-2xl sm:px-2 mx-auto">
                  <h1 className="text-3xl md:text-4xl font-medium mb-2">
                    VARIETY & RANGE
                  </h1>
                  <h1 className="text-2xl md:text-2xl font-medium mb-2">
                    We are in the export and domestic supply of crop&apos;s &
                    vegetables products in bulk.
                  </h1>

                  <div className="mt-4"></div>
                </div>
              </div>
            </div> */}
            <Section id="whatweoffer">
              <div className="w-full">
                <div className="">
                  <p className="text-[#8E6A3E] first-letter:font-bold font-bold -mt-5">
                    WHAT WE OFFER
                  </p>
                  <h2 className=" m-0 text-xl text-balance font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                    Our Vegetables
                  </h2>
                </div>

                <div className="md:py-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
                  {foodDivisionGrains?.map((item) => (
                    <div key={item?.title} className="w-full">
                      <h1 className="text-4xl py-2 md:py-4 font-bold text-[#8E6A3E]">
                        {item?.title}
                      </h1>
                      <div className="border-b-2 border-[#8E6A3E] w-full md:w-[80%] mb-2 md:mb-0"></div>
                      {item?.points?.map((data, index) => (
                        <p key={index} className="font-poppins py-1 md:py-2 text-gray-500 text-sm md:text-base lg:text-lg">
                          {data}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </Section>
            {/* <div className="w-full flex justify-center">
              <div className="grid lg:grid-cols-2 md:grid-cols-2 bg-no-repeat py-10  container  sm:mx:0">
                <div className="bg-no-repeat  flex justify-end text-center ">
                  <div className=" text-left lg:p-2 md:p-2 sm:p-0 md:mx-3 sm:mx-0 lg:mx-4 ">
                    <h2 className="p-2 m-0 text-xl text-balance font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                      Global Distribution Network
                    </h2>
                    <h2 className="p-2 m-0 text-sm text-[#8E6A3E] text-balance font-semibold leading-tight border-0 border-gray-300 lg:text-xl md:text-base">
                      Explore Our Bounty of Fresh Produce
                    </h2>
                    <p className="p-2 font-medium text-gray-500">
                      Tendoni Group's global distribution network ensures that our premium grains reach every corner of the world. Our efficient logistics and distribution channels guarantee the timely delivery of quality grains to our valued customers.
                    </p>
                    <h2 className="p-2 m-0 text-sm text-[#8E6A3E] text-balance font-semibold leading-tight border-0 border-gray-300 lg:text-xl md:text-base">
                      Explore Our Bounty of Fresh Produce
                    </h2>
                    <p className="p-2 font-medium text-gray-500">
                      Tendoni Group's global distribution network ensures that our premium grains reach every corner of the world. Our efficient logistics and distribution channels guarantee the timely delivery of quality grains to our valued customers.
                    </p>

                    <div className="">
                      <div>
                        <h2 className="p-2 m-0 text-sm text-[#8E6A3E] text-balance font-semibold leading-tight border-0 border-gray-300 lg:text-xl md:text-base">
                          Why Choose Tendoni Group
                        </h2>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                          <li
                            className="box-border relative py-1 md:pl-4 text-left text-gray-500 border-solid"
                          >
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#A57C46] rounded-full">
                              <span className="text-sm font-bold">✓</span>
                            </span>{" "}
                            Unparalleled Quality
                          </li>
                          <li
                            className="box-border relative py-1 md:pl-4 text-left text-gray-500 border-solid"
                          >
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#A57C46] rounded-full">
                              <span className="text-sm font-bold">✓</span>
                            </span>{" "}
                            Sustainability Matters
                          </li>
                          <li
                            className="box-border relative py-1 md:pl-4 text-left text-gray-500 border-solid"
                          >
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#A57C46] rounded-full">
                              <span className="text-sm font-bold">✓</span>
                            </span>{" "}
                            Global Expertise
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" rounded-md object-cover bg-no-repeat sm:pt-2  bg-[url(https://www.umaexports.net/images/bg-image/col-bgimage-1.jpg)]"></div>
              </div>
            </div> */}

            {/* === */}

            {/* == */}
          </div>
        </div>
      </div>
    </>
  );
};
export default GrainsSpices;
