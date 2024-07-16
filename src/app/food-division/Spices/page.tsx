"use client"
import Section from "@/components/Section/Section";
import React from "react";
import spices from "@Images/slider/spicesbackground.jpg";
import Image from "next/image";
import { foodDivisionMasalas } from "@/Data/foodDivision";
import ScrollAnimation from "@/utils/ScrollAnimation";
import Grand from "@Images/slider/spices.jpeg";


const Spices = () => {
  return (
    <>
      <div className=" z-20">
        <Image
          src={Grand}
          alt="this is a image"
          className="
          lg:h-[80vh] h-auto w-full"
        />
      </div>
      <div>
        <section className="w-full bg-white ">
          <div className="py-6 md:py-8 lg:py-10">
            {foodDivisionMasalas?.map((item, index) => (
              <ScrollAnimation key={index}>
                
              <section
              key={index}
                id={item?.sectionId}
                className={`${index % 2 === 0 ? "py-6  md:py-8 lg:py-10" : "bg-stone-300 py-6  md:py-8 lg:py-14"}`}
              >
                <div
                  // style={{
                  //   backgroundColor:
                  //     index % 2 == 0 ? item.backgroundColor : "transparent",
                  // }}

                  key={index}
                  // max-w-7xl
                  className={`box-border flex flex-col max-w-7xl  items-center content-center px-4 md:px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row   ${
                    index % 2 === 0 ? "" : ""
                  } `}
                >
                  <div
                    className={` flex justify-center box-border relative w-full max-w-md px-4 md:px-8 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10 ${
                      index % 2 === 0 ? "order-first " : ""
                    }`}
                  >
                    {/* <Image
                      src={JSON.stringify(item.imageSrc)}
                      className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"
                      alt={`Productivity ${index}`}
                    /> */}
                    <Image
                      src={item.imageSrc}
                      alt="this is a image"
                      // w-[120px] md:w-[140px] lg:w-[120px] xl:w-[150px]
                      className="
                    lg:w-1/2 imgWidth
"
                    />
                  </div>

                  <div
                    className={`py-8  box-border text-wrap w-full text-black border-solid md:w-1/2 md:pl-10 ${
                      index % 2 !== 0 ? "md:order-first" : ""
                    }`}
                  >
                    <h2 className="m-0 text-xl text-balance font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                      {item.title}
                    </h2>
                    <p className="py-3 md:pt-4 md:pb-8 m-0 leading-7  text-gray-700 border-0 border-gray-300 sm:pr-12 text-sm md:text-base lg:text-lg">
                      {item.description}
                    </p>
                    <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                      {item.points.map((point, i) => (
                        <li
                          key={i}
                          className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid text-sm md:text-base lg:text-lg"
                        >
                          <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#A57C46] rounded-full">
                            <span className="text-sm font-bold">✓</span>
                          </span>{" "}
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
              </ScrollAnimation>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Spices;
