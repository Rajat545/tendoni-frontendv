"use client";
// import Swiper core and required modules
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "@/Data/home";
import CardBoard from "@Images/slider/cardboard.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
import Section from "@/components/Section/Section";
// import Section from;

const Testimonials = () => {
  return (
    <Section
      title="Testimonials"
      id="testimonials"
      subtitle="Read trusted reviews from our customers"
      background="bg-[#F3F4F6]"
      // textColor="text-white"
      //backgroundImage="bg-[url('../../public/images/slider/sunny-meadow-landscape.jpg')]"
    >
      <div className="w-full md:py-6 rounded">
        <Swiper
          speed={1500}
          modules={[A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop
          style={{ maxHeight: "480px" }}
        >
          <div className="h-full">
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex items-center justify-center md:h-full">
                  <blockquote className="flex md:h-full flex-col items-center rounded-md bg-white p-4 md:p-6 shadow-sm  lg:p-12 h-full">
                    <div>
                      <div className="mt-4">
                        <p className="text-xl font-bold text-gray-700">
                          {testimonial.title}
                        </p>
                        <p className="mt-4 text-justify leading-relaxed text-gray-700">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                    {/* <footer className="mt-4 text-sm text-left font-medium text-accentColor">
                      &mdash; {testimonial.author}
                    </footer> */}
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
            ;
          </div>
        </Swiper>
      </div>
    </Section>
  );
};

export default Testimonials;
