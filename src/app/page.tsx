import React from "react";
import Photo4 from "../../public/wallpaperWorld.png";
import Image from "next/image";
const page = () => {
  return (
    <div
      className="w-full h-screen
      flex flex-col relative
    "
    >
      <div
        className="bg-green-900 w-full h-70vh relative opacity-80"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)" }}
      >
        <div className="max-w-screen-2xl h-[65vh]  m-auto flex flex-col md:flex-row  justify-between items-center align-middle py-0 px-10">
          <div className="w-full md:w-2/4 h-[100%] flex flex-col justify-center px-10 md:px-5">
            <h1 className="text-1xl md:text-3xl text-white font-thin uppercase">
              hottest temperaute at Myanmar in 2024
            </h1>
            <h1 className="text-lg md:text-4xl text-white mt-5 uppercase">
              Take care world
            </h1>
            <h1 className="text-lg md:text-3xl text-white mt-5">Life Happy</h1>
            <h1 className="text-1xl text-white mt-5 ">
              Play plant for future world , to survive our children
            </h1>
            <button className="text-1xl w-40 p-2 transition delay-300 duration-300 ease-in-out border-2 border-white bg-white  text-green-900 rounded-lg mt-5">
              More
            </button>
          </div>
          <div className="w-2/4 h-[100%] flex flex-col justify-center  items-center ">
            <Image
              src={Photo4}
              alt=""
              // width={700}
              // height={300}
              style={{ borderRadius: "50%" }}
              className="w-[700px] h-[300px]:"
            />
          </div>
        </div>
      </div>
      <div className="w-3/4 m-auto h-[35vh]   flex flex-col  justify-center items-center ">
        <h2 className="text-lg md:text-3xl   text-green-900">
          Take Action Against Climate Change
        </h2>
        <p className="text-md md:text-lg mt-4 text-center  uppercase border-b-2 border-green-900">
          High temperatures pose a threat to our planet. See the impact and
          learn how you can help
        </p>
      </div>
    </div>
  );
};

export default page;
