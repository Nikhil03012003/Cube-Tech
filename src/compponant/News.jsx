import React from 'react'
export default function News() {
  return (
    <div className='bg-[#2699df] p-4'>
    <div className='grid md:grid-cols-2 grid-cols-1 mt-10'>
        <div className="ml-5 md:ml-14">
            <h1 className='font-bold text-white md:text-4xl text-xl space-x-3'>Want To Learn Latest I.T Skills?</h1>
            <p className='text-white mt-2 mb-10'>Sign Upto Our Newsletter And Stay Up To Date </p>
        </div>
        <div className="space-x-3 ">
            <input type="email" name="" id="" className='p-2 rounded-lg ml-3 mb-2' placeholder='Enter E-mail' />
            <button className="bg-black text-white p-2 pl-8 pr-8  rounded-lg">Nottify Me</button>
            <p className="text-white mt-4">We Care Bout The Protextion Of Your Data Read Our. </p>
            <p className="font-bold text-blue-900 mt-1">Privacy Policy</p>
        </div>
    </div>
    </div>
  )
}
