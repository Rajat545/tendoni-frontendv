"use client";
import Image from "next/image";
import React, { useState } from "react";
import pharmaceutica from "@Images/slider/foodchemicals.png";
import AccordionItem from "./accodition";
import AccordionItem2 from "./accorditon2";
import { pharmaAccordion } from "@/Data/chemical";
import AccordionItem3 from "./accodition3";
import AccorditonGloble from "../AccorditonGloble";
import AccorditionGloble from "../AccorditonGloble";
import Section from "@/components/Section/Section";
// import pdf from "../../../../public/Tendonicatalogue.pdf";

const Pharmaceutica = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openAccordion2, setOpenAccordion2] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const handleAccordionToggle2 = (index) => {
    setOpenAccordion2(openAccordion2 === index ? null : index);
  };
  function downloadBrochure() {
  
    const pdfFileName = "pdf";

  
    const anchor = document.createElement("a");
    anchor.href = pdfFileName;
    anchor.download = pdfFileName;

    // Append the anchor to the body
    document.body.appendChild(anchor);

    // Trigger a click on the anchor to start the download
    anchor.click();

    // Remove the anchor from the body
    document.body.removeChild(anchor);
  }

  const content = {
    title: "Pharma Export from India",
    subHeader:
      "An approved service provider for meeting global pharmaceutical needs!",
    intro:
      "Tendoni Group stands at the forefront of the global pharmaceutical industry, dedicated to supplying high-quality and innovative healthcare solutions to improve lives worldwide. With a commitment to excellence, ethics, and compliance, we are your trusted partner in pharmaceutical export.Discover a comprehensive range of pharmaceutical products at Tendoni Group, designed to address diverse medical needs. From life-saving medications to advanced therapeutic solutions, our portfolio is a testament to our dedication to global health.",
    intro2:
      "Rest assured, Tendoni Group adheres to the highest standards of regulatory compliance. Our pharmaceutical exports are meticulously documented and comply with the regulations of each destination country, ensuring seamless market access.",
  };
  return (
    <>
      <div className="">
        <div className="flex z-20">
          <Image
            src={pharmaceutica}
            alt=""
            // w-[120px] md:w-[140px] lg:w-[120px] xl:w-[150px]

            className="lg:h-[80vh] h-auto"
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
        <Section id="fertilizers">
          <div className=" w-full -mt-3 md:mt-0">
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
          <div className="text-lg md:text-xl lg:text-2xl py-2 w-full text-[#A67A44] font-bold">
            <h1>GUT RELAXANTS & PROKINETICS</h1>
          </div>
          <div className="pb-10 w-full">
            <AccorditionGloble accorditiondata={pharmaAccordion} />
          </div>
        </Section>
      </div>
    </>
  );
};
export default Pharmaceutica;
