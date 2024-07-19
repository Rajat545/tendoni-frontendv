import React from "react";
// import Section from "../Section/Section";
import "./index.css";
import Section from "@/components/Section/Section";
import Image from "next/image";

function HightQuality() {
  return (
    <>
      <Section id={"Product"} title={""}>
        <section className="showcase1">
          <Image
            style={{ height: "450px"}}
            className="object-cover background-cover rounded-2xl"
            src="https://img.freepik.com/free-photo/healthy-eating-with-organic-spices-herbs-generated-by-ai_24640-80521.jpg"
            alt="Picture"
            width={100}
            height={450}
          />
          <div className="spicy rounded-2xl">
            {/* <div className="main-quality-spices lg:flex">
              <div className="lg:w-6/12">
                <div className="high-quality-head text-3xl">
                  High Quality <span className="text-warning">Product</span>
                  <div className="and-delievery lg:mr-16 mr-10">
                    And International
                  </div>
                  <div className="services lg:mr-32 mr-24">Trade Services</div>
                </div>
                <div className="whatsapp-logo flex items-center">
                  <div>
                    <div className="font-bold mr-10">
                      &nbsp;P: +91-0755-4902290
                    </div>
                    <div className="font-bold">
                      &nbsp;E: info@tendonigroup.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-6/12 hidden lg:block ">
                <div className="custom-card container flex bg-orange">
                  <div className="lg:w-6">
                    <div className="abcd">
                      <div className="new-cc">
                        <span className="number-head text-2xl">2000+</span>
                        <br />
                        <span className="name-happy text-base">
                          Happy Client
                        </span>
                      </div>
                      <div className="new-cc1">
                        <span className="text-2xl">15+</span>
                        <br />
                        <span className="name-happy text-base">Spices</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-6">
                    <div className="abcd1">
                      <div className="new-cc2">
                        <span className="text-2xl">600+</span>
                        <br />
                        <span className="name-happy text-base">Awards Won</span>
                      </div>
                      <div className="new">
                        <span className="text-base">400+</span>
                        <br />
                        <span className="name-happy text-base">Members</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="p-6">
              <div className="flex justify-center items-center py-2">
                <div className="w-full md:w-2/3 lg:w-1/2 ">
                  {/* lg:w-6/12  */}
                  <div className="">
                    <div className="high-quality-head text-4xl leading-tight items-center justify-center">
                      High Quality{" "}
                      <span className="text-warning text-[#A67A44]">
                        Product
                      </span>
                      <div className="and-delievery lg:mr-16 md:mr-10">
                        And International
                      </div>
                      <div className="services lg:mr-32 sm:mr-4">
                        Trade Services
                      </div>
                    </div>

                    <div className="whatsapp-logo flex items-center">
                      <div>
                        <div className="font-bold lg:mr-10">
                          &nbsp;P: +91-0755-4902290
                        </div>
                        <div className="font-bold">
                          &nbsp;E: info@tendonigroup.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block overflow-hidden rounded-lg w-1/2 font-bold">
                  <div className="flex ">
                    <div className="w-1/2 md:py-8 lg:py-16 bg-[#A67A44] border border-white border-l-0 border-t-0">
                      <div className="new-cc">
                        <span className="number-head sm:text-lg md:text-xl lg:text-2xl">2000+</span>
                        <br />
                        <span className="name-happy sm:text-xl md:text-2xl lg:text-3xl">
                          Happy Client
                        </span>
                      </div>
                    </div>

                    <div className="w-1/2 md:py-8 lg:py-16 bg-[#A67A44] border-b border-white">
                      <div className="new-cc1">
                        <span className="sm:text-lg md:text-xl lg:text-2xl">15+</span>
                        <br />
                        <span className="name-happy sm:text-xl md:text-2xl lg:text-3xl">Spices</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/2 md:py-8 lg:py-16 bg-[#A67A44] border-r border-white">
                      <div className="new-cc2">
                        <span className="sm:text-lg md:text-xl lg:text-2xl">600+</span>
                        <br />
                        <span className="name-happy sm:text-xl md:text-2xl lg:text-3xl">Awards Won</span>
                      </div>
                    </div>

                    <div className="w-1/2  md:py-8 lg:py-16 bg-[#A67A44]">
                      <div className="new">
                        <span className="sm:text-lg md:text-xl lg:text-2xl">400+</span>
                        <br />
                        <span className="name-happy sm:text-xl md:text-2xl lg:text-3xl">Members</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Section>
    </>
  );
}

export default HightQuality;
