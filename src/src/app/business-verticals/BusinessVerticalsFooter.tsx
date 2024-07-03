"use client";
import ScrollAnimation from "@/utils/ScrollAnimation";
import React from "react";
import WarehouseImage from "@Images/foodDivision/warehouse.jpeg";
import Image from "next/image";

function BusinessVerticalsFooter({ cardObject }) {
  return (
    <ScrollAnimation>
      <div className="w-full sm:flex justify-center md:max-h-[520px] sm:py-5 md:pt-14 sm:pt-4 ">
        <div className="w-full sm:flex justify-evenly container md:max-h-[520px] " >
          <div className="md:w-[33.3%] sm:w-[40%] hidden sm:block relative">
            <Image
              src={cardObject?.imageOne}
              fill={true}
              alt="warehouse"
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className="shadow-sm md:w-[33.3%] sm:w-[60%] w-full" style={{ backgroundColor: "#FFFFFF", height: "100%"}}>
            <p className="sm:p-4 sm:py-2 text-lg text-accentColor text-[1.2rem]">
              {cardObject?.title}
            </p>
            <div className="sm:px-6">
              <h3 className="text-xl font-bold">{cardObject?.description}</h3>
              <div className="py-3">
                {cardObject?.list.map((item:String,index:any)=>(
                    <p className="ps-2" key={index}>
                      {index+1}.  {item}
                    </p>
                ))}
              </div>
            </div>
          </div>
          <div className=" hidden h-[200px] px-4">
            <Image alt="card" src={cardObject?.imageOne} width={0} height={0} style={{width:"100%",height:"auto"}}/>
          </div>
          <div className="md:w-[33.3%] hidden md:block relative">
          <Image
              src={cardObject?.imageTwo}
              fill={true}
              alt="warehouse"
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
        </div>
        {/* <div className="p-5" style={{ backgroundColor: "#EFEFEF" }}>
          <div className="lg:px-24">
            <div
              className="grid 
                lg:grid-cols-12 gap-4 lg:px-24"
            >
              <div className="sm:col-span-12 md:col-span-8">
                <div
                  className="grid lg:grid-cols-12 gap-4"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <div className="sm:col-span-6 md:col-span-6">
                    <div>
                      <img
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/6b90ce74782f607ed008f378a811d90c"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6 md:col-span-6 p-6">
                    <p className="p-4 text-lg text-[#4a90e2] text-[1.2rem]">
                      Tendoni{" "}
                    </p>
                    <div className="p-6">
                      <h3 className="text-xl font-bold">Farm-Fresh</h3>
                      <div>
                        <div className="border-l border-s-indigo-500 ">
                          <p className="ps-2">
                            From vibrant greens to exotic produce, our commitment
                            to freshness
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ width: "354px", height: "419px" }}
                className="sm:col-span-12 text-white md:col-span-4 bg-[url('https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/6b90ce74782f607ed008f378a811d90c')]"
              >
                <div className="p-6">
                  <p className="p-4 text-lg text-[#4a90e2] text-[1.2rem]">
                    Tendoni{" "}
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="p-6">
                      <h3 className="text-xl font-bold">Aromatic Masalas</h3>
                      <div className="border-l border-s-indigo-500">
                        <p className="ps-2">
                          Immerse yourself in a world of flavors with our
                          carefully curated selection of spices
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="p-5 sm:col-span-12 md:col-span-4 hidden sm:block"
          style={{ backgroundColor: "#EFEFEF" }}
        >
          <div className="lg:px-24">
            <div className="grid grid-cols-12 gap-4 lg:px-24">
              <div
                className="sm:col-span-12 md:col-span-4 "
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <div className="p-6">
                  <p className="p-4 text-lg text-[#4a90e2] text-[1.2rem]">
                    Tendoni{" "}
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="p-6">
                      <h3 className="text-xl font-bold">Aromatic Masalas</h3>
                      <div className="border-l border-s-indigo-500">
                        <p className="ps-2">
                          Immerse yourself in a world of flavors with our
                          carefully curated selection of spices
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-12 md:col-span-8">
                <div
                  className="grid grid-cols-12 gap-4"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <div className="sm:col-span-6 md:col-span-6">
                    <div>
                      <img
                        style={{ width: "354px", height: "419px" }}
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/6b90ce74782f607ed008f378a811d90c"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6 md:col-span-6 p-6">
                    
                    <p className="p-4 text-lg text-[#4a90e2] text-[1.2rem]">
                      Tendoni{" "}
                    </p>
                    <div className="p-6">
                      <h3 className="text-xl font-bold">Farm-Fresh</h3>
                      <div>
                        <div className="border-l border-s-indigo-500 ">
                          <p className="ps-2">
                            From vibrant greens to exotic produce, our commitment
                            to freshness
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* == */}
        </div>
    </ScrollAnimation>
  );
}

export default BusinessVerticalsFooter;
