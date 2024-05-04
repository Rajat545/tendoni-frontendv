"use client";
// components/Accordion.js

import React from "react";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="mb-2">
      <button
        // className="w-full bg-gray-200 text-gray-700 p-2 rounded-md focus:outline-none"
        onClick={onToggle}
        className={`w-full hover:text-[#A67A44] ${
          isOpen
            ? "md:bg-[#A67A44] bg-gray-200 text-gray-700 font-bold text-left md:text-white md:hover:text-white"
            : "bg-gray-200 font-bold text-left "
        } text-gray-700 text-left p-2 rounded-md focus:outline-none flex items-center`}
      >
        {title}
        {/* <span className="ml-2">
          {isOpen ? (
            <i className="fas fa-minus"></i>
          ) : (
            <i className="fas fa-plus"></i>
          )}
        </span> */}
      </button>
      {/* <div className={`p-2 ${isOpen ? "" : "hidden"}`}>{content}</div> */}
    </div>
  );
};

export default AccordionItem;
