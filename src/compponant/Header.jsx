import React, { useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
export default function header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] items-center py-[15px] flex justify-between  mx-auto">
        <div className="text-3xl font-bold">Cube Tech</div>
        {
        toggle ? 
          <IoIosClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-4xl md:hidden block"
          />
         : 
          <IoIosMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-4xl md:hidden block"
          />
        }
        <ul className="md:flex gap-10 text-white hidden">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Company</a>
          </li>
          <li>
            <a href="">Resourse</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Conatct</a>
          </li>
        </ul>
        {/* responsive */}

    
        <ul className = {` duration-300 fixed md:hidden bg-black w-full h-screen  text-white top-24 
        ${toggle? 'left-[0]' : 'left-[-100%]'} `}>
            
         <li className="p-7">
            <a href="">Home</a>
          </li>
          <li className="p-7">
            <a href="">Company</a>
          </li>
          <li className="p-7">
            <a href="">Resourse</a>
          </li>
          <li className="p-7">
            <a href="">About</a>
          </li>
          <li className="p-7">
            <a href="">Conatct</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
