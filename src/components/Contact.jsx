import React from "react";
import { Mail, Phone } from "./Icons";

const Contact = () => {
  return (
    <div id="contact">
      <div className="bg-[url('/src/assets/images/png/dots_image.png')] bg-center bg-cover bg-no-repeat mt-14 sm:mt-14 lg:mt-[176px] mb-8 md:mb-[74px]">
        <div className="max-w-[948px] px-3 mx-auto pt-6 md:pt-[66px] pb-6 md:pb-[79px] relative">
          <div className="text-center lg:text-start mx-auto">
            <div>
              <h4 className="ff_libre font-normal text-3xl md:text-3xl lg:text-4xl">
                Contact Us
              </h4>
              <div className="flex items-center justify-center lg:justify-start gap-4 cursor-pointer mb-[11px] mt-5">
                <a
                  href="#"
                  className="rounded-[52px] bg-white h-[44px] w-[44px] flex justify-center items-center"
                >
                  <Phone />
                </a>
                <a href="tel:+4733378901">
                  {" "}
                  <p className="ff_poppins font-normal text-base opacity-[70%]">
                    (312) 610-9790
                  </p>
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4 cursor-pointer">
                <a
                  href="mailto:someone@example.com"
                  className="rounded-[52px] bg-white h-[44px] w-[44px] flex justify-center items-center"
                >
                  <Mail />
                </a>
                <a href="#">
                  {" "}
                  <a
                    href="mailto:someone@example.com"
                    className="ff_poppins font-normal text-base opacity-[70%]"
                  >
                    info@evergreenlandscapesco.com
                  </a>
                </a>
              </div>
              <h5 className="ff_libre font-normal text-base mt-[29px]">
                Hours
              </h5>
              <p className="ff_poppins font-normal text-base opacity-[70%] max-w-[161px] mt-1 mb-[21px] mx-auto lg:mx-0">
                MON-FRI: 9AM - 5PM SAT-SUN: CLOSED
              </p>
              <p className="ff_poppins font-normal italic text-base opacity-[70%] max-w-[309px] mx-auto lg:mx-0 mb-7 lg:mb-0">
                Contact us today for a free no obligation consultation
              </p>
            </div>
            <div className="mx-auto lg:mx-0 max-w-[489px] max-h-[633px] border-[6px] rounded-2xl bg-white border-[#EEF7EA] pe-8 ps-[30px] pt-8 pb-[40rem] md:pb-9 lg:absolute right-0 top-[-64px]">
              <h5 className="ff_libre font-normal text-2xl max-w-[424px]">
                Contact us! someone from{" "}
                <span className="text-[#88C701] italic me-1">Evergreen</span>
                will reach out to you soon
              </h5>
              <div>
                <div className="hover:border-[2px] hover:border-[#EBF7E6] transition-all duration-300 border-[2px] border-white rounded-[10px] mt-[30px]">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border rounded-[10px] border-[#E6E6E6] py-4 px-3 w-full h-12 hover:border-[#88C701] ff_poppins font-normal text-base"
                  />
                </div>
                <div className="hover:border-[2px] hover:border-[#EBF7E6] transition-all duration-300 border-[2px] border-white rounded-[10px] mt-[9px]">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="border rounded-[10px] border-[#E6E6E6] py-4 px-3 w-full h-12 hover:border-[#88C701] ff_poppins font-normal text-base"
                  />
                </div>
                <div className="hover:border-[2px] hover:border-[#EBF7E6] transition-all duration-300 border-[2px] border-white rounded-[10px] mt-[9px]">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="border rounded-[10px] border-[#E6E6E6] py-4 px-3 w-full h-12 hover:border-[#88C701] ff_poppins font-normal text-base"
                  />
                </div>
                <div className="hover:border-[2px] hover:border-[#EBF7E6] transition-all duration-300 border-[2px] border-white rounded-[10px] mt-[9px]">
                  <input
                    type=""
                    placeholder="Address"
                    className="border rounded-[10px] border-[#E6E6E6] py-4 px-3 w-full h-12 hover:border-[#88C701] ff_poppins font-normal text-base"
                  />
                </div>
                <div className="border-white rounded-[10px] mt-[9px]">
                  <textarea
                    className="border rounded-[10px] border-[#E6E6E6] py-4 px-3 w-full h-[148px] hover:border-[#88C701] ff_poppins font-normal text-base"
                    id="w3review"
                    name="w3review"
                    rows="4"
                    cols="50"
                    placeholder="Messege"
                  ></textarea>
                </div>
              </div>
              <a
                href=""
                className="bg-[#88C701] text-white ff_poppins font-medium text-base py-[15px] px-[27px] mt-8 rounded-[25px] flex justify-center border-[2px] border-[#88C701] hover:bg-white hover:text-[#88C701] transition-all duration-300"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
