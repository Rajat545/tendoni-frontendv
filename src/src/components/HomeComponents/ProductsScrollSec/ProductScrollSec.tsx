import Section from "@/components/Section/Section";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { productSpices } from "../../../Data/home";
import "swiper/css";
import "swiper/swiper-bundle.css";
import Image from "next/image";

const ProductsScrollSec = () => {
  return (
    // <section id="Product Scroller" className={`w-full py-4 md:py-8 lg:py-10 xl:py-12 bg-inherit`}>
    //         <div className="flex flex-col w-full">
    //             <div className="flex p-2 w-full flex-col space-y-2 pb-4">
    //                 <h1 className="w-full text-center font-merriweather text-accentColor text-xl md:text-2xl lg:text-3xl xl:text-4xl">
    //                     Products
    //                 </h1>
    //                 <h2 className={`w-full text-center font-poppins text-base md:text-lg lg:text-xl xl:text-2xl font-extralight tracking-tight text-gray-900 `} >
    //                     Our Huge Variety Of Spices
    //                 </h2>
    //             </div>
    //             <div className="productBackgroundImage py-20 ">
    //                 <div className="w-full h-auto px-6 container mx-auto">
    //                     <Swiper
    //                         speed={1500}
    //                         modules={[A11y, Autoplay]}
    //                         spaceBetween={30}
    //                         slidesPerView={1}
    //                         autoplay={{
    //                             delay: 600,
    //                             disableOnInteraction: true,
    //                         }}
    //                         breakpoints={{
    //                             480: {
    //                             slidesPerView: 2,
    //                             },
    //                             768: {
    //                             slidesPerView: 3,
    //                             },
    //                             1024: {
    //                             slidesPerView: 4,
    //                             },
    //                             1200: {
    //                             slidesPerView: 5,
    //                             },
    //                         }}
    //                         loop
    //                         className="swiper-container"
    //                         >
    //                         <div className="flex flex-col ">
    //                             {productSpices.map((spices) => (
    //                                 <SwiperSlide key={spices.id}>
    //                                     <div className="flex flex-col h-full items-center justify-center">
    //                                         <div className="w-full h-full items-stretch bg-cover bg-center">
    //                                             <Image
    //                                             src={spices.ProductImage}
    //                                             alt="..."
    //                                             className="w-full h-full p-12  object-cover"
    //                                             />
    //                                         </div>
    //                                         <div className="font-poppins text-center font-normal inline text-gray-800 text-base md:text-lg lg:text-xl">
    //                                             <h1>{spices.ProductName}</h1>
    //                                         </div>
    //                                     </div>
    //                                 </SwiperSlide>
    //                             ))}
    //                         </div>
    //                     </Swiper>
    //                 </div>
    //             </div>
    //         </div>
    // </section>
    <Section
      id="products"
      title="Products"
      subtitle="Our Huge Variety Of Spices & Masalas!"
      backgroundImage="productBackgroundImage"
    >
      <div className="w-full">
        <Swiper
          speed={1500}
          modules={[A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 600000000000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          loop
          className="swiper-container "
        >
          <div className="flex flex-col ">
            {productSpices.map((spices) => (
              <SwiperSlide key={spices.id}>
                <div className="flex flex-col h-full items-center justify-center">
                  <div className="py-6 w-full h-full items-stretch bg-cover bg-center">
                    <Image
                      src={spices.ProductImage}
                      alt="..."
                      className="w-full h-full pb-0 p-12 pt-0 py-4  object-cover"
                      // style={{ width: "358px", height: "380px" }}
                    />
                    <div className="font-poppins text-center font-normal inline text-gray-800 text-base md:text-lg lg:text-xl">
                      <h1>{spices.ProductName}</h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </Section>
  );
};

export default ProductsScrollSec;
