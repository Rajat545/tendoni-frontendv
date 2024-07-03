"use client";
import Image from "next/image";
import React, { useState } from "react";
import pharmaceutica from "@Images/slider/slider-six.jpeg";
import AccordionItem from "../pharmaceutical/accodition";
import AccordionItem2 from "../pharmaceutical/accorditon2";
import { foodChemical } from "@/Data/chemical";
import AccorditionGloble from "../AccorditonGloble";
import Section from "@/components/Section/Section";

const FoodChemical = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openAccordion2, setOpenAccordion2] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const handleAccordionToggle2 = (index) => {
    setOpenAccordion2(openAccordion2 === index ? null : index);
  };
  function downloadBrochure() {
    // Replace 'path/to/brochure.pdf' with the actual path to your PDF file.
    const pdfPath = process.env.PUBLIC_URL + "/Tendonicatalogue.pdf";

    // Create an anchor element
    const anchor = document.createElement("a");
    anchor.href = pdfPath;
    anchor.download = "brochure.pdf";

    // Append the anchor to the body
    document.body.appendChild(anchor);

    // Trigger a click on the anchor to start the download
    anchor.click();

    // Remove the anchor from the body
    document.body.removeChild(anchor);
  }

  const content = {
    title: "Food Chemical Export from India",
    subHeader:
      "An approved service provider for meeting global Food Chemical needs!",
    intro:
      "Tendoni Group takes pride in being a leading global exporter of high-quality food chemicals, playing a pivotal role in enhancing the taste, safety, and innovation of food products worldwide. With a commitment to excellence and compliance, we are your trusted partner in the realm of food chemistry At Tendoni Group, our vision is to contribute to the global food industry by providing top-tier food chemicals that enable culinary innovation, ensure food safety, and meet the diverse needs of consumers around the world.",
    intro2:
      "Discover a diverse portfolio of food chemicals at Tendoni Group designed to meet the dynamic requirements of the food and beverage industry. From preservatives to flavor enhancers, our range is crafted to elevate the quality and safety of food products. Our commitment to innovation drives our continuous research and development efforts. Tendoni Group collaborates with food scientists and industry experts to deliver cutting-edge solutions that address the evolving demands of the global food market.",
  };
  return (
    <>
      <div className="">
        <div className=" z-20">
          <Image
            src={pharmaceutica}
            alt=""
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

        <Section id="foodChemical">
          <div className="-mt-3 md:mt-0 w-full">
            <div className="">
              <p className=" font-bold mb-4 text-2xl lg:text-5xl md:text-5xl text-[#A67A44]">
                {content.title}
              </p>
              <p className="mb-4  text-left text-sm md:text-base lg:text-lg  m-0 leading-6 md:leading-7  text-gray-700 border-0 border-gray-300 ">
                {content.intro}
              </p>
              <p className="mb-4  text-left text-sm md:text-base lg:text-lg  m-0 leading-6 md:leading-7  text-gray-700 border-0 border-gray-300 ">
                {content.intro2}
              </p>
            </div>
          </div>
          <div className="text-lg md:text-xl lg:text-2xl py-2 text-[#A67A44] font-bold w-full">
            <h1>GUT RELAXANTS & PROKINETICS</h1>
          </div>
          <div className="pb-10 w-full">
            <AccorditionGloble accorditiondata={foodChemical} />
          </div>
        </Section>

      </div>
    </>
  );
};
export default FoodChemical;
