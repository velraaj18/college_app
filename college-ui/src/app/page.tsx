import React from 'react'
import Navbar from './_components/Navbar'
import ProtectedRoute from './services/ProtectedRoute'

const page = () => {
  return (
   <ProtectedRoute>
    <>
      <Navbar/>
      Hello
    </>
   </ProtectedRoute>
  )
}

export default page