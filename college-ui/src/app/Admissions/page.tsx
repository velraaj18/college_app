import React from "react";
import Navbar from "../_components/Navbar";
import styles from "./admissions.module.css";
import Spacer from "../_components/Spacer";
import Footer from "../_components/Footer";

const AdmissionPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <div className="carousalImage">
          <div className={styles.admissionCarousal}>
            <div className={`${styles.admissionContent} relative z-10 `}>
              <div className="container max-w-[1080px]">
                <div className={styles.admissionInner}>
                  <h1 className={styles.admissionHeader}>Admissions</h1>
                  <img src="/images/banner-squggle.svg" alt="banner-squggle" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-[1080px] mt-7">
          <h1 className={styles.contentLarge}>
            We welcome applications from bright students who are seeking a
            creative and personalized school environment.
          </h1>
        </div>

        <div className={`${styles.content1} mt-7`}>
          <div className={styles.content1Left}></div>
          <div className={styles.content1RightContainer}>
            <div className={styles.content1Right}>
              <h2 className=" text-[32px] font-bold mb-5">Come Check us Out!</h2>
              <p className="para">
                We are thrilled that you are considering Griffin School for your
                high school experience and look forward to connecting! The best
                way to learn more about us is through one of our fall Open
                Houses or through a family tour. We're hosting Open Houses on
                September 25 and October 28, 2025. On both nights, prospective
                athletes are invited to come at 4:45pm to our Trapezoid location
                down the street (5206 Eilers Ave) to learn about our athletics
                program. Tours on our main campus (5001 Evans Ave) will start at
                5:15pm. If you are unable to make it to these events, don't
                hesitate to reach out to admissions@griffinschool.org to set up
                a tour. We are flexible and would love to find a time to walk
                you around campus to give a feel for our learning environment
                and vibrant community! Tours can happen between 9am and 4pm each
                weekday during the school year.
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <Spacer />

        <div className={`${styles.content2} mt-7`}>
          <div className={styles.content2LeftContainer}>
            <div className={styles.content2Left}>
              <h2 className=" text-[32px] font-bold mb-5">Application Process</h2>
              <p className="para">
                We are thrilled that you are considering Griffin School for your
                high school experience and look forward to connecting! The best
                way to learn more about us is through one of our fall Open
                Houses or through a family tour. We're hosting Open Houses on
                September 25 and October 28, 2025. On both nights, prospective
                athletes are invited to come at 4:45pm to our Trapezoid location
                down the street (5206 Eilers Ave) to learn about our athletics
                program. Tours on our main campus (5001 Evans Ave) will start at
                5:15pm. If you are unable to make it to these events, don't
                hesitate to reach out to admissions@griffinschool.org to set up
                a tour. We are flexible and would love to find a time to walk
                you around campus to give a feel for our learning environment
                and vibrant community! Tours can happen between 9am and 4pm each
                weekday during the school year.
              </p>
            </div>
          </div>
          <div className={styles.content2Right}></div>
        </div>
        <Spacer/>

        <div className={`${styles.content3} mt-7`}>
          <div className="container max-w-[1080px]">
            <h2 className="text-[32px]">The application portal for 2026-27 will open in late September:</h2>
            <br />
            <h2 className="text-[32px]">Four Easy Steps to Apply:</h2>
          </div>
        </div>
        <Spacer/>

      </main>
      <Footer/>
    </>
  );
};

export default AdmissionPage;
