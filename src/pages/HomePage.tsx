import React, { useRef } from "react";
import TypingOverlay from "../components/TypingOverlay";
import Ember from "../components/Ember";

const HomePage: React.FC = () => {



  return (
    document.title = "Dark Souls Chronology",

    <div className="bg-stone-950 min-h-screen p-4 md:p-10 scroll-smooth overflow-hidden flex flex-col text-center md:pt-32 pt-10 pb-10 font-garamond uppercase" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-leather.png')" }} >
      <h1 className="text-white md:text-7xl text-4xl font-bold tracking-wide text-shadow-sm text-shadow-amber-500/40">Dark Souls</h1>
      <h2 className="text-white md:text-4xl text-4xl mb-8 tracking-wide text-shadow-sm text-shadow-white/30">Chronology</h2>

      <div className="flex flex-col md:flex-row align-middle justify-center items-center gap-8 h-4/5 z-10">
        {/* Dark Souls I */}
        <div className="bg-white overflow-hidden max-h-5/6 relative saturate-0 hover:saturate-100 transition-all duration-700 hover:mx-5 ease-in-out hover:scale-105 cursor-pointer"
          onClick={() => window.location.href = '/timeline'}>
          <img src="/src/assets/ds1_cover.png" alt="Dark Souls 1 Cover" className="" />
          <img
            src="/src/assets/ds1_logo.png"
            alt="Dark Souls 1 Logo"
            className="absolute inset-0 m-auto max-w-full max-h-full transition-colors hover:saturate-200 duration-700 delay-200"
          />
        </div>

        {/* Dark Souls II */}
        <div className="bg-white overflow-hidden max-h-5/6 relative saturate-0 transition-all duration-700 hover:mx-5 ease-in-out hover:scale-105 cursor-pointer group">
          <img src="/src/assets/ds2_cover.png" alt="Dark Souls 2 Cover" className="object-cover" />
          <img
            src="/src/assets/ds2_logo.png"
            alt="Dark Souls 2 Logo"
            className="absolute inset-0 m-auto max-w-full max-h-full group-hover:opacity-0 transition-all duration-700"
          />
          <TypingOverlay message="Coming Soon..." />
        </div>

        {/* Dark Souls III */}
        <div className="bg-white overflow-hidden max-h-5/6 relative saturate-0 transition-all duration-300 hover:mx-5 ease-in-out hover:scale-105 cursor-pointer">
          <img src="/src/assets/ds3_cover.png" alt="Dark Souls 3 Cover" className="object-cover" />
          <img
            src="/src/assets/ds3_logo.png"
            alt="Dark Souls 3 Logo"
            className="absolute inset-0 m-auto max-w-full max-h-full group-hover:opacity-0 transition-all duration-700"
          />
          <TypingOverlay message="Coming Soon..." />
        </div>
      </div>
      <Ember quantity={100} z={5}></Ember>
    </div>
  );
};

export default HomePage;
