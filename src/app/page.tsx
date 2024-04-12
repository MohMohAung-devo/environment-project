import React from "react";
import Photo from "../../public/gfs-temperature-at-1300-utc-on-march-11-2024.webp";
import Photo1 from "../../public/istockphoto-1371476360-170667a.webp";
import Image from "next/image";
const page = () => {
  return (
    <div
      className="w-full h-screen

    inset-0 bg-green-900
    "
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 0% 70%)" }}
    >
      <div className="w-4/5 h-[70vh] m-auto flex flex-row justify-between items-center align-middle">
        <div className="w-2/4 h-[100%] flex flex-col justify-center  items-center ">
          <h1 className="text-4xl text-white">Live Well</h1>
          <h1 className="text-4xl text-white">Eat well</h1>
          <button className="text-2xl w-40 p-1 border-2 border-white bg-white rounded-lg mt-5">
            More
          </button>
        </div>
        <div className="w-2/4 h-[100%] flex flex-col justify-center  items-center">
          <Image src={Photo1} alt="" />
        </div>
      </div>
      <div>
        <h1 className="text-red-900 mt-5">Care your healthy</h1>
      </div>
    </div>
  );
};

export default page;

// bg-gradient-to-b from-green-900 via-green-900 to-white-500
