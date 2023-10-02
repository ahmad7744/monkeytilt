import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../variants';

const Toppick = () => {
  return (
    <div className="w-full max-w-[1536px]  justify-between mx-auto ">
    <div className="w-full flex flex-col gap-4 px-5 md:flex-row md:gap-0 justify-center mx-auto items-center ">
      <motion.div
        variants={fadeIn("right", 0.8)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full flex flex-col max-w-[768px] justify-center  items-center gap-4 "
      >
        <div className="w-full max-w-[384px] flex flex-col   gap-2 md:gap-4 ">
          <p className="text-white text-[32px] font-normal font-['Mulish'] uppercase leading-10 ">
            Top Picks for you
          </p>
          <p className="text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt
          </p>
          <button className="text-black mt-4 text-sm font-medium font-['Mulish'] w-fit leading-tight px-16 py-4 bg-white cursor-pointer">
            RECOMMENDED
          </button>
        </div>
      </motion.div>
      <div className="w-full flex flex-col max-w-[768px] justify-center items-center  ">
        <motion.img
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          src="./images/Card.png"
          alt=""
        />
      </div>
    </div>
    <div className="w-full flex flex-col gap-4 px-5 md:flex-row md:gap-0 pt-4 md:pt-0 justify-center mx-auto items-center ">
      <div className="w-full flex flex-col max-w-[768px] justify-center items-center  ">
        <motion.img
          variants={fadeIn("right", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          src="./images/Card-03.png"
          alt=""
        />
      </div>
      <motion.div
        variants={fadeIn("left", 0.8)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full flex flex-col max-w-[768px] justify-center  items-center  "
      >
        <div className="w-full max-w-[384px] flex flex-col gap-2  md:gap-4 ">
          <p className="text-white text-[32px] font-normal font-['Mulish'] uppercase leading-10 ">
            Recently played
          </p>
          <p className="text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt
          </p>
          <button className="text-black mt-4 text-sm font-medium font-['Mulish'] w-fit leading-tight px-16 py-4 bg-white cursor-pointer">
            RECENT PLAY
          </button>
        </div>
      </motion.div>
    </div>
  </div>
  )
}

export default Toppick