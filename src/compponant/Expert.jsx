import React from 'react'
import laptop from './images/laptop.webp'
export default function Expert() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 justify-center'>
        <div className="">
            <img src={laptop} alt="" className='w-[80%] md:w-[80%] rounded-lg m-8'/>
        </div>
        <div className='m-2 ml-10 md:mt-14'>
            <h1 className='font-bold text-xl text-[#00df9a]'>LEARN FROM EXPORT</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam itaque, assumenda suscipit consequuntur odio nostrum dolor molestiae quo neque doloremque atque voluptas. Aliquam illum mollitia dicta maiores alias laboriosam?
            Odit praesentium, quas aliquam tenetur quod rerum quam at commodi quibusdam ex, ratione voluptatibus. Possimus omnis quisquam, repellendus quam facere eaque at aliquid obcaecati, quas ex delectus quaerat doloribus totam!</p>
            <button className="bg-black text-white p-2 text-xl pl-20 pr-20 rounded-3xl mt-5">Get Start</button>
        </div>
    </div>
  )
}
