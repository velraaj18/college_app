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
              <h6 className="text-lg text-white! font-bold mb-5">Contact Us</h6>
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
              <h6 className="text-lg text-white! font-bold mb-5">Quick Links</h6>
              <ul className="footerList">
                <li>Admissions</li>
                <li>Upcoming Events</li>
                <li>Ways To Give</li>
              </ul>
            </div>
            <div className="footerInner4 md:w-1/4">
              <div className="md:pl-16">
                <div className="footerSns">
                  <h5 className="text-white!">Check us out on</h5>
                  <div className="footerSocials">
                    <div className="socialsLinks socialmedium center">
                      <a
                        href="https://www.facebook.com/griffinschoolatx"
                        target="_blank"
                        aria-label="Griffin School Facebook"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a
                        href=""
                        target="_blank"
                        aria-label="Griffin School Pinterest"
                      >
                        <i className="fab fa-pinterest"></i>
                      </a>
                      <a
                        href=""
                        target="_blank"
                        aria-label="Griffin School LinkedIn"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/@griffinschool1440/playlists"
                        target="_blank"
                        aria-label="Griffin School Youtube"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/griffinschool/"
                        target="_blank"
                        aria-label="Griffin School Instagram"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href=""
                        target="_blank"
                        aria-label="Griffin School Behance"
                      >
                        <i className="fab fa-behance"></i>
                      </a>
                      <a
                        href=""
                        target="_blank"
                        aria-label="Griffin School Sound Cloud"
                      >
                        <i className="fab fa-soundcloud"></i>
                      </a>
                      <a
                        href=""
                        target="_blank"
                        aria-label="Griffin School Twitter"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href=""
                        target="_blank"
                        aria-label="Griffin School TikTok"
                      >
                        <i className="fab fa-tiktok"></i>
                      </a>
                      <a
                        href=""
                        target="_blank"
                        aria-label="Griffin School Snapchat"
                      >
                        <i className="fab fa-snapchat"></i>
                      </a>
                      <a
                        href=""
                        target="_blank"
                        aria-label="Griffin School Vimeo"
                      >
                        <i className="fab fa-vimeo"></i>
                      </a>
                      <a
                        href=""
                        target="_blank"
                        aria-label="Griffin School Tumblr"
                      >
                        <i className="fab fa-tumblr"></i>
                      </a>
                      <a
                        href="https://www.flickr.com/photos/griffinschool/"
                        target="_blank"
                        aria-label="Griffin School Flickr"
                      >
                        <i className="fab fa-flickr"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="images/footer-line.svg" alt="" />
          <div className="footerSecondary flex items-center justify-between py-6 gap-3">
            <div className="footerCopyright text-white text-sm">
              <p>© Copyright 2025 Griffin School, All Rights Reserved</p>
            </div>
            <div className="footerPolicy mr-auto  text-[#6ca643] text-sm">
              <p>
                <a
                  title="Non-Discrimination Statement"
                  href="/Non-Discrimination-Statement"
                  className="underline"
                >
                  Non-Discrimination Statement
                </a>{" "}
                |&nbsp;
                <a
                  title="Privacy Policy"
                  href="/Privacy-Policy"
                  className="underline"
                >
                  Privacy Policy
                </a>
                &nbsp;|&nbsp;
                <a
                  title="Terms of Service"
                  href="/Terms-Conditions"
                  className="underline"
                >
                  Terms &amp; Conditions
                </a>
              </p>
            </div>
            <div className="footerPoweredBy ">
              <p className="text-white text-sm">
                Powered by{" "}
                <a
                  title="Terms of Service"
                  href="/Terms-Conditions"
                  className="underline text-[#6ca643] text-sm"
                >
                  Morweb.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
