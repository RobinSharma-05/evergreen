import React from "react";
import Slider from "react-slick";
import slider1_1 from "../assets/images/webp/slider1_1.webp";
import slider1_2 from "../assets/images/webp/slider1_2.webp";
import slider1_3 from "../assets/images/webp/slider1_3.webp";
import slider1_4 from "../assets/images/webp/slider1_4.webp";
import slider2_1 from "../assets/images/webp/slider2_1.webp";
import slider2_2 from "../assets/images/webp/slider2_2.webp";
import slider2_3 from "../assets/images/webp/slider2_3.webp";
import slider2_4 from "../assets/images/webp/slider2_4.webp";
import slider2_5 from "../assets/images/webp/slider2_5.webp";
import slider2_6 from "../assets/images/webp/slider2_6.webp";
import slider2_7 from "../assets/images/webp/slider2_7.webp";

const Sliderr = () => {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 4000,
    cssEase: "linear",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settings2 = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 4100,
    cssEase: "linear",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-12 xl:my-[111px]">
      <h4 className="ff_libre font-normal text-3xl md:text-3xl lg:text-4xl text-center mb-[45px]">
        Gallery
      </h4>{" "}
      <Slider {...settings}>
        <div className="pe-[15px]">
          <img
            className="w-full h-[297px] object-cover rounded-2xl"
            src={slider1_1}
            alt="slider1_1"
          />
        </div>
        <div className="pe-[15px]">
          <img
            className="w-full h-[297px] object-cover rounded-2xl"
            src={slider1_2}
            alt="slider1_2"
          />
        </div>
        <div className="pe-[15px]">
          <img
            className="w-full h-[297px] object-cover rounded-2xl"
            src={slider1_3}
            alt="slider1_3"
          />
        </div>
        <div className="pe-[15px]">
          <img
            className="w-full h-[297px] object-cover rounded-2xl"
            src={slider1_4}
            alt="slider1_4"
          />
        </div>
      </Slider>
      <Slider {...settings2} className="mt-[10px]">
        <div className="pe-[15px]">
          <img
            className="w-full h-[297px] object-cover rounded-2xl"
            src={slider2_1}
            alt="slider2_1"
          />
        </div>
        <div className="pe-[15px]">
          <img
            className="w-full h-[297px] object-cover rounded-2xl"
            src={slider2_2}
            alt="slider2_2"
          />
        </div>
        <div className="pe-[15px]">
          <img
            className="w-full h-[297px] object-cover rounded-2xl"
            src={slider2_3}
            alt="slider2_3"
          />
        </div>
        <div className="pe-[15px]">
          <img
            className="w-full h-[297px] object-cover rounded-2xl"
            src={slider2_4}
            alt="slider2_4"
          />
        </div>
        <div className="pe-[15px]">
          <img
            className="w-full h-[297px] object-cover rounded-2xl"
            src={slider2_5}
            alt="slider2_5"
          />
        </div>
        <div className="pe-[15px]">
          <img
            className="w-full h-[297px] object-cover rounded-2xl"
            src={slider2_6}
            alt="slider2_6"
          />
        </div>
        <div className="pe-[15px]">
          <img
            className="w-full h-[297px] object-cover rounded-2xl"
            src={slider2_7}
            alt="slider2_7"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Sliderr;
