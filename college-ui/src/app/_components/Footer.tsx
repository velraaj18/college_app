import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrap">
        <div className="container max-w-[1080px]">
          <div className="footerMain  mx-auto flex flex-wrap mb-5">
            <div className="footerInner1 md:w-1/4">
              <div className="footerLogo">
                <img src="/images/footerlogo.svg" alt="footerlogo" />
              </div>
              <div className="footerContent mt-5">
                <p className=" text-white">
                  Griffin School, Inc. is a non-profit Texas corporation which
                  has been accorded Section 501(c)(3) status under the Internal
                  Revenue Code.
                </p>
              </div>
            </div>
            <div className="footerInner2 footerContent md:w-1/6 xl:ml-[8.333%]">
              <h6 className="text-lg font-bold mb-5">Contact Us</h6>
              <p>
                5001 Evans Ave.
                <br /> Austin, TX 78751
              </p>
              <strong>
                <a href="" className=" text-green-600 underline">
                  Directions
                </a>
              </strong>
              <p className="mt-5">
                <a href="tel:512-454-5797" className="underline">
                  (512) 454-5797
                </a>
              </p>
              <div className="footerInner2Button">
                <button className="py-2.5 px-5 bg-[#6CA643] font-bold text-lg mt-5 rounded-3xl">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="footerInner3 footerContent md:w-1/6 xl:ml-[8.333%]">
              <h6 className="text-lg font-bold mb-5">Quick Links</h6>
              <ul className="footerList">
                <li>Admissions</li>
                <li>Upcoming Events</li>
                <li>Ways To Give</li>
              </ul>
            </div>
            <div className="footerInner4 md:w-1/4">
              <div className="md:pl-16">
                <div className="footerSns xl:pl-16">
                  <h5>Check us out on</h5>
                </div>
              </div>
            </div>
          </div>
          <img src="images/footer-line.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
