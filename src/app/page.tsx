import React from "react";
import Photo from "../../public/gfs-temperature-at-1300-utc-on-march-11-2024.webp";
import Photo1 from "../../public/istockphoto-1371476360-170667a.webp";
import Photo2 from "../../public/worldPhoto.png";
import Photo3 from "../../public/careWorld.png";
import Image from "next/image";
const page = () => {
  return (
    <div
      className="w-full h-screen
      flex flex-col 
    "
    >
      <div
        className="bg-green-900 w-full h-70vh relative"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)" }}
      >
        <div className="max-w-screen-2xl h-[65vh]  m-auto flex flex-row justify-between items-center align-middle py-0 px-10">
          <div className="w-2/4 h-[100%] flex flex-col justify-center  px-5">
            <h1 className="text-4xl text-white">Live Well</h1>
            <h1 className="text-3xl text-white mt-5">Eat well</h1>
            <h1 className="text-2xl text-white mt-5">Life Happy</h1>
            <h1 className="text-2xl text-white mt-5">
              Play plant for future world , to survive my future children
            </h1>
            <button className="text-1xl w-40 p-1 border-2 border-white bg-white rounded-lg mt-5">
              More
            </button>
          </div>
          <div className="w-2/4 h-[100%] flex flex-col justify-center  items-center">
            <Image src={Photo2} alt="" width={500} height={300} />
          </div>
        </div>
      </div>
      <div
        className="w-full h-[40vh] mt-[-3rem] flex flex-col justify-center items-center "
        // style={{ clipPath: "polygon(0% 60%, 100% 0%, 100% 50%, 100% 100%)" }}
      >
        {/* <h2 className="text-3xl mt-11 underline underline-offset-4 text-green-900">
          Care World for future{" "}
        </h2> */}
        <h2 className="text-3xl   text-green-900">
          Take Action Against Climate Change
        </h2>
        <p className="text-lg mt-4 text-center max-w-md">
          High temperatures pose a threat to our planet. See the impact and
          learn how you can help:
        </p>

        <div className="mt-6">
          <p className="text-lg text-center">
            Join the movement to combat climate change and protect our future!
          </p>
          <button className="text-1xl text-white w-40 p-2 border-2 border-white bg-green-900 rounded-lg mt-2">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
