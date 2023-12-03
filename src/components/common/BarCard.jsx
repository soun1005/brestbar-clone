import React from 'react';

const categoryMapper = {
  1: 'Au chaud',
  2: '✈️ Exotique',
};

const BarCard = ({ type, name, address, categories, distance }) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-gray-secondary p-6 text-white">
      {/* bar information and eye button */}
      <div className="flex items-center justify-between">
        <div className="flex w-4/5 flex-col">
          <p className="font-bold text-violet">
            {type.length > 0 ? 'BAR' : 'PAS DÉFINIE'}
          </p>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="relative w-5/6 truncate text-violet">
            🏃‍♂️ <strong className="text-sm"> A {distance} KM </strong> -{' '}
            {address}
          </p>
        </div>
        <button className="aspect-square rounded-full bg-violet p-4">👁</button>
      </div>
      {/* tags if there's any */}

      <div className="flex items-center gap-3">
        {categories.map((category) => (
          <div
            key={category}
            className="rounded-full px-4 font-semibold bg-sportif/30 text-sportif"
          >
            {/* using category as a key of categoryMapper */}
            {categoryMapper[category]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarCard;
