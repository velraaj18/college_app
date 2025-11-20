"use client";
import EventCards from './Eventcards';

const Announcements = () => {
  return (
    <>
      <div className="announcemnets">
        <div className="announcementsWrap">
          <div className="container">
            <div className="announcementsPageArea p-10">
              <div className="announcementsPageHeader">
                <h5 className="text-center mb-7">What's Happening</h5>
              </div>
              <div className="announcementsPageContent flex flex-wrap flex-col justify-center items-center">
                <h2 className="text-center mb-7 text-4xl">
                  Events & Announcements
                </h2>                         
              </div>
              <div className='max-w-[1080px] mx-auto'>
                <EventCards/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcements;
