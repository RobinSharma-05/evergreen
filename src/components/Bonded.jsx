import React from "react";
import { Puzzle1, Puzzle2, Puzzle3 } from "./Icons";

const Bonded = () => {
  return (
    <div>
      <h2 className="ff_libre font-medium italic text-2xl md:text-3xl xl:text-4xl flex justify-center my-12 md:my-[94px] gap-[11px]">
        Licensed <span className="text-[#88C701]"> - </span> Bonded{" "}
        <span className="text-[#88C701]"> - </span> Insured
      </h2>
      <div className="bg-[url('/src/assets/images/png/dots_image.png')] bg-center bg-cover bg-no-repeat">
        <div className="py-11 md:py-[76px]">
          <h2 className="ff_libre font-normal text-3xl md:text-3xl lg:text-4xl max-w-[474px] text-center mx-auto">
            Why{" "}
            <span className="text-[#88C701] font-medium italic">
              customers choose
            </span>{" "}
            Evergreen Landscapes LLC
          </h2>
          <div className="flex-wrap flex gap-[17px] justify-center mt-11">
            <div className="border border-[#DEEDD6] w-[267px] h-[235px] rounded-[10px] cursor-pointer hover:bg-[white] transition-all duration-200 group">
              <div className="mt-[41px] ml-6">
                <div className="rounded-[52px] bg-white h-[58px] w-[58px] flex justify-center items-center group-hover:bg-[#88C701] transition-all duration-200">
                  <Puzzle1 />
                </div>
                <h3 className="ff_libre font-medium text-xl mt-7">
                  Creative Solutions
                </h3>
                <p className="ff_poppins font-normal text-base opacity-[50%] mt-[11px]">
                  Landscape Design & Build
                </p>
              </div>
            </div>
            <div className="border border-[#DEEDD6] w-[267px] h-[235px] rounded-[10px] cursor-pointer hover:bg-[white] transition-all duration-200 group">
              <div className="mt-[41px] ml-6">
                <div className="rounded-[52px] bg-white h-[58px] w-[58px] flex justify-center items-center group-hover:bg-[#88C701] transition-all duration-200">
                  <Puzzle2 />
                </div>
                <h3 className="ff_libre font-medium text-xl mt-7">
                  Customer Service
                </h3>
                <p className="ff_poppins font-normal text-base opacity-[50%] mt-[11px]">
                  Our team is on call to deliver excellence to our clients
                </p>
              </div>
            </div>
            <div className="border border-[#DEEDD6] w-[267px] h-[235px] rounded-[10px] cursor-pointer hover:bg-[white] transition-all duration-200 group">
              <div className="mt-[41px] ml-6">
                <div className="rounded-[52px] bg-white h-[58px] w-[58px] flex justify-center items-center group-hover:bg-[#88C701] transition-all duration-200">
                  <Puzzle3 />
                </div>
                <h3 className="ff_libre font-medium text-xl mt-7">
                  Peace of mind
                </h3>
                <p className="ff_poppins font-normal text-base opacity-[50%] mt-[11px]">
                  Proven Proactive Approach
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonded;
