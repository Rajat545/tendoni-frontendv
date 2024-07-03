"use client"
import React from "react";
import Section from "../../Section/Section";
import "../../HomeComponents/productSection/photos.css";
import { CountriesData } from "@/Data/international";
import { useState } from "react";
import Image from "next/image";
import SwiperCore, { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";

// SwiperCore.use([A11y, Autoplay]);

function Countries() {
  
  return (
    <Section
      id="countries"
      title="Countries we Export Globally"
      subtitle=""
    >
      <div className=" w-full rounded-lg overflow-hidden">
        <div className="container mx-auto md:p-4 flex flex-col sm:overflow-x">
          {/* Conditionally render Swiper only on mobile devices */}
            <div className=" block lg:hidden">
              <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={false}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {CountriesData?.map((item,index) => (
                <SwiperSlide key={index}>
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-0 sm:p-4 lg:p-4 flex-shrink-0">
                    <div className="item web branding">
                      <a
                        href=""
                        className="portfolio-item ajax-load-page isotope-item gsap-reveal-img"
                        data-id="2"
                      >
                        <div className="overlay">
                          <span className="wrap-icon icon-link2"></span>
                          <div className="portfolio-item-content">
                            <h3 className="text-xl font-semibold">
                              {item.title}
                            </h3>
                            {/* <p className="text-gray-600">
                              illustration, application
                            </p> */}
                          </div>
                        </div>
                        <Image
                          src={item?.imgSrc}
                          className="lazyload img-fluid fixed-image-main"
                          alt="Images"
                        />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
            <div
              className="lg:flex justify-center md:mx-4 lg:flex-wrap hidden"
            >
              {CountriesData?.map((item,index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-0 sm:p-4 lg:p-4 flex-shrink-0"
                >
                  <div className="item web branding">
                    <a
                      href=""
                      className="portfolio-item ajax-load-page isotope-item gsap-reveal-img"
                      data-id="2"
                    >
                      <div className="overlay">
                        <span className="wrap-icon icon-link2"></span>
                        <div className="portfolio-item-content">
                          <h3 className="text-xl font-semibold">
                            {item.title}
                          </h3>
                          {/* <p className="text-gray-600">
                            illustration, application
                          </p> */}
                        </div>
                      </div>
                      <Image
                        src={item?.imgSrc}
                        className="lazyload img-fluid fixed-image-main"
                        alt="Images"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </Section>
  );
}

export default Countries;
