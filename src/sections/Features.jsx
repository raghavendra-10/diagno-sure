import React from 'react'
import features1 from '../assets/features-1.png';
import features2 from '../assets/features-2.png';

function Features() {
  return (
    <section className="w-full bg-greyLight pt-16 pb-8">
      <div className="flex flex-col w-full lg:flex-row lg:w-[992px] px-4 xl:w-[1140px] justify-center items-start mx-auto gap-5">
        <div className="px-4 flex flex-col items-start justify-center">
            <h2 className='text-xl'>Smarter Dental Decisions.</h2>
            <p className='mt-5 text-base'>Get the care you need with confidence and control. Discover the benefits of Second Opinions over Dental Savings Plans.</p>
        </div>
        <div className="px-4">
            <img 
                src={features1}
                className='w-full h-auto md:hidden'
            />
            <img 
                src={features2}
                className='w-full h-auto hidden md:inline-block'
            />
        </div>
      </div>
    </section>
  )
}

export default Features

