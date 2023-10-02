import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../variants';
const Moregames = () => {
  return (
    <motion.div
    variants={fadeIn("down", 0.25)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="w-full max-w-[1536px] mx-auto flex flex-col gap-10 "
  >
    <hr className="border-t border-zinc-700" />
    <div className="flex flex-col px-5 w-full max-w-[1536px] justify-between gap-5 md:gap-10">
      <p className="text-white text-[32px] font-normal font-['Mulish'] uppercase leading-10">
        More Games
      </p>
      <p className="text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight max-w-[491px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 px-5 gap-8">
      <div className="w-full flex flex-col gap-2 md:gap-6 ">
        <img src="./images/Thumbnail-5.png" alt="" />
        <p className="text-white text-[28px] font-normal font-['Mulish'] uppercase leading-7">
          LIVE GAMES
        </p>
        <p className="text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <div className="w-full  gap-2 md:gap-6 flex flex-col ">
        <img src="./images/Thumbnail.png" alt="" />
        <p className="text-white text-[28px] font-normal font-['Mulish'] uppercase leading-7">
          ROULETTE
        </p>
        <p className="text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <div className="w-full  gap-2 md:gap-6 flex flex-col ">
        <img src="./images/BLACKJACK.png" alt="" />
        <p className="text-white text-[28px] font-normal font-['Mulish'] uppercase leading-7">
          BLACKJACK
        </p>
        <p className="text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <div className="w-full  gap-2 md:gap-6 flex flex-col ">
        <img src="./images/CHALLENGES.png" alt="" />
        <p className="text-white text-[28px] font-normal font-['Mulish'] uppercase leading-7">
          CHALLENGES
        </p>
        <p className="text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <div className="w-full  gap-2 md:gap-6 flex flex-col ">
        <img src="./images/ORIGINALS.png" alt="" />
        <p className="text-white text-[28px] font-normal font-['Mulish'] uppercase leading-7">
          ORIGINALS
        </p>
        <p className="text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <div className="w-full  gap-2 md:gap-6 flex flex-col ">
        <img src="./images/TOURNAMENTS.png" alt="" />
        <p className="text-white text-[28px] font-normal font-['Mulish'] uppercase leading-7">
          TOURNAMENTS
        </p>
        <p className="text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <div className="w-full  gap-2 md:gap-6 flex flex-col ">
        <img src="./images/BLACKJACK-2.png" alt="" />
        <p className="text-white text-[28px] font-normal font-['Mulish'] uppercase leading-7">
          BLACKJACK
        </p>
        <p className="text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <div className="w-full  gap-2 md:gap-6 flex flex-col ">
        <img src="./images/PROVIDERS.png" alt="" />
        <p className="text-white text-[28px] font-normal font-['Mulish'] uppercase leading-7">
          PROVIDERS
        </p>
        <p className="text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <div className="w-full  gap-2 md:gap-6 flex flex-col ">
        <img src="./images/GAMESHOWS.png" alt="" />
        <p className="text-white text-[28px] font-normal font-['Mulish'] uppercase leading-7">
          GAME SHOWS
        </p>
        <p className="text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
    </div>
  </motion.div>
  )
}

export default Moregames