import React from "react";
import Navbar from "../_components/Navbar";
import Spacer from "../_components/Spacer";
import Footer from "../_components/Footer";

const Belonging = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <div
          className="page-banner"
          style={{
            background: "url(/images/belong1.jpg) center center no-repeat", backgroundSize: "cover",
          }}
        >
          <div className="page-banner-content">
            <div className="container max-w-[1080px]">
              <div className="page-banner-inner">
                <h1 className="page-banner-header">Belongings</h1>
                <img src="/images/banner-squggle.svg" alt="banner-squggle" />
              </div>
            </div>
          </div>
        </div>

        <div className="content-area content-style">
          <div className="container max-w-[1080px]">
            <h2>
              We celebrate diversity, honor individuals from all walks of life,
              and work to cultivate a culture of belonging for everyone in our
              community.
            </h2>
          </div>
        </div>

        <div className="two-col content-style">
          <div className="two-col-left">
            <div
              className="two-col-left-image"
              style={{
                background: "url(/images/belong2.jpg) center center no-repeat", backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="two-col-right">
            <div className="two-col-right-content">
              <h2>Committed to Equality</h2>
              <p>
                <strong>
                  We are deeply committed to supporting our students in becoming
                  socially responsible citizens who live lives that make the
                  world a better place.
                </strong>
              </p>
              <p>
                A large part of our work goes far beyond preparing students to
                be academically successful in college; it is our responsibility
                to develop students who value diversity, respect people of all
                identities, and appreciate the benefits of a culture of
                belonging.
              </p>
            </div>
          </div>
        </div>
        <Spacer />

        <div className="content-area content-style bg-[#f3f3f5]">
          <div className="container max-w-[1080px]">
            <h2>At Griffin, We Believe</h2>
            <ul>
                <li>Embracing and understanding diverse perspectives is going to be necessary in order to be successful in today's world.</li>
                <li>Diversity (in terms of identities and lived experiences) is beneficial for everyone; a diverse school environment helps teachers teach more effectively, better prepares students to be leaders in their communities, and activates empathy.</li>
                <li>To build a more just society for those who will inherit it from us, we must inspire and empower young people to be active members of their communities who work to engage and understand diverse perspectives, and who seek to uplift the vulnerable.</li>
                <li>We believe that promoting inclusion is an active commitment: it means working together to remove barriers, honor each other’s dignity, and ensure everyone has a chance to succeed. As Maya Angelou said, “Diversity makes for a rich tapestry, and we must understand that all the threads of the tapestry are equal in value though they differ in color.”</li>
            </ul>
          </div>
        </div>
        <Spacer/>

        <div className="two-col content-style">
            <div className="two-col-left">
              <div className="two-col-left-content">
                <h2>Initiatives and Efforts In Progress</h2>
                <p>Via parallel efforts of staff, students, and our board, the Griffin community has affirmed belonging and inclusion as areas of primary focus going forward, and we have dedicated time, funding, and resources to doing this work individually and collectively.</p>
              </div>
            </div>
            <div className="two-col-right">
              <div className="two-col-right-image" style={{background : "url(/images/belong3.png) center center no-repeat", backgroundSize: "cover"}}></div>
            </div>          
        </div>

        <div className="content-area content-style">
            <div className="container max-w-[1080px]">
                <h3>Our Initiatives</h3>
                <p><strong>SCHOLARSHIPS: </strong>Griffin provides scholarship funding each year in order to make our school community accessible to students from a broad array of socioeconomic backgrounds. Specifically, in 2019, we committed to intentional and explicit fundraising specifically to fund scholarships for students from underserved communities. To that end, we have worked with Breakthrough Central Texas, an organization building a path through college for low-income students.</p>
                <p><strong>NATIONAL SEED PROJECT:</strong>We have partnered with SEED (Seeking Educational Equity and Diversity), an organization that works with institutions in bringing people together to learn through self reflection, build relationships through structured dialogue, and create change through systemic analysis. Two of our faculty members have received training with SEED and have been leading regularly scheduled SEED workshops with staff as part of our effort to build awareness of diverse experiences, and to cultivate a culturally competent and inclusive school culture.</p>
                <p><strong>CURRICULUM: </strong>We have worked intentionally to build curricula that provide students with both ‘Windows and Mirrors’; opportunities to engage with materials that reflect their own lived experiences and identities as well as materials that develop awareness of other histories and cultures. Through sharing the perspectives, experiences, and stories of diverse people and groups, our students develop a real understanding of who we are, where we've been, and the possibilities of where we could go.</p>
            </div>
        </div>

        <div className="content-area content-style bg-[#f3f3f5]">
              <div className="container max-w-[1080px]">
                <h2>Areas to Grow</h2>
                <p>We recognize that this work is ongoing and never complete. With that in mind, at Griffin School, we intend to:</p>
                <ul>
                    <li>Embrace a diverse student body so that Griffin grows to be a truly multicultural environment, where all new students not only feel welcomed but feel that they belong.</li>
                    <li>Build empathy and seek equality by engaging students in respectful organic discussions about how we each experience the world.</li>
                    <li>Build authentic connections with diverse communities in our area and beyond.</li>
                    <li>Host more events celebrating the many cultures and histories reflected in our community.</li>
                    <li>Continue to cultivate a culturally competent faculty and staff who can provide meaningful support for our students as they develop their own sense of identity.</li>
                </ul>
              </div>
        </div>
        <Spacer/>      
      </main>
    <Footer/>
    </>
  );
};

export default Belonging;
