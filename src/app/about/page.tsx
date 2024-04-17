import React from "react";
import Photo from "../../../public/images (3).jpeg";
import Image from "next/image";
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
    <div className="w-full">
      <div className="w-4/5 h-screen m-auto flex flex-col justify-center ">
        <div className="flex justify-between mt-[-6rem]">
          <h1 className="text-2xl text-green-900">2024 Hottest temperautre in Myanmar</h1>
          <div>
            <input className="h-8 p-1" placeholder="Search...."/>
            <button className="bg-green-900 w-30 h-8 p-1 text-white">Search</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-16">
          {dataList.map((item) => (
            <div key={item.id}>
              <Image src={item.image} alt="" />
              <h2>{item.region}</h2>
              <div>
                {" "}
                <h3>{item.name}</h3>
                <p>{item.high}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
