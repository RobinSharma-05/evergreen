import React from "react";
import { Coma } from "./Icons";
import star from "../assets/images/svg/star.svg";

const Happy = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="mt-[124px]">
        <h4 className="ff_libre font-normal text-3xl md:text-3xl lg:text-4xl text-center gap-2">
          Check out our{" "}
          <span className="italic text-[#88C701]">happy clients</span>
        </h4>
      </div>
      <div className="flex-wrap flex justify-center mt-[39px] gap-[19px] mx-[26px]">
        <div className="border max-w-[450px] lg:max-h-[233px] rounded-2xl py-5 px-[19px] cursor-pointer">
          <Coma />
          <p className="ff_poppins font-normal italic text-base max-w-[412px] text-[#61676F] my-[15px]">
            Evergreen provided high quality service in a timely manner for me.
            David was a pleasure to deal with, his honesty and customer service
            is unparalleled. If you want the job done right, use Evergreen!
          </p>
          <p className="ff_poppins font-normal text-base mb-[2px]">E. B.</p>
          <div className="flex gap-[5px]">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
        <div className="border max-w-[450px] lg:max-h-[257px] rounded-2xl py-5 px-[19px] cursor-pointer">
          <Coma />
          <p className="ff_poppins font-normal italic text-base max-w-[412px] text-[#61676F] my-[15px]">
            It is quite clear that Dave truly cares about his clients and about
            the work he does for them. If you hire his service, your lawn care
            goals and ambitions will become is own, and he will ensure you are
            not just satisfied but thrilled.
          </p>
          <p className="ff_poppins font-normal text-base mb-[2px]">S. K.</p>
          <div className="flex gap-[5px]">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
        <div className="border max-w-[450px] lg:max-h-[209px] rounded-2xl py-5 px-[19px] cursor-pointer">
          <Coma />
          <p className="ff_poppins font-normal italic text-base max-w-[412px] text-[#61676F] my-[15px]">
            Evergreen Landscapes does amazing work and they are very well
            priced. I definitely will use them for all my landscaping needs.
          </p>
          <p className="ff_poppins font-normal text-base mb-[2px]">Y. C.</p>
          <div className="flex gap-[5px]">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Happy;
