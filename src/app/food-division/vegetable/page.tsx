import React from "react";
import spices from "@Images/slider/spicesbackground.jpg";
import Image from "next/image";
import Section from "@/components/Section/Section";
import { foodDivisionVegetable, exportImport } from "@/Data/foodDivision";
import HeroImage from "@Images/hero-images/fruit-vergitable.jpeg";
import Banner from "@Images/slider/slider-three.jpeg"
const Vegetable = () => {
  return (
    <div>
      <div className=" z-20">
        <Image
          src={Banner}
          alt="this is a image"
          
          className="lg:h-[80vh] h-auto w-full"
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
                    At Tendoni Group, we take pride in being a leading name in the export of premium fresh fruits and vegetables across the globe. Our journey is rooted in a commitment to excellence, sustainability, and delivering nature's goodness to your doorstep, established with a passion for cultivating and exporting the finest produce, Tendoni Group has evolved into a global player with a reputation for uncompromising quality and customer satisfaction. Our story is one of dedication to ethical practices, sustainable farming, and a relentless pursuit of freshness.
                  </p>
                  <p className="font-poppins px-0 md:py-5 text-left  first-letter:text-black text-sm md:text-base lg:text-lg">
                    From the orchards to your table, experience the unparalleled taste of our diverse range of fresh fruits. Whether it's the crisp sweetness of apples, the juiciness of tropical delights, or the tangy burst of citrus, our fruits embody the essence of premium quality.
                    Discover a kaleidoscope of colors and flavors with our vibrant assortment of vegetables. From garden-fresh greens to the robust crunch of root vegetables, Tendoni Group delivers a spectrum of options to elevate your culinary experience.
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
                className={`box-border flex flex-col max-w-7xl md:py-8 lg:py-8 items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row`}
              >
                 <div
                  className={`box-border  relative w-full max-w-md  mt-5 mb-4  text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2  `}
                >
                  <Image
                    src="https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg"
                  // className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"
                  // alt={`Productivity ${index}`}
                  />
                </div>

                <div
                  className={`  box-border text-wrap w-full text-black border-solid md:w-1/2 md:pl-10 `}
                >
                  <h2 className="text-[#8E6A3E] m-0 text-xl text-balance font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                    Vegetables
                  </h2>
                  <p className="pt-4 pb-8 m-0 leading-7  text-gray-700 border-0 border-gray-300 sm:pr-12 = ">
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
            </div>
          </div>
        </section> */}
        <div>
          {/* <div className=" py-4 md:py-4">
            <div className="container md:px-4 px-8 mx-auto">
              <div className="md:text-center max-w-2xl sm:px-2 mx-auto">
                <h1 className="text-3xl md:text-4xl font-medium mb-2 text-[#8E6A3E]">
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
              <div className=" mx-auto ">
                <p className="text-[#8E6A3E] first-letter:font-bold font-bold -mt-5">
                  WHAT WE OFFER
                </p>
                <h2 className=" m-0 text-xl text-balance font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                  Our Vegetables
                </h2>
              </div>

              <div className=" md:py-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-4">
                {foodDivisionVegetable?.map((item) => (
                  <div key={item?.title} className="w-full">
                    <h1 className="text-4xl py-2 md:py-4 font-bold text-[#8E6A3E]">
                      {item?.title}
                    </h1>
                    <div className="border-b-2 border-[#8E6A3E] w-full md:w-[80%] mb-2 ld:mb-0"></div>
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

          <Section id="whatweoffer">
            <div className="w-full">
              <div className=" mx-auto ">
                <p className="text-[#8E6A3E] first-letter:font-bold font-bold -mt-5">
                  WHAT WE OFFER
                </p>
                <h2 className=" m-0 text-xl text-balance font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                  Our Fruits
                </h2>
              </div>

              <div className=" md:py-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-4">
                {foodDivisionVegetable?.map((item) => (
                  <div key={item?.title} className="w-full">
                    <h1 className="text-4xl py-2 md:py-4 font-bold text-[#8E6A3E]">
                      {item?.title}
                    </h1>
                    <div className="border-b-2 border-[#8E6A3E] w-full md:w-[80%] mb-2 ld:mb-0"></div>
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
        </div>
      </div>
    </div>
  );
};
export default Vegetable;
