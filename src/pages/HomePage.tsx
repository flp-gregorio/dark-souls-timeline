import React from "react";


const HomePage: React.FC = () => (
  document.title = "Dark Souls Chronology",

  <div className="min-h-screen flex flex-col items-center pt-32 bg-neutral-900 font-garamond">
    <h1 className="text-white text-7xl font-semibold uppercase tracking-wide">Dark Souls</h1>
    <h2 className="text-white text-4xl mb-8 uppercase tracking-wide">Chronology</h2>

    <div className="flex gap-8 h-4/5">
      {/* Dark Souls I */}
      <div className="bg-white overflow-hidden max-h-5/6 relative saturate-0 hover:saturate-100 transition-all duration-500 hover:scale-105 hover:mx-5"
        onClick={() => window.location.href = '/timeline'}>
        <img src="/src/assets/ds1_cover.png" alt="Dark Souls 1 Cover" className="object-cover" />
        <img
          src="/src/assets/ds1_logo.png"
          alt="Dark Souls 1 Logo"
          className="absolute inset-0 m-auto max-w-full max-h-full"
        />
      </div>

      {/* Dark Souls II */}
      <div className="bg-white overflow-hidden max-h-5/6 relative saturate-0 hover:saturate-100 transition-all duration-500 hover:scale-105 hover:mx-5"
        onClick={() => window.location.href = '/timeline'}>
        <img src="/src/assets/ds2_cover.png" alt="Dark Souls 2 Cover" className="bject-cover" />
        <img
          src="/src/assets/ds2_logo.png"
          alt="Dark Souls 2 Logo"
          className="absolute inset-0 m-auto max-w-full max-h-full"
        />
      </div>

      {/* Dark Souls III */}
      <div className="bg-white overflow-hidden max-h-5/6 relative saturate-0 hover:saturate-100 transition-all duration-500 hover:scale-105 hover:mx-5"
        onClick={() => window.location.href = '/timeline'}>
        <img src="/src/assets/ds3_cover.png" alt="Dark Souls 3 Cover" className="object-cover" />
        <img
          src="/src/assets/ds3_logo.png"
          alt="Dark Souls 3 Logo"
          className="absolute inset-0 m-auto max-w-full max-h-full"
        />
      </div>
    </div>
  </div>

);

export default HomePage;
