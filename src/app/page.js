// import Image from 'next/image';
'use client';
import { useState, useEffect, use } from 'react';
import NavBar from '@/components/navBar/Navbar';
import List from '@/components/list/List';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from '@/components/map/Map';
import { useAppContext } from './Context';

export default function Home() {
  const [barsData, setBarsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentLocation, setCurrentLocation] = useState({});

  const { selectedBarLocation } = useAppContext();
  const { lat1, lon1 } = selectedBarLocation.newGeography || {};

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setCurrentLocation({ latitude, longitude });
      });
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.brest.bar/items/bars');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const { data } = await response.json();
        setBarsData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="box-border flex max-h-screen min-h-screen flex-col">
      <NavBar></NavBar>

      <List barsData={barsData} curLocation={currentLocation}></List>
      {!loading && <Map barsData={barsData} curLat={lat1} curLng={lon1}></Map>}
    </main>
  );
}
