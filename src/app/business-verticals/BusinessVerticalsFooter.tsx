"use client";
import ScrollAnimation from "@/utils/ScrollAnimation";
import React from "react";
import Image from "next/image";

function BusinessVerticalsFooter({ cardObject }) {
  return (
    <ScrollAnimation>
      <div className="w-full sm:flex justify-center md:max-h-[520px] sm:py-5 md:pt-14 sm:pt-4">
        <div className="w-full sm:flex justify-evenly container md:max-h-[520px]">
          <div className="md:w-[33.3%] sm:w-[40%] hidden sm:block relative">
            <Image
              src={cardObject?.imageOne}
              layout="fill"
              objectFit="cover"
              alt="warehouse"
            />
          </div>
          <div
            className="shadow-sm md:w-[33.3%] sm:w-[60%] w-full"
            style={{ backgroundColor: "#FFFFFF", height: "100%" }}
          >
            <p className="sm:p-4 sm:py-2 text-lg text-accentColor text-[1.2rem]">
              {cardObject?.title}
            </p>
            <div className="sm:px-6">
              <h3 className="text-xl font-bold">{cardObject?.description}</h3>
              <div className="py-3">
                {cardObject?.list.map((item, index) => (
                  <p className="ps-2" key={index}>
                    {index + 1}. {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden h-[200px] px-4">
            <Image
              src={cardObject?.imageOne}
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt="card"
            />
          </div>
          <div className="md:w-[33.3%] hidden md:block relative">
            <Image
              src={cardObject?.imageTwo}
              layout="fill"
              objectFit="cover"
              alt="warehouse"
            />
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default BusinessVerticalsFooter;
