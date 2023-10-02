import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../variants';

const Fav = () => {
  return (
    <div className="flex flex-col md:flex-row px-5 gap-4 md:gap-0 max-w-[1536px] w-full justify-between mx-auto ">
    <motion.div
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex flex-col gap-2 md:gap-6 z-50 "
    >
      <p className=" text-white text-[32px] font-normal font-['Mulish'] uppercase leading-10">
        YOUR FAVORITES
      </p>
      <p className="text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt
      </p>
      <button className="text-black mt-2 text-sm font-medium font-['Mulish'] w-fit leading-tight px-16 py-4 bg-white cursor-pointer">
        GO TO FAVORITES
      </button>
    </motion.div>
    <div>
      <motion.img
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        src="./images/Rectangle.png"
        alt=""
      />
    </div>
  </div>
  )
}

export default Fav