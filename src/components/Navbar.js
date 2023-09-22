import React from "react";

const Navbar = () => {
  return (
    <>
        
    
    <div className=" bg-black z-50 ">
      <div className="w-full max-w-[1536px] mx-auto flex items-center justify-between  z-50 ">
        <div className="w-full  max-w-[607px] z-50">
          <ul className="space-x-8 lg:flex text-white items-center text-base font-medium leading-7 ">
            <li className="hover:text-[#FFE500] hover:border-b border-white cursor-pointer ">
              <a href="/">CASINO</a>
            </li>
            <li className="hover:text-[#FFE500]  cursor-pointer border-b-2 border-b-transparent transition-all duration-500 hover:border-[#FFE500] uppercase">
              <a href="/Poker">Poker</a>
            </li>
            <li className="hover:text-[#FFE500] cursor-pointer border-b-2 border-b-transparent transition-all duration-500 hover:border-[#FFE500]  uppercase">
              <a href="/SPORTSBOOK">SPORTSBOOK</a>
            </li>
            <li className="hover:text-[#FFE500] cursor-pointer border-b-2 border-b-transparent transition-all duration-500 hover:border-[#FFE500]  uppercase">
              <a href="/CRYPTO">CRYPTO</a>
            </li>
            <li className="hover:text-[#FFE500] cursor-pointer  border-b-2 border-b-transparent transition-all duration-500 hover:border-[#FFE500] uppercase">
              <a href="/celebrities">celebrities</a>
            </li>
            <li className="hover:text-[#FFE500] cursor-pointer border-b-2 border-b-transparent transition-all duration-500 hover:border-[#FFE500]   uppercase ">
              <a href="/SHOP">SHOP</a>
            </li>
          </ul>
        </div>
        <div className="cursor-pointer ">
         <a href="/"><img src="/images/MonkeyTiltLogoWhite.png" alt="logo" /></a> 
        </div>
        <div className="max-w-[580px] flex gap-6 ">
          <div className=" px-2 py-1 bg-white bg-opacity-5 rounded-[32px] backdrop-blur-[128px] justify-center items-center gap-1 inline-flex">
            <p className="text-neutral-400 text-sm font-medium leading-tight">
              VIP Status:
            </p>{" "}
            <span className="text-white text-sm font-medium leading-tight">
              Bronze
            </span>
            <img src="/images/Frame.png" alt="" />
          </div>
          <div className=" flex items-center gap-1 px-2 py-1 bg-[#453F02] rounded-[32px]">
            <img src="/images/Frame-2.png" alt="" />
            <p className="text-yellow-400 text-sm font-medium uppercase leading-tight">
              $60.89
            </p>
          </div>
          <div className="flex items-center gap-6">
            <img
              className="cursor-pointer"
              src="/images/search-2-line.png"
              alt=""
            />
            <img
              className="cursor-pointer"
              src="/images/user-6-line.png"
              alt=""
            />
            <img className="cursor-pointer" src="/images/Frame-3.png" alt="" />
            <img className="cursor-pointer" src="/images/Frame-4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
