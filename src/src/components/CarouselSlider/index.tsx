'use client'
import {  Navigation, Autoplay, Pagination, Scrollbar, A11y, Parallax, EffectFade} from 'swiper/modules';
import SwiperCore from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import { sliderData } from '@/Data/home';

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

const CarouselSlider = () => {

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax, EffectFade]}
            slidesPerView={1}
            speed={1500}
            parallax={true}
            grabCursor={true}
            scrollbar={{ 
                draggable: true,
                hide: true,
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: true,
            }}
            loop
            className={"lg:h-[100vh] h-auto"}
            effect='fade'
            fadeEffect={{
                crossFade: true,
            }}
        >
            <div className='flex justify-center w-full '>
                {sliderData?.map(slider =>(
                    <SwiperSlide key={slider.id} className="flex items-center justify-center relative ">
                        <div className='w-full h-full bg-cover bg-center'>
                            <Image src={slider.image} width={0} height={0} style={{width:"100%",height:"auto"}} className="w-full h-full md:h-[100%] object-cover" alt='slider image' />
                            {/* <div className="absolute   top-3/4 left-2/4 container m-auto px-6 transform -translate-x-1/2 -translate-y-1/2 text-accentColor text-center space-y-8 ">
                                <div className="title text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light font-merriweather text-white [text-shadow: 5px 3px 7px rgba(0, 0, 0, 0.77)]" data-swiper-parallax="-900">
                                    {slider.title}
                                </div>
                                <div className="subtitle text-xl md:text-2xl lg:text-3xl xl:text-4xl font-poppins font-normal [text-shadow: 5px 3px 7px rgba(0, 0, 0, 0.77)]" data-swiper-parallax="-600">
                                    {slider.subtitle}
                                </div>
                                <div className="text mt-2 text-base md:text-lg lg:text-xl xl:text-2xl [text-shadow: 5px 3px 7px rgba(0, 0, 0, 0.77)]" data-swiper-parallax="-300">
                                    <p>
                                    {slider.text}
                                    </p>
                                </div>
                            </div> */}
                        </div> 
                    </SwiperSlide>
                ))};
            </div>
        </Swiper>
  );
};

export default CarouselSlider;