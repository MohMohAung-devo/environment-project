"use client";

import React, { useState } from "react";
import Photo from "../../../public/images (3).jpeg";
import Photo1 from "../../../public/manadlay.jpg";
import Photo2 from "../../../public/monywa.jpg";
import Photo3 from "../../../public/yangon.jpg";
import Image from "next/image";
import { FaPagelines } from "react-icons/fa";
import { TbSunFilled } from "react-icons/tb";
export const page = () => {
  const [colorState, setColorState] = useState("");
  const dataList = [
    {
      id: 1,
      name: "Chauk",
      high: "46 C",
      region: "Magway",
      image: Photo,
      icon: <TbSunFilled />,
    },
    {
      id: 2,
      name: "Magway",
      high: "46 C",
      region: "Magway",
      image: Photo,
      icon: <TbSunFilled />,
    },
    {
      id: 3,
      name: "Monywa",
      high: "44 C",
      region: "Sagaing",
      image: Photo2,
      icon: <TbSunFilled />,
    },
    {
      id: 4,
      name: "Mandalay",
      high: "43 C",
      region: "Manalady",
      image: Photo1,
      icon: <TbSunFilled />,
    },
    {
      id: 5,
      name: "NaypyiTaw",
      high: "44 C",
      region: "Manalady",
      image: Photo1,
      icon: <TbSunFilled />,
    },
    {
      id: 6,
      name: "Yangon",
      high: "39 C",
      region: "Yangon",
      image: Photo3,
      icon: <TbSunFilled />,
    },
    {
      id: 7,
      name: "Chauk",
      high: "46 C",
      region: "Magway",
      image: Photo,
      icon: <TbSunFilled />,
    },
  ];

  return (
    <div className="w-full h-screen relative">
      <div className="bg-green-900 absolute left-[-3rem] top-[-1rem] h-40  md:w-40 rounded-[50%]">
        {" "}
      </div>

      <div className="w-4/5 h-[90vh] md:h-[70vh] m-auto flex flex-col justify-center relative">
        <div className="flex justify-between ">
          <h1 className="text-lg md:text-3xl text-green-900 uppercase ">
            2024 Hottest temperautre in Myanmar
          </h1>
          <div>
            <input className="h-8 p-1" placeholder="Search...." />
            <button className="bg-green-900 w-30 h-8 p-1 text-white">
              Search
            </button>
          </div>
        </div>

        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:mt-20">
          {dataList.map((item) => (
            <div key={item.id} className="w-4/5">
              <Image
                src={item.image}
                alt=""
                style={{ width: "500px", height: "150px" }}
              />
              <h2>
                Region/State: {""}
                {item.region}
              </h2>
              <div className="flex justify-between">
                {" "}
                <h3>{item.name}</h3>
                <div className="flex justify-center items-center gap-4">
                  <div> {item.icon}</div>

                  <p>{item.high}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className=" md:w-full h-[30vh] bg-green-900"
        style={{ clipPath: "polygon(0% 80%, 90% 0%, 100% 70%, 0% 100%)" }}
      ></div>
    </div>
  );
};

export default page;
