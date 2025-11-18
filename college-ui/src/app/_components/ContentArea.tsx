"use client";

import { useState } from "react";
import ContentTabMenu from "./ContentTabMenu";

export default function ContentArea() {

  return (
    <div className="contentArea bg-white">
      <div className="contentAreaWrap">
        <div className="container">
          <div className="containerPageArea p-10">

            <h2 className="text-4xl text-center mb-7">Who We Are</h2>
            <p className="text-center text-gray-600 mb-7">
              Founded in 1996, Griffin School is a college preparatory high school community...
            </p>

            <div className="contentTab flex items-center justify-center mb-10">
              <ContentTabMenu />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
