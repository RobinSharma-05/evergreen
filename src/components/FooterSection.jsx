import React from "react";
import footer_logoo from "../assets/images/svg/Group 18.svg";
import { Facebook, Instagram, Twiter } from "./Icons";

const FooterSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F0F8EC] pt-7 md:pt-[65px]">
      <div className="max-w-[1140px] px-3 mx-auto">
        <div className="flex-wrap flex items-baseline lg:justify-between justify-center text-center lg:text-start">
          <div className="mb-7 lg:mb-0">
            <a href="#" className="flex justify-center lg:justify-start">
              {" "}
              <img className="mb-[6px]" src={footer_logoo} alt="" />
            </a>
            <p className="ff_poppins font-normal text-base max-w-[410px] opacity-[70%]">
              Lorem ipsum dolor sit amet consectetur. Suspendisse semper felis
              vulputate leo. Id duis morbi facilisis consequat mattis facilisi.{" "}
            </p>
          </div>
          <div>
            <ul className="flex gap-5 md:gap-7 items-center">
              <li className="ff_poppins font-normal text-base opacity-[70%]">
                <a href="">Home</a>
              </li>
              <li className="ff_poppins font-normal text-base opacity-[70%]">
                <a href="">Our Services</a>
              </li>
              <li className="ff_poppins font-normal text-base opacity-[70%]">
                <a href="">Photos</a>
              </li>
              <li className="ff_poppins font-normal text-base opacity-[70%]">
                <a href="">Contact Us</a>
              </li>
            </ul>
            <ul className="flex gap-5 items-center justify-center lg:justify-end mt-[21px]">
              <li className="hover:translate-y-[-5px] transition-all duration-200">
                <a href="#">
                  <Twiter />
                </a>
              </li>
              <li className="hover:translate-y-[-5px] transition-all duration-200">
                <a href="#">
                  <Facebook />
                </a>
              </li>
              <li className="hover:translate-y-[-5px] transition-all duration-200">
                <a href="#">
                  {" "}
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full border border-black opacity-[20%] mt-[55px]"></div>
        <p className="text-center ff_poppins font-normal text-base pb-[33px] mt-[35px] opacity-[70%]">
          Copyright © 2023 Evergreen Landscapes LLC. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
