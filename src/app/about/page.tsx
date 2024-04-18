import React from "react";
import Photo from "../../../public/images (3).jpeg";
import Image from "next/image";
import { FaPagelines } from "react-icons/fa";
export const page = () => {
  const dataList = [
    { id: 1, name: "Chauk", high: "46 C", region: "Magway", image: Photo },
    { id: 2, name: "Magway", high: "46 C", region: "Magway", image: Photo },
    { id: 3, name: "Monywa", high: "46 C", region: "Sagaing", image: Photo },
    { id: 4, name: "Mandalay", high: "46 C", region: "Manalady", image: Photo },
    {
      id: 5,
      name: "NaypyiTaw",
      high: "46 C",
      region: "Manalady",
      image: Photo,
    },
    { id: 6, name: "Yangon", high: "46 C", region: "Yangon", image: Photo },
    { id: 7, name: "Chauk", high: "46 C", region: "Magway", image: Photo },
  ];
  return (
    <div className="w-full h-screen relative">
      <div className="bg-green-900 absolute left-[-3rem] top-[-1rem] h-40 w-40 rounded-[50%]">
        {" "}
      </div>
      <div>
        {" "}
        <FaPagelines size={30} color="red" style={{ marginTop: "3rem" }} />
      </div>
      <div className="w-4/5 h-[60vh] m-auto flex flex-col justify-center relative">
        <div className="flex justify-between ">
          <h1 className="text-2xl text-green-900">
            2024 Hottest temperautre in Myanmar
          </h1>
          <div>
            <input className="h-8 p-1" placeholder="Search...." />
            <button className="bg-green-900 w-30 h-8 p-1 text-white">
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mt-20">
          {dataList.map((item) => (
            <div key={item.id} className="w-4/5">
              <Image src={item.image} alt="" />
              <h2>
                Region/State: {""}
                {item.region}
              </h2>
              <div className="flex justify-between">
                {" "}
                <h3>{item.name}</h3>
                <p>{item.high}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-full h-[30vh] bg-green-900"
        style={{ clipPath: "polygon(0% 80%, 90% 0%, 100% 70%, 0% 100%)" }}
      ></div>
    </div>
  );
};

export default page;
