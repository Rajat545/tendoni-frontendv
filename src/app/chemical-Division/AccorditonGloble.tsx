import React, { useState } from "react";
import AccordionItem from "./pharmaceutical/accodition";
import AccordionItem2 from "./pharmaceutical/accorditon2";
import AccordionItem3 from "./pharmaceutical/accodition3";

function AccorditionGloble(accorditiondata: any) {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [openAccordion2, setOpenAccordion2] = useState(0);
  const [openAccordion3, setOpenAccordion3] = useState(0);

  const handleAccordionToggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const handleAccordionToggle2 = (index) => {
    setOpenAccordion2(openAccordion2 === index ? null : index);
  };
  const handleAccordionToggle3 = (index) => {
    setOpenAccordion3(openAccordion3 === index ? null : index);
  };
  return (
    <>
      <div className="md:bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
        {accorditiondata?.accorditiondata.map((item) => (
          <>
            <div className="lg:p-4 p-0">
              <div className="max-w-md mx-auto">
                <div className=" lg:p-4 p-0 py-2 rounded-md ">
                  {item.leftAccordition.map((data, index) => (
                    <AccordionItem
                      key={index}
                      title={data?.header}
                      content={data?.subHeader}
                      isOpen={openAccordion === index}
                      onToggle={() => handleAccordionToggle(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-100 lg:p-4 p-0">
              <div className="max-w-md mx-auto">
                <div className=" lg:p-4 p-0 md:py-2 rounded-md ">
                  {item.rightAccordition.map((data, index) => (
                    <AccordionItem2
                      key={index}
                      title={data?.header}
                      content={data?.subHeader}
                      isOpen={openAccordion2 === index}
                      onToggle={() => handleAccordionToggle2(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-100 lg:p-4 p-0">
              <div className="max-w-md mx-auto">
                <div className=" lg:p-4 p-0 md:py-2 rounded-md ">
                  {item.middleAccordition.map((data, index) => (
                    <AccordionItem3
                      key={index}
                      title={data?.header}
                      content={data?.subHeader}
                      isOpen={openAccordion3 === index}
                      onToggle={() => handleAccordionToggle3(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default AccorditionGloble;
