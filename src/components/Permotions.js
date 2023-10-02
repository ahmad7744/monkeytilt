import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../variants';

const Permotions = () => {
  return (
    <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col md:flex-row px-5 gap-4  w-full max-w-[1536px] mx-auto justify-between "
          >
            <div className="flex flex-col justify-between max-w-[360px]  w-full ">
              <p className="text-white text-[32px] font-normal font-['Mulish'] uppercase leading-10">
                Promotions
              </p>
              <div className="flex">
                <img
                  className="cursor-pointer"
                  src="./images/Frame-5.png"
                  alt=""
                />
                <img
                  className="cursor-pointer"
                  src="./images/Frame-6.png"
                  alt=""
                />
              </div>
            </div>
            <div className="max-w-[360px] w-full">
              <img src="./images/Card-01.png" alt="" />
            </div>
            <div className="max-w-[360px] w-full">
              <img src="./images/Card-02.png" alt="" />
            </div>
            <div className="max-w-[360px] w-full self-start md:self-end">
              <p className="text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
              <button className="text-black mt-2 text-sm font-medium font-['Mulish'] w-full leading-tight px-16 py-4 bg-white cursor-pointer">
                GO TO FAVORITES
              </button>
            </div>
          </motion.div>
  )
}

export default Permotions