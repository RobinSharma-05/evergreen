import React from "react";
import chicago_section_img from "../assets/images/png/chicago.png";

const Chicago = () => {
  return (
    <div className="max-w-[1140px] mx-auto px-3">
      <div className="lg:flex items-center justify-center gap-[85px] my-12 md:my-20 lg:my-[124px]">
        <img
          className="w-2/3 md:w-2/5 mx-auto mb-6 lg:mb-0"
          src={chicago_section_img}
          alt=""
        />
        <div>
          <h3 className="ff_libre text-2xl md:text-3xl lg:text-4xl font-medium text-center lg:text-start">
            Evergreen Landscapes is a full-service landscaping company servicing
            the{" "}
            <span className="italic font-medium text-[#88C701]">Chicago</span>{" "}
            land area.
          </h3>
          <div className="flex justify-center lg:justify-start mx-auto text-center lg:text-start">
            {" "}
            <div>
              <p className="opacity-[50%] max-w-[450px] mt-[18px]">
                Our team is dedicated to giving our clients the very best of
                landscaping in a safe and professional manner.
              </p>
              <p className="opacity-[50%] max-w-[500px] mt-2">
                Founded in 2012, Evergreen Landscapes (formerly David's Lawn
                Care) has come a long way from its beginnings. When we first
                started out, our passion for providing quality and affordable
                services to our valuable clients drove us to take action and
                gave us the momentum to turn hard work and inspiration into a
                growing landscaping company. We now serve customers all over the
                Chicago land area and are thrilled to be a part of the
                landscaping industry.
              </p>
              <p className="opacity-[50%] max-w-[500px] mt-2">
                We hope you enjoy our services as much as we enjoy offering them
                to you. If you have any questions or comments, please don't
                hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chicago;
