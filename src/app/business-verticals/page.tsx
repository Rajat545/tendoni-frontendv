import Section from "@/components/Section/Section";
import React from "react";
import img from "@Images/slider/sunny-meadow-landscape.jpg";
import Image from "next/image";
import BusinessVerticalsFooter from "./BusinessVerticalsFooter";
import CardWithCenterImage from "@/components/CardWithCenterImage";
import WarehouseImage from "@Images/chemicalDivision/warehouse.jpeg";
import ChemicalImage from "@Images/chemicalDivision/chemical.jpeg";
import ChemicalChainImage from "@Images/chemicalDivision/chemical-chain.jpeg";
import FruitsTransport from "@Images/foodDivision/transport.jpeg";
import FruisVegitableImage from "@Images/foodDivision/fruits-vegitable.jpeg";
import FruitWarehouseImage from "@Images/foodDivision/warehouse.jpeg";
import PharmaTransport from "@Images/pharmaDivision/transport.jpeg";
import PharmaMedicineImage from "@Images/pharmaDivision/pharma.jpeg";
import PharmaWarehouseImage from "@Images/pharmaDivision/warehouse.jpeg";
import TradeTransport from "@Images/trade/transport.jpeg";
import Distribution from "@Images/trade/distribution.jpeg";
import Trade from "@Images/trade/trade.jpeg";
import HeroImage from "@Images/hero-images/business-vertical.jpeg";
const FoodDivisionVerticals = () => {
  let foodFirstCardObject = {
    imageOne: FruisVegitableImage,
    imageTwo: FruitsTransport,
    title: "Food Division",
    description: "Farm fresh fruits and vegetables",
    list: [
      "Global Access to Fresh Produce",
      "Economic Growth for Farmers",
      "Promotion of Agricultural Innovation",
      "Cultural Exchange Through Cuisine",
      "Global Reputation Building",
      "Diversification of Agriculture",
    ],
  };

  let foodSecondCardObject = {
    imageOne: FruitWarehouseImage,
    titleOne: "Food Division",
    descriptionOne: "Our Distribution and storage benefits ",
    listOne: [
      "Extended Shelf Life",
      "Year-Round Availability",
      "Bulk Shipments",
      "Quality Preservation",
      "Seasonal Demand Management",
      "Economic Growth",
      "Trade Diversification",
    ],
    titleTwo: "Food Division",
    descriptionTwo: "Our International Trading service benefits ",
    listTwo: [
      "Global Market Access",
      "Efficient Logistics",
      "Customized Solutions",
      "Market Expansion Support",
      "Sustainability Practices",
      "Financial Benefits",
      "Customer Satisfaction",
    ],
  };

  let pharmaFirstCardObject = {
    imageOne: PharmaMedicineImage,
    imageTwo: PharmaTransport,
    title: "Pharmaceutical Division",
    description: "Food Chemicals at Tendoni Group",
    list: [
      "Preservation",
      "Enhanced Flavor and Texture",
      "Extended Transport and Storage",
      "Compliance with Regulations",
    ],
  };

  let pharmaSecondCardObject = {
    imageOne: PharmaWarehouseImage,
    titleOne: "Pharmaceutical Division",
    descriptionOne: "At Tendoni Group chemical storage standard ",
    listOne: [
      "Temperature-Controlled Storage",
      "Adherence to Safety Regulations",
      "Efficient Inventory Management",
      "Strict Quality Control Measures",
      // "Expert Handling and Compliance",
      // "Client-Centric Approach"
    ],
    titleTwo: "Pharmaceutical Division",
    descriptionTwo: "International Export of Food Chemicals ",
    listTwo: [
      "Global Market Expansion",
      "Diversification of Risk",
      "Cultural Exchange and Adaptation",
      "Access to Raw Materials and Resources",
      "Contribution to Global Food Security",
    ],
  };

  let chemicalFirstCardObject = {
    imageOne: ChemicalImage,
    imageTwo: ChemicalChainImage,
    title: "Chemical Division ",
    description: "Food Chemicals at Tendoni Group",
    list: [
      "Preservation",
      "Enhanced Flavor and Texture",
      "Extended Transport and Storage",
      "Compliance with Regulations",
    ],
  };

  let chemicalSecondCardObject = {
    imageOne: WarehouseImage,
    titleOne: "Chemical Division ",
    descriptionOne: "At Tendoni Group chemical storage standard ",
    listOne: [
      "Temperature-Controlled Storage",
      "Adherence to Safety Regulations",
      "Efficient Inventory Management",
      "Strict Quality Control Measures",
      // "Expert Handling and Compliance",
      // "Client-Centric Approach"
    ],
    titleTwo: "Chemical Division ",
    descriptionTwo: "International Export of Food Chemicals ",
    listTwo: [
      "Global Market Expansion",
      "Diversification of Risk",
      "Cultural Exchange and Adaptation",
      "Access to Raw Materials and Resources",
      "Contribution to Global Food Security",
    ],
  };

  let tradeFirstCardObject = {
    imageOne: Trade,
    imageTwo: TradeTransport,
    title: "International Trade",
    description: "Food Chemicals at Tendoni Group",
    list: [
      "Preservation",
      "Enhanced Flavor and Texture",
      "Extended Transport and Storage",
      "Compliance with Regulations",
    ],
  };

  let tradeSecondCardObject = {
    imageOne: Distribution,
    titleOne: "International Trade",
    descriptionOne: "At Tendoni Group chemical storage standard ",
    listOne: [
      "Temperature-Controlled Storage",
      "Adherence to Safety Regulations",
      "Efficient Inventory Management",
      "Strict Quality Control Measures",
      // "Expert Handling and Compliance",
      // "Client-Centric Approach"
    ],
    titleTwo: "International Trade",
    descriptionTwo: "International Export of Food Chemicals ",
    listTwo: [
      "Global Market Expansion",
      "Diversification of Risk",
      "Cultural Exchange and Adaptation",
      "Access to Raw Materials and Resources",
      "Contribution to Global Food Security",
    ],
  };

  return (
    <>
      {/* <Section id="Business" title="" backgroundImage=""></Section> */}
      <div>
        <div className="bg-no-repeat text-white ">
          <Image src={HeroImage} alt="global mao" className="w-full h-[68vh]" />

          {/* <div className="p-6">
            <p className="p-4 text-lg text-[#4a90e2] text-[1.2rem]">Tendoni </p>
            <div className="flex items-center justify-center">
              <div className="p-6">
                <h3 className="text-xl font-bold">Aromatic Masalas</h3>
                <div className="border-l border-s-indigo-500">
                  <p className="ps-2">
                    Immerse yourself in a world of flavors with our carefully
                    curated selection of spices
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="p-5"> */}
      <Section
        title="Food Division"
        id="food-division"
        subtitle="What Sets Us Apart!"
      >
        <div>
          <div className="w-full flex justify-center ">
            {/* <div className="sm:col-span-0 md:col-span-2"></div> */}
            <div className="col-span-12 md:col-span-8 container">
              <div className=" flex justify-center items-center flex-col  ">
                <p className="font-poppins px-0 py-3 md:py-5 first-letter:text-4xl text-left first-letter:font-bold first-letter:text-black text-sm md:text-base lg:text-lg">
                  Welcome to a world where the finest flavors have no boundaries
                  – welcome to Tendoni Group. As a global leader in the export
                  of agricultural treasures, we take pride in delivering premium
                  quality fruits, vegetables, grains, and spices to every corner
                  of the globe. Join us on a culinary journey where taste,
                  quality, and diversity converge to redefine your gastronomic
                  experience.
                </p>
              </div>
              <div>
                <p className="font-poppins  text-left px-0 py-3 md:py-5 inline-block text-sm md:text-base lg:text-lg">
                  At Tendoni Group, we understand the importance of timely and
                  efficient global distribution. Our streamlined logistics and
                  distribution network ensure that our products reach your
                  doorstep in pristine condition. Wherever you are, our
                  commitment to excellence means you can rely on us to deliver a
                  taste of the world to your kitchen.
                </p>
              </div>
              <div>
                <p className="font-poppins  text-left px-0 py-3 md:py-5 inline-block text-sm md:text-base lg:text-lg">
                  Our dedication to sustainable practices goes hand in hand with
                  our passion for quality. From responsible sourcing to
                  eco-friendly packaging, we prioritize the health of our planet
                  as much as the well-being of our customers. Choose Tendoni
                  Group for a culinary experience that not only delights your
                  taste buds but also contributes to a sustainable and vibrant
                  global food ecosystem.
                </p>
              </div>
            </div>
            {/* <div className="sm:col-span-0 md:col-span-2"></div> */}
          </div>
        </div>
        <div className=" sm:hidden w-full py-6">
          <Image
            alt="card"
            src={foodFirstCardObject?.imageOne}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="lg:px-20 xl:px-36 w-full">
            <BusinessVerticalsFooter cardObject={foodFirstCardObject} />
            <CardWithCenterImage cardObject={foodSecondCardObject} />
          </div>
        </div>
      </Section>
      <Section
        title="Chemical Division"
        id="chemical-division"
        subtitle="What Sets Us Apart!"
      >
        <div>
          <div className="w-full flex justify-center ">
            {/* <div className="sm:col-span-0 md:col-span-2"></div> */}
            <div className="col-span-12 md:col-span-8 container">
              <div className=" flex justify-center items-center flex-col  ">
                <p className="font-poppins px-0 py-3 md:py-5 first-letter:text-4xl text-left first-letter:font-bold first-letter:text-black text-sm md:text-base lg:text-lg">
                  In the dynamic landscape of the food industry, ensuring the
                  highest quality and safety standards is paramount. As a
                  leading provider in the field, Tendoni Group is dedicated to
                  revolutionizing the export of food chemicals, playing a
                  pivotal role in elevating global food safety and quality. Our
                  Chemical Division stands at the forefront, offering innovative
                  solutions that enhance the production, preservation, and
                  overall quality of food products.
                </p>
              </div>
              <div>
                <p className="font-poppins  text-left px-0 py-3 md:py-5 inline-block text-sm md:text-base lg:text-lg">
                  At Tendoni Group, we prioritize quality assurance and
                  compliance with international standards. Our Chemical Division
                  is committed to delivering food chemicals that meet or exceed
                  the stringent requirements set by regulatory bodies worldwide.
                  This commitment ensures that our clients receive products of
                  the highest quality, contributing to the overall safety and
                  integrity of the food supply chain.
                </p>
              </div>
              <div>
                <p className="font-poppins  text-left px-0 py-3 md:py-5 inline-block text-sm md:text-base lg:text-lg">
                  Leveraging our extensive global distribution network, we
                  ensure that our high-quality food chemicals reach clients
                  efficiently and on time. Our logistics team is dedicated to
                  providing seamless export services, facilitating the smooth
                  flow of products from our facilities to destinations
                  worldwide.
                </p>
              </div>
            </div>
            {/* <div className="sm:col-span-0 md:col-span-2"></div> */}
          </div>
        </div>
        <div className=" sm:hidden w-full py-6">
          <Image
            alt="card"
            src={chemicalFirstCardObject?.imageOne}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="lg:px-20 xl:px-36 w-full">
            <BusinessVerticalsFooter cardObject={chemicalFirstCardObject} />
            <CardWithCenterImage cardObject={chemicalSecondCardObject} />
          </div>
        </div>
      </Section>
      <Section
        title="Pharma Division"
        id="pharma-division"
        subtitle="What Sets Us Apart!"
      >
        <div>
          <div className="w-full flex justify-center ">
            {/* <div className="sm:col-span-0 md:col-span-2"></div> */}
            <div className=" col-span-12 md:col-span-8 container">
              <div className=" flex justify-center items-center flex-col  ">
                <p className="font-poppins px-0 py-3 md:py-5 first-letter:text-4xl text-left first-letter:font-bold first-letter:text-black text-sm md:text-base lg:text-lg">
                  At Tendoni Group our mission to enhance global healthcare, our
                  pharmaceutical division stands as a beacon of innovation,
                  quality, and dedication. We take pride in exporting
                  pharmaceutical products that not only meet international
                  standards but also contribute to the well-being of individuals
                  around the world. With a commitment to excellence, regulatory
                  compliance, and ethical practices, we are poised to make a
                  significant impact on the global healthcare landscape.{" "}
                </p>
              </div>
              <div>
                <p className="font-poppins  text-left px-0 py-3 md:py-5 inline-block text-sm md:text-base lg:text-lg">
                  Facilitating the seamless export of pharmaceutical products
                  requires a robust and efficient distribution network. We have
                  strategically established partnerships with reputable
                  distributors in key markets, allowing us to reach patients and
                  healthcare providers with speed and reliability. Our logistics
                  and supply chain management are meticulously designed to
                  ensure the timely and secure delivery of our pharmaceutical
                  products worldwide.
                </p>
              </div>
              <div>
                <p className="font-poppins  text-left px-0 py-3 md:py-5 inline-block text-sm md:text-base lg:text-lg">
                  As we export pharmaceutical products across the globe, we
                  remain steadfast in our commitment to elevating healthcare
                  standards and improving lives. Our pharmaceutical division is
                  driven by a vision of a healthier world, where access to
                  quality medications is not just a privilege but a fundamental
                  right. Join us on this journey as we continue to make a
                  positive impact on global healthcare, one pharmaceutical
                  export at a time.{" "}
                </p>
              </div>
            </div>
            {/* <div className="sm:col-span-0 md:col-span-2"></div> */}
          </div>
        </div>
        <div className=" sm:hidden w-full py-6">
          <Image
            alt="card"
            src={pharmaFirstCardObject?.imageOne}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="lg:px-20 xl:px-36 w-full">
            <BusinessVerticalsFooter cardObject={pharmaFirstCardObject} />
            <CardWithCenterImage cardObject={pharmaSecondCardObject} />
          </div>
        </div>
      </Section>
      <Section
        title="International Trade"
        id="international-trade"
        subtitle="What Sets Us Apart!"
      >
        <div>
          <div className="w-full flex justify-center">
            {/* <div className="sm:col-span-0 md:col-span-2"></div> */}
            <div className=" col-span-12 md:col-span-8 container">
              <div className=" flex justify-center items-center flex-col  ">
                <p className="font-poppins px-0 py-3 md:py-5 first-letter:text-4xl text-left first-letter:font-bold first-letter:text-black text-sm md:text-base lg:text-lg">
                  At Tendoni group, our Food Division stands as a testament to
                  our dedication to delivering exceptional culinary ingredients
                  and products that elevate dining experiences worldwide. With a
                  passion for quality and a deep-rooted commitment to sourcing
                  the finest food items. The company was nationalised in 1956,
                  but the Tatas' footprint is broad today, serving the Indian
                  citizen and business with affordable and accessible services
                  across the finance spectrum.
                </p>
              </div>
              <div>
                <p className="font-poppins  text-left px-0 py-3 md:py-5 inline-block  text-sm md:text-base lg:text-lg">
                  The flagship company in the financial services sector is Tata
                  Capital with a range of services that cater to individual and
                  small business requirements. In the insurance sector, our
                  joint ventures with AIA and AIG serve both Life and Non-Life
                  sectors, and are among the largest players in India. Tata
                  Asset Management Company offers Mutual Funds, Portfolio
                  Management Services, Alternate Investment Funds, Offshore
                  Funds and Pension funds (under National Pension System)
                  through its subsidiary Tata Pension Management Limited (TPML).
                </p>
              </div>
            </div>
            {/* <div className="sm:col-span-0 md:col-span-2"></div> */}
          </div>
        </div>
        <div className=" sm:hidden w-full py-6">
          <Image
            alt="card"
            src={tradeFirstCardObject?.imageOne}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="lg:px-20 xl:px-36 w-full">
            <BusinessVerticalsFooter cardObject={tradeFirstCardObject} />
            <CardWithCenterImage cardObject={tradeSecondCardObject} />
          </div>
        </div>
      </Section>
      {/* </div> */}
    </>

    // </Section>
  );
};

export default FoodDivisionVerticals;
