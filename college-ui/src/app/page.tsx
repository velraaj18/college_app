import React from 'react'
import Navbar from './_components/Navbar'
import ProtectedRoute from './services/ProtectedRoute'
import BannerCarousel from './_components/Carousel'
import ContentArea from './_components/ContentArea'
import ExperienceArea from './_components/ExperienceArea';

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
    </>
   </ProtectedRoute>
  )
}

export default page