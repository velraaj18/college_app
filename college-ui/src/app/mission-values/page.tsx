import React from "react";
import styles from "./mission-values.module.css";
import Navbar from "../_components/Navbar";
import Spacer from "../_components/Spacer";
import CustomAccordian from "./_components/Accordian";
import Footer from "../_components/Footer";

const MissionValues = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <div
          className="page-banner"
          style={{
            background: "url(/images/mission1.jpg) center center no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="page-banner-content">
            <div className="container max-w-[1080px]">
              <div className="page-banner-inner">
                <h1 className="page-banner-header">Mission & Values</h1>
                <img src="/images/banner-squggle.svg" alt="banner-squggle" />
              </div>
            </div>
          </div>
        </div>

        <div className="content-area content-style">
          <div className="container max-w-[1080px]">
            <h2>
              Griffin School is a college preparatory high school community
              defined by academic rigor and creativity. Our mission is to
              cultivate individual potential and intellectual curiosity within a
              vibrant and engaged community.
            </h2>
          </div>
        </div>

        <div className="two-col content-style">
          <div className="two-col-left">
            <div
              className="two-col-left-image"
              style={{
                background: "url(/images/mission2.jpg) center center no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="two-col-right">
            <div className="two-col-right-content">
              <h2>Our Essential Values</h2>
              <p>
                <strong>
                  Our Essential Values shape the way we interact with each other
                  at Griffin and are the foundation for our school policies and
                  cultural norms.
                </strong>
              </p>
              <ul>
                <li>We treat one another with kindness and respect</li>
                <li>
                  We take responsibility for our actions and our education
                </li>
                <li>We communicate openly and honestly</li>
                <li>We commit to active involvement in the school community</li>
                <li>We honor one another’s right to learn and teach</li>
              </ul>
            </div>
          </div>
        </div>
        <Spacer/>

        <div className="content-area content-style bg-[#F3F3F5]">
          <div className="container max-w-[1080px]">
            <h2 className="text-center">Griffin School Profile</h2>
            <CustomAccordian/>
          </div>
        </div>

        <div className="content-area content-style">
          <div className="container max-w-[1080px]">
            <div className="flex">
              <div className="basis-1/4">
                <img src="/images/mission3.jpg" alt="" />
              </div>
              <div className="basis-3/4">
                <h2>Accreditation</h2>
                <p>Griffin School is fully accredited by the Texas Alliance of Accredited Private Schools under the auspices of the Texas Education Agency. Accreditation status assures that our curriculum, instruction, school resources, faculty and staff meet or exceed high standards of excellence and that our academic transcript is respected by colleges and universities across the country and overseas.</p>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </main>
    </>
  );
};

export default MissionValues;
