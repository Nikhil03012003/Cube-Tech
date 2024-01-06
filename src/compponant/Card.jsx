import React from "react";
import { LuUserCheck2 } from "react-icons/lu";
import { FaPeopleArrows } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
export default function Card() {
  return (
    <div className="py-[100px]">
      <div className="max-w-[1240px] m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <div className="shadow-xl h-[500px] bg-gray-100 hover:scale-105 duration-500 cursor-pointer">
          <LuUserCheck2 className="text-8xl  ml-40 md:ml-40" />
          <h1 className="text-3xl text-black text-center font-bold">
            Web-Developing
          </h1>
          <h1 className="text-black font-bold text-4xl text-center mt-5">
            $149
          </h1>
          <p className="text-center mt-5">Lorem is simply</p>
          <p className="text-center pl-10 pr-10 mt-5">
            Lorem is simply very import tool for the coding
          </p>
          <p className="text-center pl-10 pr-10 mt-5">
            Lorem is simply we can use for suggesting the word using use tag
          </p>
          <button className="bg-[#00df9a] text-black cursor-pointer hover:bg-black hover:text-[#00df9a] p-2 ml-40 md:ml-40 mt-5 pl-5 pr-5 rounded-3xl">
            Start
          </button>
        </div>
        <div className="shadow-xl h-[500px] bg-gray-100 hover:scale-105 duration-500 cursor-pointer">
          <FaPeopleArrows className="text-8xl ml-40 md:ml-40" />
          <h1 className="text-3xl text-black text-center font-bold">
            Digital Marketing
          </h1>
          <p className="text-black font-bold text-4xl text-center mt-5">$149</p>
          <p className="text-center mt-5">Lorem is simply</p>
          <p className="text-center pl-10 pr-10 mt-5">
            Lorem is simply very import tool for the coding
          </p>
          <p className="text-center pl-10 pr-10 mt-5">
            Lorem is simply we can use for suggesting the word using use tag
          </p>
          <button className="bg-[#00df9a] text-black cursor-pointer hover:bg-black hover:text-[#00df9a] p-2 ml-40 md:ml-40 mt-5 pl-5 pr-5 rounded-3xl">
            Start
          </button>
        </div>
        <div className="shadow-xl h-[500px] bg-gray-100 hover:scale-105 duration-500 cursor-pointer">
          <FaPeopleGroup className="text-8xl ml-40 md:ml-40" />
          <h1 className="text-3xl text-black text-center font-bold">
            App-Developing
          </h1>
          <p className="text-black font-bold text-4xl text-center mt-5">$149</p>
          <p className="text-center mt-5">Lorem is simply</p>
          <p className="text-center pl-10 pr-10 mt-5">
            Lorem is simply very import tool for the coding
          </p>
          <p className="text-center pl-10 pr-10 mt-5">
            Lorem is simply we can use for suggesting the word using use tag
          </p>
          <button className="bg-[#00df9a] text-black cursor-pointer hover:bg-black hover:text-[#00df9a] p-2 ml-40 md:ml-40 mt-5 pl-5 pr-5 rounded-3xl">
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
