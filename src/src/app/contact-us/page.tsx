import Section from "@/components/Section/Section";
import Image from "next/image";
import React from "react";
import content from "@Images/slider/container.jpg";
import { foodDivisionMasalas } from "@/Data/foodDivision";
import person from "@Images/svgs/person.svg";
import email from "@Images/svgs/gmail.png";
import location from "@Images/svgs/location.png";

import Map from "@Images/svgs/Asset 1.png";
import Dubai from "@Images/country/Dubai.png";
import Benin from "@Images/country/Benin.png";
import Bhopal from "@Images/country/Bhopal.jpg";
import Uganda from "@Images/country/Uganda.png";
const ContactUs = () => {
  const data = [
    {
      title: "ASIA-INDIA",
      companyName: "TENDONI FOODCHEM INDIA PVT LTD",
      subtitle: "BHOPAL",
      description:
        "Plot No. 21,Mahesh Plaza, Sector B,Second Floor Vidya Nagar,Hoshangabad Road Bhopal,Madhya Pradesh-462026",
      number: "Plot No. 21,Mahesh Plaza, Sector B,Second Floor Vidya Nagar",
      email: "india@tendonigroup.com",
      img: Bhopal,
    },
    {
      title: "MIDDLE EAST UNITED AREB EMIRATES",
      companyName: "TENDONI INTERNATIONAL GENERAL TRADING LLC",

      subtitle: "DUBAI",
      description:
        "TENDONI INTERNATIONAL GENERAL TRADING LLC Unit No.605,Mustafawi Building Sharaf DG Metro",
      number: "Unit No.605,Mustafawi Building Sharaf DG Metro",
      email: "uae@tendonigroup.com",
      // img: {},
      img: Dubai,
    },
    {
      title: "AFRICA",
      companyName: "TENDONI INTERNATIONAL BENIN LIMITED",

      subtitle: "BENIN",
      description:
        "TENDONI INTERNATIONAL BENIN LIMITED Rue de la francophonie, Cotonou, Littoral,Benin, 00229",
      number: "Rue de la francophonie, Cotonou, Littoral,Benin, 00229",
      email: "benin@tendonigroup.com",
      img: Benin,
    },
    {
      title: "AFRICA",
      companyName: "TENDONI INTERNATIONAL UGANDA LIMITED ",

      subtitle: "UGANDA",
      description:
        "TENDONI INTERNATIONAL UGANDA LIMITED Kampala. Plot 6, George Street Georgian House Kampala",
      number: " Plot 6, George Street Georgian House Kampala",
      email: " uganda@tendonigroup.com",
      img: Uganda,
    },
    // {
    //   title:"MIDDLE EAST UNITED AREB EMIRATES",
    //   subtitle:"DUBAI",
    //   description:"TENDONI INTERNATIONAL GENERAL TRADING LLC Unit No.605,Mustafawi Building Sharaf DG Metro",
    //   number:"Exit 1, Dubai , UAE-PO Box-122836",
    //   email:"uae@tendonigroup.com"
    // },
    // {
    //   title:"MIDDLE EAST UNITED AREB EMIRATES",
    //   subtitle:"DUBAI",
    //   description:"TENDONI INTERNATIONAL GENERAL TRADING LLC Unit No.605,Mustafawi Building Sharaf DG Metro",
    //   number:"Exit 1, Dubai , UAE-PO Box-122836",
    //   email:"uae@tendonigroup.com"
    // },
  ];
  return (
    <>
      <div className="pt-12">
        <Section
          title="Offices"
          subtitle="Our World wide offices"
          // background="bg-darkColor"
        >
          <div className="mt-10">
            <Image src={Map} alt="global mao" />
          </div>
        </Section>
      </div>

      {/* <div className="flex z-20">
        <Image
          src={content}
          alt=""
          className="
          lg:h-auto h-auto"
        />
      </div> */}
      <div className="flex justify-center">
        <div className="p-0 py-3 md:py-0 md:p-10 lg:p-10 flex flex-col w-full items-center justify-center container mx-auto px-0 md:px-6 lg:px-6">
          <h1 className="w-full  text-center font-merriweather text-accentColor text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            NATIONAL & INTERNATIONAL
          </h1>
          <h2
            className={`font-normal p-2 w-full text-center font-poppins text-base md:text-lg lg:text-xl xl:text-2xl font-extralight tracking-tight text-gray-900`}
          >
            OUR
          </h2>
          <h1 className="w-full p-2 text-center font-merriweather text-accentColor text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            LOCATIONS
          </h1>
          <h2 className="p-2 text-center font-poppins text-base md:text-lg lg:text-xl xl:text-2xl font-extralight tracking-tight text-gray-900 flex flex-wrap justify-center">
            <span className="w-full md:w-auto font-normal font-poppins">
              Our Offices have worldwide presence <br />
              with expertise & ethics.
            </span>
          </h2>
        </div>
      </div>
      <Section id="location">
        <div className="md:-mt-8 lg:mt-0">
          {data?.map((item, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0
                  ? "py-0 lg:py-4 md:py-4"
                  : " py-0 lg:py-4 md:py-4"
              }`}
            >
              <div
                key={index}
                // max-w-7xl
                // items-center
                className={`box-border flex flex-col  content-center leading-6 text-black border-0 border-gray-300 border-solid md:flex-row   ${
                  index % 2 === 0 ? "" : ""
                } `}
              >
                <div
                  className={` flex justify-center box-border relative w-full max-w-md  mt-5 mb-4  text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10 ${
                    index % 2 === 0 ? "order-first " : ""
                  }`}
                >
                  {/* <img
                    src="/public/images/country/Bhopal.jpg"
                    className="rounded-md"
                    alt="..."
                  /> */}
                  <Image
                    src={item.img}
                    alt=""
                    className="rounded"
                    // w-[120px] md:w-[140px] lg:w-[120px] xl:w-[150px]
                    //                           className="
                    //                     lg:w-1/2
                    // "
                  />
                </div>

                <div
                  className={` md:py-8 py-8 lg:py-16 box-border text-wrap w-full text-black border-solid md:w-1/2 md:pl-10 ${
                    index % 2 !== 0 ? "md:order-first" : ""
                  }`}
                >
                  <h2 className="m-0 text-[#8E6A3E] text-xl text-balance font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                    {item.title}
                  </h2>
                  <p className=" m-0 leading-7  text-gray-700 border-0 border-gray-300 sm:pr-12 = font-bold text-lg">
                    {item.companyName}
                  </p>
                  <p className=" m-0 leading-7  text-gray-700 border-0 border-gray-300 sm:pr-12 = ">
                    {item.subtitle}
                  </p>
                  <p className="py-2 lg:pt-4 lg:pb-8 m-0 leading-6 md:leading-7  text-gray-700 border-0 border-gray-300 sm:pr-12 text-sm md:text-base lg:text-lg ">
                    {/* {item.description} */}
                  </p>
                  {item.number !== "" && (
                    <div className="flex items-center gap-4">
                      <p className=" ">
                        <Image
                          src={location}
                          alt=""
                          className=" w-[25px] md:w-[25px] lg:w-[25px] xl:w-[25px]"
                        />
                      </p>

                      <p className="text-sm md:text-base lg:text-lg ">
                        {item.number}
                      </p>
                    </div>
                  )}
                  <p>
                    <span className="flex gap-4 pt-2 text-sm md:text-base lg:text-lg ">
                      {" "}
                      <Image
                        src={email}
                        alt=""
                        className=" w-[25px] md:w-[25px] lg:w-[25px] xl:w-[25px]"
                      />{" "}
                      <span className="text-[#4a90e2]"> {item.email}</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      {/* <Section> */}
      <div className="relative overflow-x-auto p-0 m-0 ml-2 mr-2 mb-6 ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg">
          <thead
            className="text-xs text-gray-700 uppercase  dark:text-gray-400"
            style={{ backgroundColor: "#BF9E60" }}
          >
            <tr className="border">
              <th scope="col" className="px-6 py-3 dark:text-white">
                S.No
              </th>
              <th scope="col" className="px-6 py-3 dark:text-white">
                Department
              </th>
              <th scope="col" className="px-8 py-3 dark:text-white">
                Name
              </th>
              <th scope="col" className="px-6 py-3 dark:text-white">
                Email Id
              </th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "#8080801f" }}>
            <tr className=" border-b  dark:border-gray-700">
              <th
                scope="row"
                className="px-3 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 font-medium text-gray-900 whitespace-nowrap dark:text-black"
              >
                1
              </th>
              <td className="px-2 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 dark:text-black">
                EXPORT DIVISION
              </td>
              <td className="px-2 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 dark:text-black">
                Mr. PIYUSH PATEL
              </td>
              <td className="px-2 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 dark:text-black">
                Export@tendonigroup.com
              </td>
            </tr>
            <tr className=" border-b  dark:border-gray-700">
              <th
                scope="row"
                className="px-3 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 font-medium text-gray-900 whitespace-nowrap dark:text-black"
              >
                2
              </th>
              <td className="px-2 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 dark:text-black">
                FINANCE DIVISION
              </td>
              <td className="px-2 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 dark:text-black">
                Mr. PREM NARAYAN
              </td>
              <td className="px-2 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 dark:text-black">
                finance.director@tendonigroup.com
              </td>
            </tr>
            <tr className=" border-b  dark:border-gray-700">
              <th
                scope="row"
                className="px-3 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 font-medium text-gray-900 whitespace-nowrap dark:text-black"
              >
                3
              </th>
              <td className="px-2 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 dark:text-black">
                CHEMICAL DIVISION
              </td>
              <td className="px-2 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 dark:text-black">
                Mr. Bhaskar Malviya
              </td>
              <td className="px-2 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 dark:text-black">
                bhaskar@tendonigroup.com
              </td>
            </tr>
            <tr className=" border-b  dark:border-gray-700">
              <th
                scope="row"
                className="px-3 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 font-medium text-gray-900 whitespace-nowrap dark:text-black"
              >
                4
              </th>
              <td className="px-2 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 dark:text-black">
                HR & COSMETICS
              </td>
              <td className="px-2 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 dark:text-black">
                Miss. Neha Soni
              </td>
              <td className="px-2 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 dark:text-black">
                hr@tendonigroup.com
              </td>
            </tr>
            <tr className=" border-b  dark:border-gray-700">
              <th
                scope="row"
                className="px-3 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 font-medium text-gray-900 whitespace-nowrap dark:text-black"
              >
                5
              </th>
              <td className="px-2 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 dark:text-black">
                SPICE DIVISION
              </td>
              <td className="px-2 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 dark:text-black">
                Mr. Jitendra Asthana
              </td>
              <td className="px-2 py-1 lg:px-4 lg:py-4 md:px-3 md:px-3 dark:text-black">
                Sales@tendonigroup.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* </Section> */}
      <div>
        <section className="w-full bg-white"></section>
      </div>
    </>
  );
};

export default ContactUs;
