import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen bg-green-900">
      <div className="w-4/5 h-[80vh] m-auto flex flex-row justify-between items-center align-middle">
        <div className="w-2/4 h-[100%] flex flex-col justify-center  items-center">
          <h1 className="text-4xl text-white">Live Well</h1>
          <h1 className="text-4xl text-white">Eat well</h1>
          <button className="text-2xl w-40 p-1 border-2 border-white bg-white rounded-lg mt-5">
            More
          </button>
        </div>
        <div className="w-2/4 h-[100%] flex flex-col justify-center  items-center">
          <h1 className="text-white text-2xl">World Photo</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
