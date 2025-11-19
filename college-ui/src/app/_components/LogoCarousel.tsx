"use client";

import React from "react";
import { Carousel } from "primereact/carousel";
import { Image } from "primereact/image";

const LogoCarousel = () => {
  const items = [
    { image: "/images/0d7496c3dd145968f4be8255ef89f07d.png" },
    { image: "/images/1ada65bdbfe1660f7c89e1f1d1bcd6c1.png" },
    { image: "/images/2d323bf2306f2586991630acd00bbfc7.png" },
    { image: "/images/3c6e4890a33cb6986c19a0fb58add8f6.png" },
    { image: "/images/5b2fd7900bde91fa9e3a57c0c5fe79bf.jpeg" },
    { image: "/images/6c7229dbdc7da73e9c812d8cbe36f66c.png" },
    { image: "/images/6ce0dbe1bbc48b4be17c58937a6b0996.png" },
    { image: "/images/07c07301046ab9e66d3a78b5294eea7b.png" },
    { image: "/images/7d6ccc5ecc04de0fc8581a5d0b621d91.png" },
    { image: "/images/e506bd3f453f9d335e9fece5776105b1.png" },
    { image: "/images/f41f72d09455ca587ff04a9ebbe986e6.png" },
    { image: "/images/fa4f0a30995e883d404a3b2614b1c853.png" },
  ];

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const logoTemplate = (item: any) => {
  return (
    <div className="flex items-center justify-center h-[70px]">
      <img
        src={item.image}
        alt="logo"
        className="max-h-[60px] w-auto object-contain"
      />
    </div>
  );
};

  return (
    <>
      <Carousel
        itemTemplate={logoTemplate}
        value={items}
        numScroll={3}
        numVisible={7}
        autoplayInterval={7500}
        showIndicators={false}
       // responsiveOptions={responsiveOptions}
      />
    </>
  );
};

export default LogoCarousel;
