"use client";
import CarouselSlider from "@/components/CarouselSlider";
import AboutSection from "@/components/AboutSection";
// import Testimonials from "@/components/Testimonials";
import WhatSetsUsApart from "@/components/AboutSection/whatSetsUsApart";
import Service from "@/components/ServicesSection";
import Services from "@/components/ServicesSection/services";
import Photos from "@/components/HomeComponents/productSection/photos";
// import HightQuality from "@/components/HightQualityProduct";
import ProductsScrollSec from "@/components/HomeComponents/ProductsScrollSec/ProductScrollSec";
import BuisnessSection from "@/components/HomeComponents/BusinessSection/BusinessSection";
import ScrollAnimation from "../utils/ScrollAnimation";
import HightQuality from "@/components/HomeComponents/HightQualityProduct";
import Testimonials from "@/components/HomeComponents/Testimonials";
import OtherCategoryPhotos from "@/components/HomeComponents/OtherCategory";
import GlobalSlider from "@/components/HomeComponents/GlobalSlider";

export default function Home() {
  return (
    <>
      <main className="flex flex-col w-full pb-10 bg-gray-50">
        <div className=" h-full">
          <ScrollAnimation>
            <CarouselSlider />
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="w-full flex justify-center items-center">
              <div className="container px-4 pt-4 md:pt-8 lg:pt-10 xl:pt-12">
              <p className="font-poppins px-0 py-6 md:p-0 lg:py-3 first-letter:text-4xl text-left first-letter:font-bold first-letter:text-black text-sm md:text-base lg:text-lg">
              Welcome to TENDONI GROUP, a trusted name in the world of international Import and export of products. Established with a commitment to delivering quality products across borders, we take pride in being a reliable partner for businesses seeking top-notch goods. We at TENDONI GROUP are a one-stop-shop for high quality and reasonably priced vegetable-commodity products, being one among the renowned producers/exporters of Vegetables-commodities, Fruits, Masala, Food chemicals & and cosmetics. We not only offer a wide range of top-quality products but also provide unrivaled handling expertise to help our customers get the best quality and services
              </p>
              </div>
            </div>

          </ScrollAnimation>
          <ScrollAnimation>
            <WhatSetsUsApart />
          </ScrollAnimation>
          <ScrollAnimation>
            <BuisnessSection />
          </ScrollAnimation>
          <ScrollAnimation>
              <GlobalSlider/>
          </ScrollAnimation>
          <ScrollAnimation>
            <ProductsScrollSec />
          </ScrollAnimation>
          <ScrollAnimation>
            <OtherCategoryPhotos />
          </ScrollAnimation>
          {/* <ScrollAnimation>
            <Service />
          </ScrollAnimation> */}
          <ScrollAnimation>
            <HightQuality />
          </ScrollAnimation>
          <ScrollAnimation>
            <Testimonials />
          </ScrollAnimation>
          


        </div>
      </main>
    </>
  );
}
