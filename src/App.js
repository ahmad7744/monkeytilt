import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Fav from "./components/Fav";
import Permotions from "./components/Permotions";
import Toppick from "./components/Toppick";
import Moregames from "./components/Moregames";
import Mtfooter from "./components/Mtfooter";

function App() {
  return (
    <>
      

      <div className="w-full h-full  bg-gradient-to-t from-black to-zinc-900 pt-12  ">
        {/* Hero Section */}
        <Hero />

        {/* slide bar main div */}
        <div className="w-full flex flex-col gap-14 md:gap-28 pt-12">
          <Slider />
          <Fav />
          {/* permotions */}
          <Permotions />
          {/* Top picks section */}
          <Toppick />
          {/* More games section */}
          <Moregames />
          <Mtfooter />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
