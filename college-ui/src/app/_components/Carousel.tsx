"use client";

import { Carousel } from "primereact/carousel";

export default function BannerCarousel() {
  const slides = [
    {
      image: "/images/college1.jpg",
      title: "Welcome to Our College",
      subtitle: "Achieve more with quality education",
    },
    {
      image: "/images/college3.jpg",
      title: "Modern Campus",
      subtitle: "World-class facilities for students",
    },
    {
      image: "/images/pexels-anastasiya-gepp-654466-1462630.jpg",
      title: "Experienced Faculty",
      subtitle: "Learn from the best educators",
    },
    {
      image: "/images/pexels-expressivestanley-1454360.jpg",
      title: "Experienced Faculty",
      subtitle: "Learn from the best educators",
    },
    {
      image: "/images/pexels-pixabay-159844.jpg",
      title: "Experienced Faculty",
      subtitle: "Learn from the best educators",
    },
    {
      image: "/images/pexels-olly-3768126.jpg",
      title: "Modern Campus",
      subtitle: "World-class facilities for students",
    },
  ];

  const slideTemplate = (item: any) => {
    return (
      <div
        className="slide-content w-full h-full shadow-lg relative flex items-center justify-center"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="absolute inset-0 bg-opacity-40"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-bold">{item.title}</h2>
          <p className="text-lg md:text-2xl mt-2">{item.subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <Carousel
      value={slides}
      numVisible={1}
      numScroll={1}
      itemTemplate={slideTemplate}
      autoplayInterval={7000}
      circular
      showIndicators={false}
      pt={{
        content: { className: "h-[750px]" },
        itemsContent: { className: "h-[750px]" },
        item: { className: "h-[750px]" },
        previousButton: {
          className: "carousel-arrow left-arrow",
          onClick: (e) => e.stopPropagation(),
        },
        nextButton: {
          className: "carousel-arrow right-arrow",
          onClick: (e) => e.stopPropagation(),
        },

        previousButtonIcon: {
          className: "custom-prev-icon",
        },
        nextButtonIcon: {
          className: "custom-next-icon",
        },
      }}
    />
  );
}
