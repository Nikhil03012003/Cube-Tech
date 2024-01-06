import React from 'react'
import Typed from 'react-typed';
export default function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[140px]'>
      <div className='text-center text-white mx-auto max-w-[1240px] py-[100px]'>
        <div className='text-xl md:text-4xl font-bold md:mb-6 mb-3 text-black'>
            Learn With Us.
        </div>
        <h1 className='text-3xl md:text-6xl font-bold md:mb-6 mb-3'>Grow With Us.</h1>
        <div className='md:text-6xl text-3xl  font-bold'>Learn 
        <Typed
        className='pl-3'
                    strings={['Web-Developing',  ' Digital Marketing' ,  'Ethical Hacking']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop ={true}
                />
        </div>
      </div>
    </div>
  )
}
