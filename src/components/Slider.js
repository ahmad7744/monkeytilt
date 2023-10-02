import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../variants';

const Slider = () => {
  return (
    <motion.div
    variants={fadeIn("right", 0.4)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="px-24 py-5 bg-ga justify-center items-center gap-12 flex flex-col md:flex-row flex-wrap "
  >
    <p className="text-center text-zinc-400 text-sm font-medium font-['Avenir Next'] uppercase leading-tight cursor-pointer">
      FAVORITES
    </p>
    <p className="text-center text-zinc-400 text-sm font-medium font-['Avenir Next'] uppercase leading-tight cursor-pointer">
      RECOMENDED
    </p>
    <p className="text-center text-zinc-400 text-sm font-medium font-['Avenir Next'] uppercase leading-tight cursor-pointer">
      RECENTS
    </p>
    <span className="inline-flex gap-2 items-center">
      <img src="./images/Ellipse.png" alt="" />
      <p className=" cursor-pointer text-center text-zinc-400 text-sm font-medium font-['Avenir Next'] uppercase leading-tight">
        LIVE
      </p>
    </span>
    <p className="text-center text-zinc-400 text-sm font-medium font-['Avenir Next'] uppercase leading-tight cursor-pointer">
      BLACKJACK
    </p>
    <p className="text-center text-zinc-400 text-sm font-medium font-['Avenir Next'] uppercase leading-tight cursor-pointer">
      ROULETTE
    </p>
    <p className="text-center text-zinc-400 text-sm font-medium font-['Avenir Next'] uppercase leading-tight cursor-pointer">
      CHALLENGES
    </p>
    <p className="text-center text-zinc-400 text-sm font-medium font-['Avenir Next'] uppercase leading-tight cursor-pointer">
      ORIGINALS
    </p>
    <p className="text-center text-zinc-400 text-sm font-medium font-['Avenir Next'] uppercase leading-tight cursor-pointer">
      SLOTS
    </p>
    <p className="text-center text-zinc-400 text-sm font-medium font-['Avenir Next'] uppercase leading-tight cursor-pointer">
      PROVIDERS
    </p>
    <p className="text-center text-zinc-400 text-sm font-medium font-['Avenir Next'] uppercase leading-tight cursor-pointer">
      GAME SHOWS
    </p>
    <p className="text-center text-zinc-400 text-sm font-medium font-['Avenir Next'] uppercase leading-tight cursor-pointer">
      tournaments
    </p>
  </motion.div>
  )
}

export default Slider