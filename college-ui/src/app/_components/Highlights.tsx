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
        alt="image"
        className="
          w-full slide-content object-cover rounded-xl
          transition-all duration-300 ease-[cubic-bezier(.34,1.56,.64,1)]
          hover:scale-105
        "
      />
    </div>
  );

  return (
    <>
      <div className="highlights">
        <div className="container">
          <div className="highlightsPageArea p-10">
            <div className="highlightsPageHeader">
              <h2 className="text-center mb-10 text-4xl">Recent Highlights:</h2>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Carousel
            itemTemplate={itemTemplate}
            value={items}
            numVisible={3}
            circular
            showIndicators={false}
            // pt={{
            //   previousButton: { className: "carousel-arrow left-arrow" },
            //   nextButton: { className: "carousel-arrow right-arrow" },
            // }}
          />
        </div>
      </div>
    </>
  );
};

export default Highlights;
