import React from 'react';

const NavBar = () => {
  return (
    <div className="z-20 flex w-full flex-col items-start gap-4 bg-bg p-4 text-[28px] shadow-md transition-colors lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center text-white hover:text-violet">
        <span className="pr-2">🍺</span>
        <p>
          Brest
          <span className="bg-gradient bg-clip-text text-transparent">
            {' '}
            bar
          </span>
        </p>
      </div>
      <button className="rounded-[4px] bg-violet px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105">
        <span className="pr-2">🙋‍♀️</span>
        Faire une demande
      </button>
    </div>
  );
};

export default NavBar;
