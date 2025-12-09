"use client";

import { TabMenu } from "primereact/tabmenu";
import React, { useState, JSX } from "react";

type itemProps = {
  header: string;
  subHeader: string;
  template: (item: any) => JSX.Element;
};

const AdmissionTabMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const itemRenderer = (item: any, index: number) => (
    <>
      <a
        className="p-menuitem-link flex flex-col items-center bg-[#F3F3F5]!"
        onClick={() => setActiveIndex(index)}
      >
        <div className="w-full flex flex-col">
          <h3 className="text-[24px] mb-2.5">{item.header}</h3>
          <p className="text-[18px]">{item.subHeader}</p>
        </div>
      </a>
    </>
  );

  const items: itemProps[] = [
    {
      header: "Step 1",
      subHeader: "Schedule Shadow Day",
      template: (item) => itemRenderer(item, 0),
    },
    {
      header: "Step 2",
      subHeader: "Complete Online Application",
      template: (item) => itemRenderer(item, 1),
    },
    {
      header: "Step 3",
      subHeader: "Submit Report Cards/Transcript",
      template: (item) => itemRenderer(item, 2),
    },
    {
      header: "Step 4",
      subHeader: "ISEE Test or Assessment",
      template: (item) => itemRenderer(item, 3),
    },
  ];

  const tabContents = [
    <>
      <div className="flex flex-col items-center justify-start gap-4">
        <img src="/images/Admission3.jpg" alt="admission3" />
        <p className="text-[18px]  w-[480px] text-justify">
          Schedule a Tuesday shadow day for your student by emailing
          admissions@griffinschool.org!
        </p>
      </div>
    </>,
    <>
      <div className="flex flex-col items-center gap-4">
        {" "}
        <img src="/images/admission6.jpeg" alt="admission6" />
        <p className="text-[18px] w-[480px] text-justify">
          Complete our online application and pay the $50 application fee
          online. We will continue to accept applications after the priority
          deadline passes and fill any openings from the applications received
          post January 22.
        </p>
      </div>
    </>,
    <>
      <div className="flex flex-col items-center gap-4">
        <img src="/images/admission7.jpg" alt="admission7" />
        <p className="text-[18px]  w-[480px] text-justify">
          Submit report cards/transcripts, and any diagnostic testing to
          admissions@griffinschool.org.
        </p>
      </div>
    </>,
    <>
      <div className="flex flex-col items-center gap-4">
        <img src="/images/admission8.jpg" alt="admission8" />
        <p className="text-[18px]  w-[480px] text-justify">
          Register for your student to take the ISEE test (enter our ERB code
          447620 to have scores sent to us) or schedule to take the Griffin
          School in-house assessment. We’re offering it next on December 7, 2025
          at 9am, and again on January 17, 2026 at 9am. Email
          admissions@griffinschool.org to register. Sophomores and juniors may
          submit PSAT, SAT, or ACT scores if they've taken any of those
          standardized tests.{" "}
        </p>
      </div>
    </>,
  ];

  return (
    <>
      <div className="flex justify-between gap-10">
        <TabMenu
          model={items}
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
          pt={{
            menu: {
              className:
                "p-tabmenu-nav flex flex-col gap-2 bg-[#F3F3F5]!  overflow-x-clip!",
            },

            menuitem: { className: "p-tabmenuitem w-full" },
          }}
          className="w-[350px]"
        />
        <div className="tabContents md:w-[740px]">
          {tabContents[activeIndex]}
        </div>
      </div>
    </>
  );
};

export default AdmissionTabMenu;
