import React from "react";


const HomePage: React.FC = () => {
  React.useEffect(() => {
    document.title = "Dark Souls Chronology";
  }, []);

  return (
    <div className="min-h-screen overflow-hidden flex flex-col text-center md:pt-32 pt-10 pb-10 bg-neutral-900 font-garamond">
      <h1 className="text-white md:text-7xl text-4xl font-bold uppercase tracking-wide text-shadow-sm text-shadow-amber-500/40">Dark Souls</h1>
      <h2 className="text-white md:text-4xl text-4xl mb-8 uppercase tracking-wide text-shadow-sm text-shadow-white/30">Chronology</h2>

      <div className="flex flex-col md:flex-row align-middle justify-center items-center gap-8 h-4/5">
        {/* Dark Souls I */}
        <div className="bg-white max-h-5/6 relative saturate-0 hover:saturate-100 transition-all duration-500  hover:mx-5 hover:mr-96"
          onClick={() => window.location.href = '/timeline'}>
          <img src="/src/assets/ds1_cover.png" alt="Dark Souls 1 Cover" className="" />
          <img
            src="/src/assets/ds1_logo.png"
            alt="Dark Souls 1 Logo"
            className="absolute inset-0 m-auto max-w-full max-h-full"
          />
        </div>



        {/* Dark Souls II */}
        <div className="bg-white overflow-hidden max-h-5/6 relative saturate-0 hover:saturate-100 transition-all duration-500 hover:scale-105 hover:mx-5"
          onClick={() => window.location.href = '/timeline'}>
          <img src="/src/assets/ds2_cover.png" alt="Dark Souls 2 Cover" className="object-cover" />
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
};

export default HomePage;
