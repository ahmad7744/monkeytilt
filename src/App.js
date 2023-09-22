import "./App.css";
import CountUp from "react-countup";

function App() {
  return (
    <div className="w-full h-full">
      {/* Hero Section */}
   
      <div className="w-full h-full  bg-gradient-to-t from-black to-zinc-900 pt-12  ">
        <div className="relative " >
        <img
        className="absolute -top-32 left-0 z-0 "
        src="/images/Untitled_Artwork.png"
        alt=""
      />
      <div className="w-full  max-w-[1536px] px-5  mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center  md:justify-between  md:items-center w-full ">
            <div className="flex text-center md:text-left  z-10 flex-col">
              <h2 className="text-white text-sm md:text-lg uppercase leading-7 md:tracking-[9px] tracking-[6px] font-extrabold">
                WELCOME TO CASINO LOBBY
              </h2>
              <p className="text-white text-3xl md:text-7xl font-['Avenir Next']  uppercase leading-[42px] md:leading-[72px] tracking-widest  ">
                SIDHARTH SANKHE
              </p>
            </div>

            <div className=" flex flex-col gap-4">
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
            </div>
          </div>
        </div>

        </div>
      
        
        {/* slide bar main div */}
        <div className="w-full flex flex-col gap-14 md:gap-28 pt-12">
          <div className="px-24 py-5 bg-ga justify-center items-center gap-12 flex flex-col md:flex-row flex-wrap ">
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
          </div>
          <div className="flex flex-col md:flex-row px-5 gap-4 md:gap-0 max-w-[1536px] w-full justify-between mx-auto ">
            <div className="flex flex-col gap-2 md:gap-6 ">
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
            </div>
            <div>
              <img src="./images/Rectangle.png" alt="" />
            </div>
          </div>
          {/* permotions */}
          <div className="flex flex-col md:flex-row px-5 gap-4  w-full max-w-[1536px] mx-auto justify-between ">
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
          </div>
          {/* Top picks section */}
          <div className="w-full max-w-[1536px]  justify-between mx-auto ">
            <div className="w-full flex flex-col gap-4 px-5 md:flex-row md:gap-0 justify-center mx-auto items-center ">
              <div className="w-full flex flex-col max-w-[768px] justify-center  items-center gap-4 ">
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
              </div>
              <div className="w-full flex flex-col max-w-[768px] justify-center items-center  ">
                <img src="./images/Card.png" alt="" />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 px-5 md:flex-row md:gap-0 pt-4 md:pt-0 justify-center mx-auto items-center ">
              <div className="w-full flex flex-col max-w-[768px] justify-center items-center  ">
                <img src="./images/Card-03.png" alt="" />
              </div>
              <div className="w-full flex flex-col max-w-[768px] justify-center  items-center  ">
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
              </div>
            </div>
          </div>
          {/* More games section */}
          <div className="w-full max-w-[1536px] mx-auto flex flex-col gap-10 ">
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
          </div>
          <div className="">
            <div className="border-y flex justify-center py-12 items-center border-zinc-700 ">
              <img src="./images/MT1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1536px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 justify-center px-5 md:gap-0 md:justify-between mx-auto py-16">
          <div className="flex flex-col">
            <ul className="flex flex-col leading-7 gap-5 ">
              <li className="  text-white text-lg font-semibold font-['Mulish'] uppercase leading-7 tracking-widest ">
                <h>CASINO</h>
              </li>
              <li className="hover:text-[#FFE500] text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase">
                <a href="/Poker">Lobby</a>
              </li>
              <li className="hover:text-[#FFE500] cursor-pointer text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase ">
                <a href="/SPORTSBOOK">Games</a>
              </li>
              <li className="hover:text-[#FFE500] cursor-pointer text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase ">
                <a href="/CRYPTO">VIP</a>
              </li>
              <li className="hover:text-[#FFE500] cursor-pointer text-zinc-400 text-sm font-normal font-['Avenir Next'] leading-tight  cursor-pointer uppercase ">
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
      </div>
    </div>
  );
}

export default App;
