import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" bg-black z-50 ">
        <div className="w-full max-w-[1536px]  mx-auto md:flex md:items-center md:justify-between  z-50 ">
          <div className="z-50">
            <ul className="  lg:space-x-10 lg:flex w-full  max-w-[607px] lg:justify-between hidden  text-white items-center text-base font-medium leading-7 ">
              <li className="hover:text-[#FFE500] border-b-2 border-b-transparent transition-all duration-500 hover:border-[#FFE500] cursor-pointer ">
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
          <div></div>
          <div className="flex flex-col items-center cursor-pointer md:flex-row  ">
            <a href="/">
              <img src="/images/MonkeyTiltLogoWhite.png" alt="logo" />
            </a>
          </div>
          <div className="max-w-[390px] md:max-w-[580px] pb-2 flex  gap-4 md:gap-6 ">
            <div className=" px-5 py-1 md:px-2 md:py-1 bg-white bg-opacity-5 rounded-[32px] backdrop-blur-[128px] justify-center items-center gap-1 inline-flex">
              <p className="text-neutral-400 text-[10px] md:text-[14px] font-medium leading-tight">
                VIP Status:
              </p>{" "}
              <span className="text-white text-[10px] md:text-[14px] font-medium leading-tight">
                Bronze
              </span>
              <img src="/images/Frame.png" alt="" />
            </div>
            <div className=" flex items-center gap-1 px-2 py-1 bg-[#453F02] rounded-[32px]">
              <img src="/images/Frame-2.png" alt="" />
              <p className="text-yellow-400 text-[8px] md:text-[14px] font-medium uppercase leading-tight">
                $60.89
              </p>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
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
              <img
                className="cursor-pointer"
                src="/images/Frame-3.png"
                alt=""
              />
              <img
                className="cursor-pointer"
                src="/images/Frame-4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
