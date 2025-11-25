"use client";

import { Carousel } from "primereact/carousel";

const Highlights = () => {
  const items = [
    { image: "/images/high1.jpg" },
    { image: "/images/high2.jpg" },
    { image: "/images/high3.jpg" },
    { image: "/images/high4.jpg" },
    { image: "/images/high5.jpg" },
    { image: "/images/high6.jpg" },
    { image: "/images/high7.jpg" },
    { image: "/images/high8.jpg" },
    { image: "/images/high9.jpg" },
  ];

  const itemTemplate = (item: any) => (
    <div className="flex items-center justify-center px-3">
      <img
        src={item.image}
        alt="highlight"
        className="
          w-full object-cover
          h-[220px] sm:h-[300px] md:h-[380px] lg:h-[450px]
          transition-all duration-300 ease-[cubic-bezier(.34,1.56,.64,1)]
          hover:scale-105
        "
      />
    </div>
  );

  return (
    <>
      <div className="highlights mb-14">
        <div className="container">
          <div className="p-10">
            <h2 className="text-center mb-10 text-4xl">Recent Highlights:</h2>
          </div>
        </div>

        <div className="w-full mx-auto relative">
          <Carousel
            value={items}
            itemTemplate={itemTemplate}
            numVisible={3}
            numScroll={3}
            circular
            showIndicators={false}
            pt={{
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
        </div>
      </div>
    </>
  );
};

export default Highlights;
