import React from "react";
import Navbar from "../_components/Navbar";
import styles from "./admissions.module.css";

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
          <h1 className={styles.contentLarge}>We welcome applications from bright students who are seeking a creative and personalized school environment.</h1>
        </div>
        <div className={`${styles.content1} mt-7`}>
          <div className={styles.content1Left}>

          </div>
          <div>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default AdmissionPage;
