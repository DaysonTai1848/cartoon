import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-milk flex flex-row items-center justify-around overflow-hidden grow">
      <div className="flex flex-col w-1/2">
        <div className="font-domine text-5xl text-wrap">
          Going to the dentist just got
          <span className="font-extrabold">better.</span>
        </div>
        <div>[Dentist office in Chicago, IL]</div>
        <button className="text-black font-bold border bg-orange-200 py-3 px-2 rounded-full border-black hover:text-white hover:bg-black">
          BOOK NOW
        </button>
        <div>Or call us at 312-971-0837</div>
      </div>
      <div className="w-1/2">Picture</div>
    </div>
  );
};

export default Hero;
