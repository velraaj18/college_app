import React from 'react'
import LogoCarousel from './LogoCarousel'

const Acceptance = () => {
  return (
    <>
        <div className='acceptance'>
            <div className='acceptanceWrap'>
                <div className='container'>
                    <div className='acceptancePageArea p-10' >
                        <div className='acceptancePageHeader'>
                            <h5 className='text-center mb-7'>Where We Go From Here</h5>
                        </div>
                        <div className='acceptancePageContent flex flex-wrap flex-col justify-center items-center'>
                            <h2 className='text-center mb-7 text-4xl'>College Acceptances</h2>
                            <p className='text-center max-w-[770px] mb-7 text-lg text-gray-500'>
                                Stanford? Yale? WashU? Navy? Yep, our students get into the most selective schools in the country. But our focus is on helping them develop curiosity, skills, and confidence and then finding the college that's the best fit for them. Every Griffin student gets personalized, proactive guidance to navigate the admissions process to produce college options that work for them. A sampling of colleges who have accepted Griffin grads are below.
                            </p>
                        </div>
                        <div className='logoCarousal mt-7 w-full max-w-[1180px] mx-auto'>
                            <LogoCarousel/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Acceptance