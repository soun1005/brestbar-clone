import React from 'react';

const FilterBtn = ({ icon, name, active, onClick }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className="flex w-[30%] flex-col items-center gap-2 font-medium"
    >
      <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-[#2c2c2c] text-4xl">
        {icon}
      </div>
      {/* when there is active prop, text is violet */}
      <p className={`${active ? 'text-violet' : ''} transition-colors`}>
        {name}
      </p>
    </button>
  );
};

export default FilterBtn;
