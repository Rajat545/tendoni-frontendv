import Image from "next/image";
import React from "react";
import handshake from "@Images/svgs/Handshake.jpg";
import dockyard from "@Images/slider/dockyard.jpg";
import Section from "@/components/Section/Section";
import Map from "@Images/svgs/Asset 1.svg";
import { international, internationalCardData } from "@/Data/international";
import AwardIcon from "@Images/award-icon.png"
import Countries from "@/components/HomeComponents/Countries";
const InternationalTradePage = () => {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <Image
          src={dockyard}
          alt="this is a image"
          className="lg:h-[80vh] h-[50vh]"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full" style={{ backdropFilter: "brightness(0.5)" }}>
          <Section id="hero">
            <div className="w-full">
              <div className="w-full lg:w-[40%]">
                <p className="text-white text-3xl md:text-4xl lg:text-5xl font-bold ">Award-winning global food and drink exporter</p>
                <p className="text-white text-base md:text-lg lg:text-xl mt-4">Smylies deliver end to end export solutions, trusted by some of the world's leading retailers to deliver the UK's biggest and best brands around the world.</p>
              </div>
            </div>
          </Section>
        </div>
      </div>


      <Section
        title="International Trade"
        id="international"
        subtitle="Global Food Importers & Exporters"
      >
        <p className="px-0 md:p-0 lg:py-3 first-letter:text-4xl text-left first-letter:font-bold first-letter:text-black text-sm md:text-base lg:text-lg leading-7">
          As the ‘land of spices’, India exports tons of various kinds of food. In fact, food export from India is a major source of revenue. To help your products reach to even the farthest corners of the world, Tendoni Group offers you various types of food export as well as spices export from India. Being among the leading food export companies in India, we ensure our services conform to international quality standards
        </p>
      </Section>
      <Section>
        <div className="w-full lg:flex  items-center justify-center -mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12">
          <div className="w-full lg:w-auto mb-6 md:mb-3  lg:mb-0  h-[100%]">
            <Image
                src={handshake}
                alt="Quality"
                //width={500}
                // height={500}
                className="rounded-2xl w-full h-full lg:w-[500px] lg:h-[500px]"
                // sizes="(max-height: 500px) 100vw, (max-height: 100%) 50vw, 33vw"
                // fill={true}
                // layout="fill"
                // object-fit="cover"
              />
          </div>
          <div className="flex-1 lg:px-4 w-full flex flex-col items-center">
            <div className="w-full">
              <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight md:text-4xl font-heading  border-l-4 pl-4 border-[#8E6A3E]">
                International Trade
              </h2>
              {/* <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-sm md:text-base lg:text-base">
                never been easier to build a business of your own.
                Our tools will help you with the following:
              </p> */}
              <p className="mb-4 font-medium tracking-tight  xl:mb-6 text-sm md:text-base lg:text-base">
              Tendoni is a dynamic player in international trade, specializing in a wide spectrum of products such as food chemicals, fresh fruits, vegetables, masalas, and pharmaceuticals. Our commitment to facilitating global commerce is reflected in the seamless distribution of high-quality goods to destinations across the world.
              </p>
              <p className="mb-4 font-medium tracking-tight  xl:mb-6 text-sm md:text-base lg:text-base">
              With a focus on excellence, Tendoni ensures that every product in our portfolio meets stringent quality standards. From essential food chemicals catering to diverse industries to fresh and flavorful fruits and vegetables, aromatic masalas, and reliable pharmaceuticals, our offerings are designed to meet the varied demands of international markets.
              </p>
              <p className="mb-4 font-medium tracking-tight  xl:mb-6 text-sm md:text-base lg:text-base">
              Tendoni takes pride in its role as a global trade partner, connecting producers and consumers with efficiency and reliability. Our commitment to ethical business practices, adherence to international regulations, and a robust supply chain make us a trusted choice for international trade in food, spices, and pharmaceuticals. As we navigate the complexities of global markets, Tendoni stands as a beacon of quality and integrity in facilitating the seamless exchange of goods worldwide.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <div className="w-full bg-gray-100 lg:my-10 xl:my-12">
        <Section>
          <div className="w-full -mt-9">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold md:mb-6 lg:mb-12">WHY CHOOSE US ?</p>
            <div className="md:flex md:mt-8 gap-4 lg:gap-8">
              <div className="flex flex-1 gap-2 mt-6 md:mt-0">
                <div className="rounded-full h-[46px] w-[46px] bg-accentColor">
                  <p className=" text-white font-bold text-lg md:text-xl w-[46px] h-[46px] text-center flex items-center justify-center">01</p>
                </div>
                <div>
                  <p className=" text-sm md:text-base font-bold">Get Buyers for Your Food Products</p>
                  <p className=" leading-tight mt-3 text-sm md:text-base lg:text-lg">No matter the type of food or spice you plan on exporting, we will ensure that you get genuine buyers for your products who meet your expectations.</p>
                </div>
              </div>
              <div className="flex flex-1 gap-2 mt-6 md:mt-0">
                <div className="rounded-full h-[46px] w-[46px] bg-accentColor">
                  <p className=" text-white font-bold text-lg md:text-xl w-[46px] h-[46px] text-center flex items-center justify-center">02</p>
                </div>
                <div>
                  <p className=" text-sm md:text-base font-bold">Best quality food trading services</p>
                  <p className=" leading-tight mt-3 text-sm md:text-base lg:text-lg">Our stringent policies make sure that food handling and trading is in accordance with international quality standards.</p>
                </div>
              </div>
            </div>
            <div className="md:flex md:mt-8 gap-4 lg:gap-8">
              <div className="flex flex-1 gap-2 mt-6 md:mt-0">
                <div className="rounded-full h-[46px] w-[46px] bg-accentColor">
                  <p className=" text-white font-bold text-lg md:text-xl w-[46px] h-[46px] text-center flex items-center justify-center">03</p>
                </div>
                <div>
                  <p className=" text-sm md:text-base font-bold">Global Presence</p>
                  <p className=" leading-tight mt-3 text-sm md:text-base lg:text-lg">Even if you are planning to export across multiple continents, we’ve got you covered. Our global presence will allow your products to be exported to various countries.</p>
                </div>
              </div>
              <div className="flex flex-1 gap-2 mt-6 md:mt-0">
                <div className="rounded-full h-[46px] w-[46px] bg-accentColor">
                  <p className=" text-white font-bold text-lg md:text-xl w-[46px] h-[46px] text-center flex items-center justify-center">04</p>
                </div>
                <div>
                  <p className=" text-sm md:text-base font-bold">Market Analysis & Up-to-date Market Information</p>
                  <p className=" leading-tight mt-3 text-sm md:text-base lg:text-lg">Our thorough and regular analysis and research let us update our database with up to date information on the market and allows us to stay on top of every update.</p>
                </div>
              </div>
            </div>
            <div className="md:flex md:mt-8 gap-4 lg:gap-8">
              <div className="flex flex-1 gap-2 mt-6 md:mt-0">
                <div className="rounded-full h-[46px] w-[46px] bg-accentColor">
                  <p className=" text-white font-bold text-lg md:text-xl w-[46px] h-[46px] text-center flex items-center justify-center">05</p>
                </div>
                <div>
                  <p className=" text-sm md:text-base font-bold">Reliable & Trusted Services</p>
                  <p className=" leading-tight mt-3 text-sm md:text-base lg:text-lg">Trust is a pillar of our services. Our transparent and reliable operations ensure that you feel at ease with our services.</p>
                </div>
              </div>
              <div className="flex flex-1 gap-2 mt-6 md:mt-0">
                <div className="rounded-full h-[46px] w-[46px] bg-accentColor">
                  <p className=" text-white font-bold text-lg md:text-xl w-[46px] h-[46px] text-center flex items-center justify-center">06</p>
                </div>
                <div>
                  <p className=" text-sm md:text-base font-bold">Save your time & cost for searching markets</p>
                  <p className=" leading-tight mt-3 text-sm md:text-base lg:text-lg">Understanding and researching the market by yourself can be expensive and time-consuming. But with Pisum, we will do that for you instead.</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
      <Section id="services" title="Our Global Export ">
      <div className=" flex flex-wrap justify-between">
        {internationalCardData.map((item, index) => (
          <div key={index} className="w-full md:w-[49%] md:gap-2 bg-white rounded-[20px] md:my-3 shadow-2 hover:shadow-lg dark:bg-dark-2">
            <div className="lg:mb-9 md:py-4 lg:py-0 rounded-[20px]  py-4 lg:p-8 lg:px-7 xl:px-10">
              <div className="mb-4 lg:mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-accentColor">
                {/* {item.icon} */}
                <Image
                  src={item.icon}
                  alt="this is a image"
                  className="lg:h-[38px] lg:w-[38px] h-auto"
                />
              </div>
              <h4 className="mb-[10px] md:mb-[14px] text-2xl font-semibold text-accentColor">
                {item.title}
              </h4>
              <p className="text-body-color dark:text-dark-6 text-sm md:text-base lg:text-lg">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
      </Section>
        <Countries/>
    </div>
  );
};

export default InternationalTradePage;
