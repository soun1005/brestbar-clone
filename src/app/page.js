// import Image from 'next/image';
import NavBar from '@/components/navBar/Navbar';
import List from '@/components/list/List';
import Map from '@/components/map/Map';

export default function Home() {
  return (
    <main className="flex max-h-screen min-h-screen flex-col overflow-hidden">
      <NavBar></NavBar>
      <div className="flex">
        <List></List>
        <Map></Map>
      </div>
    </main>
  );
}
