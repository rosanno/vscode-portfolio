import React, { useState } from 'react';
import BottomBar from './BottomBar';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import SideNav from './SideNav';
import TopBar from './TopBar';

const NavItems = [
  {
    title: 'Home.jsx',
    link: '/',
    icon: '/icons/react.svg',
  },
  {
    title: 'About.html',
    link: '/About',
    icon: '/icons/html.svg',
  },
  {
    title: 'Contact.css',
    link: '/Contact',
    icon: '/icons/tailwind-css.svg',
  },
  {
    title: 'Projects.js',
    link: '/Projects',
    icon: '/icons/js.svg',
  },
];

function Main({ children }) {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className='h-screen w-full bg-[#292D3E] overflow-hidden transition-all duration-100'>
      <TopBar />

      <div className='flex relative'>
        <SideNav handleActive={handleActive} />
        <Sidebar active={active} />
        <div
          className={`grow mt-7 h-screen overflow-auto scrollbar hover:scrollbar-thumb-purple-900 ${
            active ? 'lg:ml-10' : 'lg:ml-[15.8rem]'
          }`}
        >
          <Navigation NavItems={NavItems} />
          <main>{children}</main>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default Main;
