import React, { useState } from "react";
import Slider from "react-slick";
import logoo from "../assets/images/webp/logoo.webp";
import bg_header_image from "../assets/images/webp/bg-header-image-1.webp";
import bg_header_image_2 from "../assets/images/webp/bg-header-image-2.webp";
import bg_header_image_3 from "../assets/images/webp/bg-header-image-3.webp";
import arrow_left from "../assets/images/webp/arrow_left.webp";
import arrow_right from "../assets/images/webp/arrow_right.webp";

const HeroSection = () => {
  const slider = React.useRef(null);
  var settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1,
    speed: 2000,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  const [open, setOpen] = useState(false);
  {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }
  return (
    <div>
      <nav>
        <div className="h-[96px] flex items-center justify-between w-full">
          <a href="" className="w-1/2 md:w-1/4" onClick={() => setOpen(false)}>
            <img className="w-10/12 z-10 relative" src={logoo} alt="logo" />
          </a>
          <div className="flex items-center">
            <ul className="flex gap-[30px] items-center">
              <li className="hidden min-[950px]:block">
                <a
                  className="font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-black after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
                  href="#footer"
                >
                  Home
                </a>
              </li>
              <li className="hidden min-[950px]:block">
                <a
                  className="font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-black after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
                  href="#footer"
                >
                  About us
                </a>
              </li>
              <li className="hidden min-[950px]:block">
                <a
                  className="font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-black after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
                  href="#footer"
                >
                  Our Services
                </a>
              </li>
              <li className="hidden min-[950px]:block">
                <a
                  className="font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-black after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
                  href="#footer"
                >
                  Gallery
                </a>
              </li>
              <li className="hidden min-[950px]:block">
                <a
                  className="font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-black after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
                  href="#footer"
                >
                  Contact Us
                </a>
              </li>
              <li className="hidden min-[950px]:block">
                <a
                  className="w-[202px] h-[96px] p-[15px, 27px, 15px, 27px] bg-[#88C701] flex justify-center items-center"
                  href="#footer"
                >
                  Request a quote
                </a>
              </li>
            </ul>
            {/* open/close navbar button */}
            <div
              className={`flex w-[30px] min-[400px]:w-[35px] h-[25px] right-5 duration-300 flex-col min-[950px]:hidden items-center justify-between cursor-pointer relative z-10`}
              onClick={() => setOpen(!open)}
            >
              <span
                className={`w-full h-[5px] top-2 duration-300 bg-black rounded ${
                  open == false ? "" : "rotate-45"
                }`}
              ></span>
              <span
                className={`w-full h-[5px] top-2 duration-300 bg-black rounded ${
                  open == false ? "" : "rotate-[135deg] translate-y-[-20px]"
                }`}
              ></span>
              <span
                className={`w-full h-[5px] top-2 duration-300 bg-black rounded ${
                  open == false ? "" : "hidden"
                }`}
              ></span>
            </div>
          </div>
        </div>
        <ul
          className={`w-full h-full fixed flex min-[950px]:hidden justify-center items-center flex-col gap-6 bg-white z-[7] left-[-100%] duration-300 ${
            open == false ? "" : "left-[0%]"
          }`}
        >
          <li>
            <a
              className="font-poppins text-[15px] not-italic font-semibold leading-normal min-[992px]:ml-[65px] relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-black after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
              href="#section1"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-black after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
              href="#section2"
              onClick={() => setOpen(false)}
            >
              About us
            </a>
          </li>
          <li>
            <a
              className="font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-black after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
              href="#section3"
              onClick={() => setOpen(false)}
            >
              Our Services
            </a>
          </li>
          <li>
            <a
              className="font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-black after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
              href="#footer"
              onClick={() => setOpen(false)}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              className="font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-black after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
              href="#footer"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              className="rounded-[10px] py-3 px-4 bg-[#88C701] flex justify-center items-center"
              href="#footer"
              onClick={() => setOpen(false)}
            >
              Request a quote
            </a>
          </li>
        </ul>
      </nav>
      <Slider ref={slider} {...settings}>
        <div className="relative">
          <img
            onClick={() => slider?.current?.slickPrev()}
            className="absolute left-4 md:left-7 top-[40%] cursor-pointer z-10 w-[5%] md:w-[2%]"
            src={arrow_left}
            alt=""
          />
          <img
            onClick={() => slider?.current?.slickNext()}
            className="absolute right-4 md:right-7 top-[40%] cursor-pointer z-10 w-[5%] md:w-[2%]"
            src={arrow_right}
            alt=""
          />
          <img
            className="w-full min-h-[80vh] object-cover"
            src={bg_header_image}
            alt=""
          />
          <div className="absolute bottom-[48px] ml-5 mr-5 md:ml-20 lg:ml-[150px] text-center sm:text-start">
            <h1 className="max-w-[470px] text-3xl md:text-[40px] text-white md:leading-[47px] ff_libre font-bold">
              Ut pretium egestas sagittis{" "}
              <span className=" italic">convallis</span>
            </h1>
            <p className="max-w-[548px] text-base text-white leading-5 mt-2 mb-[30px] ff_poppins font-normal">
              Platea neque amet a dolor. Libero malesuada pellentesque ultrices
              urna pellentesque. Varius in est porttitor pellentesque.
            </p>
            <a
              href=""
              className="ff_poppins font-medium text-base text-white px-[27px] py-[15px] rounded-[25px] inline-block bg-[#88C701] hover:bg-white hover:text-[#88C701] transition-all duration-300 "
            >
              Request a quote
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            onClick={() => slider?.current?.slickPrev()}
            className="absolute left-4 md:left-7 top-[40%] cursor-pointer z-10 w-[5%] md:w-[2%]"
            src={arrow_left}
            alt=""
          />
          <img
            onClick={() => slider?.current?.slickNext()}
            className="absolute right-4 md:right-7 top-[40%] cursor-pointer z-10 w-[5%] md:w-[2%]"
            src={arrow_right}
            alt=""
          />
          <img
            className="w-full min-h-[80vh] object-cover"
            src={bg_header_image_2}
            alt=""
          />
          <div className="absolute bottom-[48px] ml-5 mr-5 md:ml-20 lg:ml-[150px] text-center sm:text-start">
            <h1 className="max-w-[400px] text-3xl md:text-[40px] text-white md:leading-[47px] ff_libre font-bold">
              Donec <span className=" italic">orci mauris</span> in enim viverra{" "}
            </h1>
            <p className="max-w-[548px] text-base text-white leading-5 mt-2 mb-[30px] ff_poppins font-normal">
              Platea neque amet a dolor. Libero malesuada pellentesque ultrices
              urna pellentesque. Varius in est porttitor pellentesque.
            </p>
            <a
              href=""
              className="ff_poppins font-medium text-base text-white px-[27px] py-[15px] rounded-[25px] inline-block bg-[#88C701] hover:bg-white hover:text-[#88C701] transition-all duration-300"
            >
              Request a quote
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            onClick={() => slider?.current?.slickPrev()}
            className="absolute left-4 md:left-7 top-[40%] cursor-pointer z-10 w-[5%] md:w-[2%]"
            src={arrow_left}
            alt=""
          />
          <img
            onClick={() => slider?.current?.slickNext()}
            className="absolute right-4 md:right-7 top-[40%] cursor-pointer z-10 w-[5%] md:w-[2%]"
            src={arrow_right}
            alt=""
          />
          <img
            className="w-full min-h-[80vh] object-cover"
            src={bg_header_image_3}
            alt=""
          />
          <div className="absolute bottom-[48px] ml-5 mr-5 md:ml-20 lg:ml-[150px] text-center sm:text-start">
            <h1 className="max-w-[470px] text-3xl md:text-[40px] text-white md:leading-[47px] ff_libre font-bold">
              Ut pretium egestas sagittis{" "}
              <span className=" italic">convallis</span>
            </h1>
            <p className="max-w-[548px] text-base text-white leading-5 mt-2 mb-[30px] ff_poppins font-normal">
              Platea neque amet a dolor. Libero malesuada pellentesque ultrices
              urna pellentesque. Varius in est porttitor pellentesque.
            </p>
            <a
              href=""
              className="ff_poppins font-medium text-base text-white px-[27px] py-[15px] rounded-[25px] inline-block bg-[#88C701] hover:bg-white hover:text-[#88C701] transition-all duration-300"
            >
              Request a quote
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
