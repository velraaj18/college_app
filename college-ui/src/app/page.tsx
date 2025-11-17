import React from 'react'
import Navbar from './_components/Navbar'
import ProtectedRoute from './services/ProtectedRoute'
import BannerCarousel from './_components/Carousel'
import ContentArea from './_components/ContentArea'

const page = () => {
  return (
   <ProtectedRoute>
    <>
      <Navbar/>
      <BannerCarousel/>
      <ContentArea/>
    </>
   </ProtectedRoute>
  )
}

export default page