import React from 'react'
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from '../variants';

const Hero = () => {
  return (
    <div className="relative ">
          <img
            className="absolute -top-16 md:-top-32 left-0 z-0 "
            src="/images/Untitled_Artwork.png"
            alt=""
          />
          <div className="w-full  max-w-[1536px] px-5  mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center  md:justify-between  md:items-center w-full ">
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex text-center md:text-left  z-10 flex-col"
              >
                <h2 className="text-white text-sm md:text-lg uppercase leading-7 md:tracking-[9px] tracking-[6px] font-extrabold">
                  WELCOME TO CASINO LOBBY
                </h2>
                <p className="text-white text-3xl md:text-7xl font-['Avenir Next']  uppercase leading-[42px] md:leading-[72px] tracking-widest  ">
                  SIDHARTH SANKHE
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className=" flex flex-col gap-4"
              >
                <div className="px-4 py-2 max-w-[282px]  custom-bg  items-center justify-between  gap-4 flex">
                  <p className="text-white text-sm font-normal font-['Mulish'] uppercase leading-tight tracking-wider">
                    Rank
                  </p>
                  <p className="text-right text-white text-sm font-normal font-['Mulish'] uppercase leading-tight tracking-wider ">
                    <CountUp start={0} end={269} duration={5} />
                  </p>
                </div>
                <div className="px-4 py-2 max-w-[282px] custom-bg items-center justify-between  gap-4 flex">
                  <p className="text-white text-sm font-normal font-['Mulish'] uppercase leading-tight tracking-wider">
                    Total Gambled
                  </p>
                  <p className="text-right text-white text-sm font-normal font-['Mulish'] uppercase leading-tight tracking-wider ">
                    $<CountUp start={0} end={1050} duration={4} />
                  </p>
                </div>
                <div className="px-4 py-2 max-w-[282px] custom-bg items-center justify-between  gap-4 flex">
                  <p className="text-white text-sm font-normal font-['Mulish'] uppercase leading-tight tracking-wider">
                    Leaderboard Points
                  </p>
                  <p className="text-right text-white text-sm font-normal font-['Mulish'] uppercase leading-tight tracking-wider ">
                    <CountUp start={0} end={312} duration={4} />
                  </p>
                </div>
                <div className="px-4 py-2  max-w-[282px] custom-bg items-center  gap-4 flex flex-col">
                  <div className="flex w-full max-w-[282px] justify-between">
                    <p className="text-white text-sm font-normal font-['Mulish'] uppercase leading-tight tracking-wider">
                      Progress
                    </p>
                    <p className="text-right text-yellow-400 text-sm font-normal font-['Mulish'] uppercase leading-tight tracking-wider ">
                      <CountUp start={0} end={57} duration={8} />%
                    </p>
                  </div>
                  <img src="./images/ProgressBar.png" alt="" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
  )
}

export default Hero