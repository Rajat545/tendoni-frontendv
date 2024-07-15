"use client";
import Image from "next/image";
import React, { useState } from "react";
import pharmaceutica from "@Images/hero-images/fertilizer.jpeg";
import AccordionItem from "../pharmaceutical/accodition";
import AccordionItem2 from "../pharmaceutical/accorditon2";
import AccorditionGloble from "../AccorditonGloble";
import { fertilizer } from "@/Data/chemical";
import Section from "@/components/Section/Section";

const Fertilizers = () => {

  const content = {
    title: "Fertilizers Export from India",
    subHeader:
      "An approved service provider for meeting global Fertilizers needs!",
    intro:
      "Mediwin Fertilizers is a renowned WHO-GMP-certified company striving to cater to every citizen. We began with a commitment to creating better health quality for all by conducting apt research, manufacturing, and marketing and aspiring to continue our quest. Our company is based in Ahmedabad, Gujarat; however, we facilitate pharmaceutical export from India to different regions worldwide. We offer practical and safe formulations for domestic and international markets.",
    intro2:
      "We have a team of experts and professionals who helped our company achieve success at every turn of our journey. We currently export 225 products in over 20 countries. However, our aim is to reach 50 countries and extend our services to 350 medicine exports from India by 2030. We work hard to strengthen and enhance our core competencies to become a preferred choice and explore new market opportunities",
  };
  return (
    <>
      <div className="">
        <div className="flex z-20">
          <Image
            src={pharmaceutica}
            alt="this is a image"
            // w-[120px] md:w-[140px] lg:w-[120px] xl:w-[150px]

            className="lg:h-[80vh] h-auto w-full"
          />
        </div>
        {/* <div className="bg-slate-200">
          <div className=" px-6 flex flex-col sm:flex-row justify-between container mx-auto  max-w-7xl py-6 sm:py-12">
            <div className=" font-bold text-2xl sm:text-3xl mb-4 sm:mb-0">
              <h1>Let’s Build </h1>
              <h1>Something Together</h1>
            </div>
            <div>
              <button
                onClick={downloadBrochure}
                className="bg-[#7C5F3B] hover:bg-[#AA804C] text-white font-bold py-2 px-4 rounded-full"
              >
                Download brochure
              </button>
            </div>
          </div>
        </div> */}

        <Section id="pharma">
          <div className="-mt-3 md:mt-0 w-full">
            <div className="">
              <p className=" font-bold mb-4 text-2xl lg:text-5xl md:text-5xl text-[#A67A44]">
                {content.title}
              </p>
              <p className="mb-4 text-left text-sm md:text-base lg:text-lg  m-0 leading-6 md:leading-7  text-gray-700 border-0 border-gray-300 ">
                {content.intro}
              </p>
              <p className="mb-4 text-left text-sm md:text-base lg:text-lg  m-0 leading-6 md:leading-7  text-gray-700 border-0 border-gray-300 ">
                {content.intro2}
              </p>
            </div>
          </div>
          <div className="text-lg md:text-xl lg:text-2xl py-2 text-[#A67A44] font-bold w-full">
            <h1>GUT RELAXANTS & PROKINETICS</h1>
          </div>
          <div className="pb-10 w-full">
            {/* <div className="pb-10"> */}
              <AccorditionGloble accorditiondata={fertilizer} />
            {/* </div> */}
          </div>
        </Section>
      </div>
    </>
  );
};
export default Fertilizers;
