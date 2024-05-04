"use client"
import ScrollAnimation from "@/utils/ScrollAnimation";
import React from "react";
import Image from "next/image";

function CardWithCenterImage({cardObject}) {
    return (
        <ScrollAnimation>
        <div className="w-full sm:flex justify-center max-h-[520px] md:py-5">
            <div className="w-full sm:flex justify-evenly container max-h-[520px]" >
                <div className="shadow-sm md:w-[33.3%] sm:w-[60%] w-full">
                    <p className="sm:p-4 sm:py-2 text-lg text-accentColor text-[1.2rem] hidden sm:block">
                        {cardObject?.titleOne}
                    </p>
                    <div className="sm:px-6">
                        <h3 className="text-xl font-bold">{cardObject?.descriptionOne}</h3>
                        <div className="py-3">
                        {cardObject?.listOne.map((item:String,index:any)=>(
                            <p className="ps-2" key={index}>
                            {index+1}.  {item}
                            </p>
                        ))}
                        </div>
                    </div>
                </div>
                <div className="md:w-[33.3%] sm:w-[40%] hidden sm:block relative" style={{ backgroundColor: "#FFFFFF", height: "100%" }}>
                <Image
                    src={cardObject?.imageOne}
                    fill={true}
                    alt="warehouse"
                    layout={'fill'}
                    objectFit={'cover'}
                    />
                </div>
                <div className="shadow-sm md:w-[33.3%] sm:hidden block md:block w-[100%]">
                    <p className="sm:p-4 sm:py-2 text-lg text-accentColor text-[1.2rem] hidden sm:block">
                    {cardObject?.titleTwo}
                    </p>
                    <div className="sm:p-3">
                        <h3 className="text-xl font-bold">{cardObject?.descriptionTwo}</h3>
                        <div className="py-3">
                        {cardObject?.listTwo.map((item:String,index:any)=>(
                            <p className="ps-2" key={index}>
                            {index+1}.  {item}
                            </p>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </ScrollAnimation>
    );
}

export default CardWithCenterImage;
