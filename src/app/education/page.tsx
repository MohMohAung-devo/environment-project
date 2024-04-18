import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen ">
      <div className="w-4/5 h-[70vh] m-auto flex flex-col justify-center ">
        <div className="w-2/3 m-auto flex flex-col items-center text-center  justify-center">
          <h1 className=" text-3xl text-green-900 font-bold">
            Learn How to Reduce Carbon Dioxide Emissions and Promote Plant
            Growth
          </h1>

          <p className="text-lg mt-8 mb-7">
            Climate change is a pressing issue that affects us all. By taking
            simple actions in our daily lives, we can reduce carbon dioxide
            emissions and contribute to a healthier planet.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-7">
          <div className="w-4/5 h-[35vh] p-3 text-black rounded-lg">
            <h2 className="text-2xl mb-5">Reduce Carbon Dioxide Emissions</h2>
            <div className="w-full h-20vh">
              <video controls style={{ width: "100%", height: "300px" }}>
                <source src="video1.mp4" type="video/mp4" height={100} />
              </video>
            </div>
            <p>
              Carbon dioxide (CO2) is a major greenhouse gas that contributes to
              global warming. Here are some ways you can reduce your carbon
              footprint:
            </p>
          </div>
          <div className="w-4/5 h-[35vh]  p-3 text-black rounded-lg">
            <h2 className="text-2xl mb-5">
              Promote Plant Growth and Reduce Deforestation
            </h2>

            <div className="w-full h-20vh">
              <video controls style={{ width: "100%", height: "300px" }}>
                <source src="video1.mp4" type="video/mp4" height={100} />
              </video>
            </div>
            <p>
              Plants play a crucial role in absorbing carbon dioxide and
              releasing oxygen. Here how you can help promote plant growth and
              protect forests:
            </p>
            {/* <ul>
              <li>Plant trees and native vegetation in your community.</li>
              <li>Support reforestation and afforestation projects.</li>
              <li>
                Practice sustainable land management and avoid deforestation.
              </li>
              <li>
                Conserve water and reduce pollution to protect plant habitats.
              </li>
              <li>
                Learn about the importance of biodiversity and ecosystem
                conservation.
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
