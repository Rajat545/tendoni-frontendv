import React from "react";
// import Spices from "../Spice/page";
import Red from "@Images/slider/spices.png";

import Image from "next/image";
import {
  exportImport,
  foodDivisionGrains,
  foodDivisionVegetable,
} from "@/Data/foodDivision";
import Section from "@/components/Section/Section";
import Grand from "@Images/slider/spicesbackground.jpg";


const RawSpices = () => {
  return (
    <>
      <div>
        <div className="flex z-20">
          <Image
            src={Grand}
            alt=""
            className="
          lg:h-[80vh] h-auto"
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
              <div className=" sm:px-2 col-span-12 md:col-span-8 container">
                <div className=" flex justify-center items-center flex-col  ">
                  <p className="font-poppins px-0 py-3 md:p-5 first-letter:text-4xl text-left first-letter:font-bold first-letter:text-black ">
                    Our Company is engaged into trading and marketing of
                    agricultural produce and commodities such as sugar, spices
                    like dry red chillies, turmeric, coriander, cumin seeds,
                    food grains like rice, wheat, corn, sorghum and tea, pulses
                    and agricultural feed like soyabean meal and rice bran
                    de-oiled cake. We import lentils, faba beans, black Matpe,
                    and toor (Pigean Peas) in India in bulk quantities. Our
                    major imports are from Canada, Australia and Burma. We are
                    B2Btraders, highly specialized in sugar, corn and dal. We
                    maintain stocks and distribute them to different
                    institutional parties like manufacturers, exporters, etc. We
                    provide them in bulk quantities. We follow standard packing
                    process to ensure that quality and authentic taste of
                    commodities remains intact.
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
                  className={`box-border flex flex-col max-w-7xl md:py-8  items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row`}
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
                      Raw Spices
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
            <div className="container mx-auto px-8 max-w-7xl">
            <p className="text-[#8E6A3E] first-letter:font-bold font-bold">
              WHAT WE OFFER
            </p>
            <h2 className=" m-0 text-xl text-balance font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Our Vegetables
            </h2>
          </div>

          <div className="py-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 container mx-auto px-8 max-w-7xl">
            {foodDivisionGrains?.map((item) => (
              <div key={item?.title} className="w-full">
                <h1 className="text-4xl py-4 font-bold text-[#8E6A3E]">
                  {item?.title}
                </h1>
                <div className="border-b-2 border-[#8E6A3E] w-[80%]"></div>
                {item?.points?.map((data, index) => (
                  <p key={index} className="font-poppins py-2 text-gray-400">
                    {data}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 bg-no-repeat py-10  container lg:mx-4 md:px-24 px-7 sm:mx:0">
              <div className="bg-no-repeat  flex justify-end text-center ">
                <div className=" text-left lg:p-2 md:p-2 sm:p-0 md:mx-3 sm:mx-0 lg:mx-4 ">
                  <p className="p-2 text-[#8E6A3E] first-letter:font-bold font-bold">
                    WHY CHOOSE US?
                  </p>
                  <h2 className="p-2 m-0 text-xl text-balance font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                    Exports / Imports
                  </h2>
                  <p className="p-2 font-medium ">
                    WHY CHOOSE US? Exports / Imports Our network is spread all
                    over the world including India. The countries in which we
                    deal are inclusive
                  </p>

                  <div className="grid gap-4 grid-cols-2">
                    {exportImport.map((item) => (
                      <>
                        <div>
                          <h2 className="p-2 m-0 text-xl text-balance font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            Exports
                          </h2>
                          <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            {item?.exports?.map((point, i) => (
                              <li
                                key={i}
                                className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
                              >
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#A57C46] rounded-full">
                                  <span className="text-sm font-bold">✓</span>
                                </span>{" "}
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h2 className="p-2 m-0 text-xl text-balance font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            Imports
                          </h2>
                          <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            {item.imports.map((point, i) => (
                              <li
                                key={i}
                                className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
                              >
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#A57C46] rounded-full">
                                  <span className="text-sm font-bold">✓</span>
                                </span>{" "}
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>

              <div className=" rounded-md object-cover bg-no-repeat sm:pt-2  bg-[url(https://www.umaexports.net/images/bg-image/col-bgimage-1.jpg)]"></div>
            </div>
          </div>

            {/* === */}

            {/* == */}
          </div>
        </div>
      </div>
    </>
  );
};
export default RawSpices;
