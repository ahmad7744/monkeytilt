import React from 'react'

const Footer = () => {
  return (
    <div className="w-full max-w-[1536px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 justify-center px-5 md:gap-0 md:justify-between mx-auto py-16">
    <div className="flex flex-col">
      <ul className="flex flex-col leading-7 gap-5 ">
        <li className="  text-white text-lg font-semibold font-['Mulish'] uppercase leading-7 tracking-widest ">
          <h>CASINO</h>
        </li>
        <li className="hover:text-[#FFE500] transition-all duration-300 text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase">
          <a href="/Poker">Lobby</a>
        </li>
        <li className="hover:text-[#FFE500]   cursor-pointer  transition-all duration-300 text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer  transition-all duration-300 uppercase ">
          <a href="/SPORTSBOOK">Games</a>
        </li>
        <li className="hover:text-[#FFE500] cursor-pointer  transition-all duration-300 text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer  transition-all duration-300 uppercase ">
          <a href="/CRYPTO">VIP</a>
        </li>
        <li className="hover:text-[#FFE500] cursor-pointer  transition-all duration-300 text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase ">
          <a href="/celebrities">Promotions</a>
        </li>
      </ul>
    </div>
    <div className="flex flex-col">
      <ul className="flex flex-col leading-7 gap-5 ">
        <li className=" text-white text-lg font-semibold font-['Mulish'] uppercase leading-7 tracking-widest ">
          <h>Poker</h>
        </li>
        <li className="hover:text-[#FFE500] text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase">
          <a href="/Lobby">Lobby</a>
        </li>
        <li className="hover:text-[#FFE500] cursor-pointer text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase ">
          <a href="/SPORTSBOOK">Tournaments</a>
        </li>
        <li className="hover:text-[#FFE500] cursor-pointer text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase ">
          <a href="/CRYPTO">Cash Games</a>
        </li>
      </ul>
    </div>
    <div className="flex flex-col">
      <ul className="flex flex-col leading-7 gap-5 ">
        <li className=" text-white text-lg font-semibold font-['Mulish'] uppercase leading-7 tracking-widest ">
          <h>Sports</h>
        </li>
        <li className="hover:text-[#FFE500] text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase">
          <a href="/Poker">Lobby</a>
        </li>
        <li className="hover:text-[#FFE500] cursor-pointer text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase ">
          <a href="/SPORTSBOOK">Live</a>
        </li>
        
      </ul>
    </div>
    <div className="flex flex-col">
      <ul className="flex flex-col leading-7 gap-5 ">
        <li className=" text-white text-lg font-semibold font-['Mulish'] uppercase leading-7 tracking-widest ">
          <h>Crypto</h>
        </li>
        <li className="hover:text-[#FFE500] text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase">
          <a href="/Poker">(Coming soon)</a>
        </li>
       
      </ul>
    </div>
    <div className="flex flex-col">
      <ul className="flex flex-col leading-7 gap-5 ">
        <li className=" text-white text-lg font-semibold font-['Mulish'] uppercase leading-7 tracking-widest ">
          <h>Support</h>
        </li>
        <li className="hover:text-[#FFE500] text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase">
          <a href="/Poker">Fairness</a>
        </li>
        <li className="hover:text-[#FFE500] cursor-pointer text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase ">
          <a href="/SPORTSBOOK">Affiliate</a>
        </li>
        <li className="hover:text-[#FFE500] cursor-pointer text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase ">
          <a href="/CRYPTO">Responsible Gambling</a>
        </li>
        <li className="hover:text-[#FFE500] cursor-pointer text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase ">
          <a href="/celebrities">Self Exclusion</a>
        </li>
        <li className="hover:text-[#FFE500] cursor-pointer text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase ">
          <a href="/celebrities">Live Support</a>
        </li>
      </ul>
    </div>
    <div className="flex flex-col">
      <ul className="flex flex-col leading-7 gap-5 ">
        <li className=" text-white text-lg font-semibold font-['Mulish'] uppercase leading-7 tracking-widest ">
          <h>About Us</h>
        </li>
        <li className="hover:text-[#FFE500] text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase">
          <a href="/Poker">Privacy Policy</a>
        </li>
        <li className="hover:text-[#FFE500] cursor-pointer text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase ">
          <a href="/SPORTSBOOK">Licenses</a>
        </li>
        <li className="hover:text-[#FFE500] cursor-pointer text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase ">
          <a href="/CRYPTO">AML Policy </a>
        </li>
        <li className="hover:text-[#FFE500] cursor-pointer text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase ">
          <a href="/celebrities">Terms of Service</a>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Footer