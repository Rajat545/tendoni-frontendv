"use client";
import Image from "next/image";
import Masale from "@Images/slider/masale.png";
import Crisil from "@Images/backgroundImages/crisil_certificate.png";
import mission from "@Images/achievement/mission.jpg";
import administration from "@Images/achievement/administration.jpg";
import "swiper/css";
import "swiper/swiper-bundle.css";
import Mission from "@Images/about-us/mission.jpeg";
import Vision from "@Images/about-us/vision.jpeg";
import AboutusImage from "@Images/hero-images/business-vertical.jpeg";
import Section from "../../components/Section/Section";
const AboutUs: React.FC = () => {


  return (
    <div className=" min-h-screen">
      <div className=" z-20">
        <Image
          src={AboutusImage}
          alt="this is a image"
          className="lg:h-[80vh] h-auto w-full"
        />
      </div>

      <Section id="whoweare">
        <div className="flex flex-wrap items-center ">
          <div className="w-full md:w-1/2 ">
            <div className="w-full pb-6 space-y-4 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className=" font-extrabold tracking-tight text-gray-900 text-xl md:text-3xl lg:text-4xl xl:text-6xl">
                <span className="block xl:inline">Who We Are</span>
              </h1>
              <p className="mx-auto text-gray-500 sm:max-w-md lg:text-lg md:text-base text-sm md:max-w-3xl">
                TENDONI FOODCHEM INDIA PVT LTD (TFIPL) is the distribution hub
                of Eastern & Western Seas a leading Industrial group in INDIA,
                specializing in the export of Vegetables, Fruits & commodities
                along with Cosmetics, Chemicals, and Masala specifically
                designed to meet the requirements of a wide array of markets.
              </p>
              <p className="mx-auto text-gray-500 sm:max-w-md lg:text-lg md:text-base text-sm md:max-w-3xl">
                The Company is one of the most diversified and highly regarded
                business houses in the Middle East & and Africa (Benin &
                Uganda). It takes pride in its past and looks to the future with
                confidence and a renewed commitment to maintain and enhance the
                services provided to its business partners.{" "}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2  ">
            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              {/* <Image src={Masale} /> */}
              <Image src={Masale} alt="global mao" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </Section>
      <Section id="OurMission">
        <>
          <div className="-mt-4 md:mt-0 flex flex-col items-center content-center leading-6 text-black border-0 border-gray-300 border-solid md:flex-row pb-6 md:pb-8 lg:pb-10 xl:pb-12">
            <div className="relative w-full max-w-md mt-5 mb-4  text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 ">
              <Image src={Vision.src} alt="global mao" className=" w-full" />
            </div>

            <div className="box-border order-first w-full text-black border-solid md:w-1/2  md:order-none md:pl-4 xl:pl-10">
              <h2 className="m-0 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-poppins leading-tight border-0 border-gray-300">
                OUR MISSION
              </h2>
              <p className="pt-2 md:pt-4 pb-2 md:pb-4 m-0 leading-7 font-poppins text-gray-700 border-0 border-gray-300 text-sm md:text-base lg:text-lg">
                At Tendoni Group, our mission is to be a beacon of excellence in
                international trade, connecting the global community through the
                export of premium product
              </p>
              <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border font-poppins relative py-1 pl-0 text-left text-gray-500 border-solid text-sm md:text-base lg:text-lg">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#A57C46] rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Quality Excellence
                </li>
                <li className="box-border font-poppins relative py-1 pl-0 text-left text-gray-500 border-solid text-sm md:text-base lg:text-lg">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#A57C46] rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Global Accessibility
                </li>
                <li className="box-border font-poppins relative py-1 pl-0 text-left text-gray-500 border-solid text-sm md:text-base lg:text-lg">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#A57C46] rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Customer Partnership
                </li>
                <li className="box-border font-poppins relative py-1 pl-0 text-left text-gray-500 border-solid text-sm md:text-base lg:text-lg">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#A57C46] rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Global Collaboration
                </li>
              </ul>
            </div>
          </div>
          <div className="box-border flex flex-col items-center content-center md:mt-8 leading-6 text-black border-0 border-gray-300 border-solid md:flex-row md:pt-8 lg:pt-10 xl:pt-12">
            <div className="box-border w-full text-black border-solid md:w-1/2 ">
              <h2 className="m-0 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-semibold leading-tight border-0 border-gray-300">
                Our Vision
              </h2>
              <p className="py-2 md:pt-4 font-poppins md:pb-4 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 text-sm md:text-base lg:text-lg">
                At Tendoni Group, our vision is to be a trailblazer in
                international trade, recognized for our transformative impact on
                global commerce and the well-being of communities worldwide.
              </p>
              <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className=" font-poppins box-border relative py-1 pl-0 text-left text-gray-500 border-solid text-sm md:text-base lg:text-lg">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#A57C46] rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Global Culinary Harmony
                </li>
                <li className="font-poppins box-border relative py-1 pl-0 text-left text-gray-500 border-solid text-sm md:text-base lg:text-lg">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#A57C46] rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Sustainable Global Trade
                </li>
                <li className="font-poppins box-border relative py-1 pl-0 text-left text-gray-500 border-solid text-sm md:text-base lg:text-lg">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#A57C46] rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Customer-Centric Excellence
                </li>
                <li className="font-poppins box-border relative py-1 pl-0 text-left text-gray-500 border-solid text-sm md:text-base lg:text-lg">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#A57C46] rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Diversity and Inclusivity
                </li>
              </ul>
            </div>

            <div className="box-border relative w-full max-w-md  mt-5 mb-0 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
              <Image src={Mission.src} alt="global mao" className="md:pl-4 xl:pl-10 w-full" />
            </div>
          </div>
        </>
      </Section>

      <Section id="members">
        <div
          id="members"
          className="flex items-center justify-center bg-white"
          // container items-center  mx-auto sm:px-20 md:px-32 lg:px-16
        >
          <div className=" bg-white">
            <div className=" flex flex-col items-start mx-auto lg:items-center">
              <p className="relative flex items-start font-poppins justify-start w-full text-lg font-bold tracking-wider text-[#A67D44] uppercase lg:justify-center lg:items-center">
                JUST TRUST US
              </p>

              <h2 className="relative font-poppins flex items-start justify-start w-full max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold lg:justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                OUR CORE TEAM
              </h2>
              <div className="block w-full h-0.5 max-w-lg mt-2 bg-[#A67D44] rounded-full"></div>
              <section className="py-8 pt-4 bg-gray-50 mt-6 rounded-lg">
                <div className="container items-center mx-auto ">
                  <div className="flex flex-wrap items-center -mx-3">
                    <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                      <div className="w-full ">
                        <h2 className="mb-2 text-3xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight font-heading">
                          PREETI DUBEY
                        </h2>
                        <h2>FOUNDER & CHAIRMAN & MANAGING DIRECTOR</h2>
                        <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-sm md:text-base lg:text-lg">
                          Preeti Dubey is visionary who aims to build long term
                          relations with our patrons. Her desire has always been
                          to create a dependability of services and outcomes for
                          the company expansion and growth. At the age of 24 she
                          began her journey of trading.She always been be
                          optimistic. She always try to innovate something new
                          and focused to provide quality product in india and
                          rest ofthe world with international standard.This
                          approach build this group to serving the globle with
                          bussiness ethics .
                        </p>
                      </div>
                    </div>
                    <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
                      <Image
                        className="mx-auto sm:max-w-sm lg:max-w-full"
                        src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                        alt="feature image"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Section>

      <section
        id="certifications"
        className="box-border leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid "
      >
        <div className="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4 ">
          <div className="flex flex-col items-center leading-7 text-center text-gray-900">
            <h2 className="box-border m-0 text-3xl font-poppins font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
              CERTIFICATIONS
            </h2>
            <p className="box-border mt-4 text-2xl leading-normal text-gray-900 border-solid"></p>
          </div>
          <div className="">
            <div className=" grid max-w-md mx-auto mt-3 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-300 border-blue-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
              <div
                className="box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10"
                style={{ height: "265px" }}
              >
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                  
                  <Image
                    src={mission}
                    alt="global mao"
                    className="w-full h-auto"
                  />
                </h3>
              </div>
              <div
                className="box-border px-4 py-8 mb-6 text-center bg-gray-100 border border-gray-300 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10"
                style={{ height: "265px" }}
              >
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                  <Image
                    src={Crisil}
                    alt="global mao"
                    className="w-full h-auto"
                  />
                </h3>
              </div>
              <div
                className="box-border px-4 py-8 text-center bg-white border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10"
                style={{ height: "265px" }}
              >
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                  <Image
                    src={administration}
                    alt="global mao"
                    className="w-full h-auto"
                  />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
