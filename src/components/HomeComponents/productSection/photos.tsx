import React from "react";
import Section from "../../Section/Section";
import "./photos.css";
import { portfolioItems } from "@/Data/home";
import { useState } from "react";
import Image from "next/image";

function Photos() {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleFilterClick = (category) => {
    setActiveCategory(category);
  };

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems.All
      : portfolioItems[activeCategory];
  return (
    <>
      <Section
        id="photos"
        title="Products"
        subtitle="Check Our International Trade Product"
      >
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 flex justify-center py-6">
            <ul
              id="portfolio-flters"
              className="flex justify-center list-none m-0 p-0 overflow-x-auto sm:overflow-x-visible  w-full  md:w-1/4 lg:w-1/4 xl:w-1/4 "
            >
              {Object.keys(portfolioItems).map((category) => (
                <li
                  key={category}
                  onClick={() => handleFilterClick(category)}
                  className={`cursor-pointer px-4 py-2 mx-1 border border-gray-300 rounded-full transition hover:bg-darkColor hover:text-white ${
                    activeCategory === category ? "bg-[#A67A44] text-white" : ""
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-lg">
          <div className="container mx-auto p-4">
            <div className="flex flex-wrap -mx-4">
              {filteredItems?.map((index:number, item:any) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
                  <div className="item web branding">
                    <a
                      href="portfolio-single-2.html"
                      className="portfolio-item ajax-load-page isotope-item gsap-reveal-img"
                      data-id="2"
                    >
                      <div className="overlay">
                        <span className="wrap-icon icon-link2"></span>
                        <div className="portfolio-item-content">
                          <h3 className="text-xl font-semibold">
                            Book Binding
                          </h3>
                          <p className="text-gray-600">
                            illustration, application
                          </p>
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
    </>
  );
}

export default Photos;
