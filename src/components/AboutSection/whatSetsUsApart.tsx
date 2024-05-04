import Image from "next/image";
import { whatSetsUsApartdata } from "@/Data/about";
import Section from "../Section/Section";

const WhatSetsUsApart = () => {

    return (
        <Section title="About Us" id="aboutus" subtitle="What Sets Us Apart!">
            <div className="flex flex-col lg:flex-row xl:flex-row w-full">
                {whatSetsUsApartdata.map((data,index)=>(
                    <div key={index} className=" flex-1 h-full flex w-full flex-col items-center justify-center md:p-4">
                            <div className="flex justify-center p-4">
                                <Image src={data?.image_url} alt="Quality" height={64} width={64} />
                            </div>
                            <h1 className="text-sm md:text-base lg:text-lg xl:text-xl font-poppins text-accentColor font-medium text-center">{data?.title}</h1>
                            <p className="lg:text-base text-sm font-poppins text-gray-700 text-justify py-2 md:p-2">{data?.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default WhatSetsUsApart;