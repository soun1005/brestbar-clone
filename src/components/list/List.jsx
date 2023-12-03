'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Divider from '../common/Divider';
import FilterBtn from '../common/FilterBtn';
import BarCard from '../common/BarCard';
import distanceCalculator from '../../helpers/distanceCalculator';

const List = ({ barsData, curLocation }) => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [dataDisplay, setDataDisplay] = useState([]);
  const barDataCount = 5;

  useEffect(() => {
    setDataDisplay(barsData.slice(0, barDataCount));
  }, [barsData]);

  // plus button function
  const handleLoadPlus = () => {
    const index = dataDisplay.length + barDataCount;
    // if there is more data than barDataCount and displaying data is lower than the whole data
    if (
      barsData.length > barDataCount &&
      dataDisplay.length <= barsData.length
    ) {
      setDataDisplay([
        ...dataDisplay,
        ...barsData.slice(dataDisplay.length, index),
      ]);
    }
  };

  const cards = useMemo(() => {
    return dataDisplay.map(
      ({ type, name, address, category, id, location }) => {
        const [lon1, lat1] = location.coordinates;
        const { latitude, longitude } = curLocation;

        const distance = distanceCalculator(lat1, lon1, latitude, longitude);

        return (
          <BarCard
            type={type}
            name={name}
            address={address}
            categories={category}
            key={id}
            distance={distance}
          />
        );
      }
    );
  }, [curLocation, dataDisplay]);

  return (
    <div className="scroll-smooth relative z-10 min-h-full flex-1 origin-left bg-bg text-white shadow-xl transition-all lg:w-1/3 w-4/5 overflow-y-scroll">
      <div className="flex w-full justify-end px-4 py-2 lg:hidden">
        {/* button for responsive design */}
      </div>
      <div className="opacity-100 transition-opacity">
        <div className="p-4">
          <h1 className="text-4xl font-bold text-white">
            Trouver le bar qu&apos;il vous faut
            <span className="bg-gradient bg-clip-text text-transparent">
              &nbsp;selon votre humeur
            </span>
          </h1>
        </div>
        <Divider />
        <div className="flex flex-col gap-6 p-4">
          <h2>Où boire à Brest ?</h2>
          <div className="flex items-center gap-8">
            {/* three icons */}
            <FilterBtn
              icon="🍷"
              name="Cave"
              // when 'Cave' is clicked, activeFilter is set to 'Cave'
              onClick={setActiveFilter}
              // if activeFilter contains 'Cave', active class is added
              active={activeFilter === 'Cave'}
            />
            <FilterBtn
              icon="🍺"
              name="Brasserie"
              onClick={setActiveFilter}
              active={activeFilter === 'Brasserie'}
            />
            <FilterBtn
              icon="🍹"
              name="Bar"
              onClick={setActiveFilter}
              active={activeFilter === 'Bar'}
            />
          </div>
        </div>
        <Divider />
        <div className="flex w-full flex-col gap-6 p-4 text-white">
          <div className=" flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Explorer</h2>
            <button
              type="button"
              className="bg-gradient rounded-lg px-4 py-2 font-semibold"
            >
              Filtrer ✍️
            </button>
          </div>
          <div className="flex w-full flex-col gap-6">{cards}</div>
          <button
            onClick={handleLoadPlus}
            className="mx-auto w-fit rounded-lg bg-gray-secondary px-6 py-2"
          >
            Plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
