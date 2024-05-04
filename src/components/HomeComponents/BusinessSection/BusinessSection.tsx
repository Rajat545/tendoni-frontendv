import { useState } from "react";
import Section from "@/components/Section/Section";
// import SunnyMeadows from "@Images/slider/sunny-meadow-landscape.jpg";
import { anotherItemsMenu } from "@/Data/home";
// import Link from "next/link";

const BuisnessSection = () => {
  const [hover, setHover] = useState(false);
  const [selectedItem, setSelectedItem] = useState(anotherItemsMenu[0]); // Set initial selected item
  console.log(selectedItem, "selectedItem");
  return (
    <Section
      id="Business"
      title="Our Businesses"
      backgroundImage="bg-[url('../../public/images/slider/sunny-meadow-landscape.jpeg')]"
      filter=" brightness(0.5)"
    >
      <div className="bg-no-repeat w-full h-[420px] md:h-auto md:py-6" >
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen md:h-auto text-white bg-opacity-50">
          <div className=" flex-col justify-center items-center hidden md:flex">
            <div className=" left-0 flex flex-col font-poppins  justify-start text-left space-y-6">
              {/* <div className="flex font-semibold text-base md:text-lg lg:text-xl xl:text-2xl">
                Our Businesses
              </div> */}

              <div className="flex font-semibold text-left font-merriweather text-2lg md:text-4xl lg:text-5xl">
                {selectedItem?.subHeader}
              </div>
              <p className="text-xs md:text-base text-left lg:text-lg xl:text-lg">
                {selectedItem?.labelBody1}
              </p>
              <div className="flex font-semibold text-sm md:text-lg lg:text-xl xl:text-2xl">
              Our Product Portfolio:
              </div>
              {selectedItem?.dataArray.map((item,index)=>(
                <p key={index} className="text-xs md:text-sm text-left lg:text-base xl:text-base">
                  {item}
                </p>
              ))}
              
              {/* <button className="rounded-full max-w-fit text-left border-2 border-darkColor px-4 py-2 transition duration-300 hover:bg-[#A67A44]">
                Read More
              </button> */}
            </div>
          </div>
          <div className="justify-center  w-full md:flex items-center flex-col text-left">
            <nav className="flex flex-col justify-between z-20  right-[155px] font-oswald items-center  text-sm md:text-base lg:text-lg xl:text-xl  nav-bar  ">
              {anotherItemsMenu.map((menuItem, index) => (
                <div
                  key={index}
                  className={` p-4 my-4 cursor-pointer border-b-2 w-full ${
                    selectedItem == menuItem
                      ? "text-[#A67A44] border-[#A67A44]   border-b-4"
                      : "text-[white] border-b-2 "
                  } hover:text-[#A67A44]  `}
                  onMouseEnter={() => setSelectedItem(menuItem)}
                >
                  {menuItem.label}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BuisnessSection;
