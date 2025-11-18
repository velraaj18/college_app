import React from "react";

const ExperienceArea = () => {
  return (
    <>
      <div className="experienceArea">
        <img src="/images/paper-top.svg" alt="paperTop" className=" w-full" />
        <div className="experienceAreaWrap p-10 bg-[#f3f3f5]">

          <div className="container ">
            <div className="flex flex-wrap">
              <div className="colLeft md: w-[35%] pl-4 pr-4 ml-auto">            
                <div className="experienceAreaHeader">
                  <h2 className="text-[40px] leading-tight mb-2.5">Experience <br />
                    Griffin School</h2>
                </div>
                <div className="experienceAreaContent">
                    <p className="text-lg text-gray-500 mb-2.5">Want to check us out? We’re always eager to welcome prospective students and families to campus. We host open houses each fall and give tours all year round! Rising 9th graders are invited to set up a shadow day, offered on Tuesdays, starting in late September thru February. Contact Caroline, our Director of Admissions, to get on the schedule and receive more info about us - just click the button below:</p>
                </div>
              </div>
              <div className="colRight md: w-[35%] pl-4 pr-4 mr-auto">
                <iframe src="https://www.youtube.com/embed/rsyeVes0ME8?si=R_fheJqeNo7uPsru" height="300" title="experienceVideo" className="experienceAreaVideo w-full"></iframe>
              </div>
            </div>
          </div>
        </div>
        <img src="/images/paper-bottom.png" alt="paperTop" className=" w-full" />
      </div>
    </>
  );
};

export default ExperienceArea;
