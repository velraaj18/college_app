import React from 'react'
import Navbar from './_components/Navbar'
import ProtectedRoute from './services/ProtectedRoute'
import BannerCarousel from './_components/Carousel'
import ContentArea from './_components/ContentArea'
import ExperienceArea from './_components/ExperienceArea';
import Acceptance from './_components/Acceptance'
import Announcements from './_components/Announcements'
import Highlights from './_components/Highlights'
import Footer from './_components/Footer'

const page = () => {
  return (
   <ProtectedRoute>
    <>
      <Navbar/>
      <div className='pt-32'>
        <BannerCarousel/>
      </div>
      
      <ContentArea/>
      <ExperienceArea/>
      <Acceptance/>
      <Announcements/>
      <Highlights/>
      <br/>
      <Footer/>
    </>
   </ProtectedRoute>
  )
}

export default page