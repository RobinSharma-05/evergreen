import React from "react";
import services_1 from "../assets/images/webp/services_image_1.webp";
import services_2 from "../assets/images/webp/services_image_2.webp";
import services_3 from "../assets/images/webp/services_image_3.webp";

const Services = () => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <h4 className="flex justify-center ff_libre font-medium text-4xl">
        Our Services
      </h4>
      <div className="flex-wrap flex justify-center items-center gap-6 mt-[37px]">
        <div className="w-[70%] sm:w-1/3 lg:w-[31.9%] relative flex justify-center cursor-pointer overflow-hidden group">
          <div className="absolute bottom-[-100%] flex justify-center text-center items-center w-full h-full bg-black opacity-[80%] rounded-[10px] transition-all duration-500 group-hover:bottom-0">
            <div>
              <h4 className="ff_libre font-normal text-xl lg:text-[22px] text-white p-[5px]">
                Commercial Property Services
              </h4>
              <div className="max-w-[253px] mx-auto p-1">
                <p className="text-white ff_poppins font-normal text-[13px] lg:text-base">
                  {" "}
                  Snow Shoveling
                </p>
                <p className="text-white ff_poppins font-normal text-[13px] lg:text-base">
                  Snow Plowing
                </p>
                <p className="text-white ff_poppins font-normal text-[13px] lg:text-base">
                  Cleaning of Walkways & Sidewalks Ice Melt Applications
                </p>
              </div>
            </div>
          </div>
          <img className="w-full" src={services_1} alt="" />
          <p className="text-center absolute bottom-5 ff_libre font-normal text-xl p-[5px] lg:text-[22px] text-white group-hover:hidden transition-all duration-700">
            Commercial Property Services
          </p>
        </div>{" "}
        <div className="w-[70%] sm:w-1/3 lg:w-[31.9%] relative flex justify-center cursor-pointer overflow-hidden group">
          <div className="absolute bottom-[-100%] flex justify-center text-center items-center w-full h-full bg-black opacity-[80%] rounded-[10px] transition-all duration-500 group-hover:bottom-0">
            <div className="mx-auto">
              <h4 className="ff_libre font-normal text-xl lg:text-[22px] text-white p-[5px]">
                Commercial Property Services
              </h4>
              <div className="max-w-[253px] mx-auto p-1">
                <p className="text-white ff_poppins font-normal text-[13px] lg:text-base">
                  {" "}
                  Snow Shoveling
                </p>
                <p className="text-white ff_poppins font-normal text-[13px] lg:text-base">
                  Snow Plowing
                </p>
                <p className="text-white ff_poppins font-normal text-[13px] lg:text-base">
                  Cleaning of Walkways & Sidewalks Ice Melt Applications
                </p>
              </div>
            </div>
          </div>
          <img className="w-full" src={services_2} alt="" />
          <h4 className="text-center absolute bottom-5 ff_libre font-normal p-[5px] text-xl lg:text-[22px] text-white group-hover:hidden transition-all duration-700">
            Residential Property Services
          </h4>
        </div>{" "}
        <div className="w-[70%] sm:w-1/3 lg:w-[31.9%] relative flex justify-center cursor-pointer overflow-hidden group">
          <div className="absolute bottom-[-100%] flex justify-center text-center items-center w-full h-full bg-black opacity-[80%] rounded-[10px] transition-all duration-500 group-hover:bottom-0">
            <div className="max-w-[253px] mx-auto p-1">
              <div>
                <h4 className="ff_libre font-normal text-xl lg:text-[22px] text-white p-[5px]">
                  Winter services
                </h4>
                <div className="max-w-[253px] mx-auto">
                  <p className="text-white ff_poppins font-normal text-[13px] lg:text-base">
                    {" "}
                    Snow Shoveling
                  </p>
                  <p className="text-white ff_poppins font-normal text-[13px] lg:text-base">
                    Snow Plowing
                  </p>
                  <p className="text-white ff_poppins font-normal text-[13px] lg:text-base">
                    Cleaning of Walkways & Sidewalks Ice Melt Applications
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img className="w-full" src={services_3} alt="" />
          <h4 className="absolute bottom-5 ff_libre font-normal text-xl p-[5px] lg:text-[22px] text-white group-hover:hidden transition-all duration-700">
            Winter services
          </h4>
        </div>{" "}
      </div>
    </div>
  );
};

export default Services;
