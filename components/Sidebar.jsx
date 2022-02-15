import React, { useState } from 'react';
import Image from 'next/image';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

function Sidebar({ active }) {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`py-2 pr-2 hidden md:hidden lg:block fixed h-screen inset-y-0 
    inset-x-0 mt-7 ml-11 border-r border-r-gray-800 w-52 ${
      active ? 'lg:hidden' : 'lg:block'
    }`}
    >
      <div className='flex items-center justify-between'>
        <span className='uppercase text-[.70rem] text-white ml-6'>
          Explorer
        </span>
        <HiOutlineDotsHorizontal className='text-slate-500' />
      </div>
      <div className='mt-4 flex flex-col justify-center'>
        <div
          className='flex items-center space-x-1 cursor-pointer ml-3'
          onClick={handleOpen}
        >
          {open ? (
            <VscChevronDown className='text-white' />
          ) : (
            <VscChevronRight className='text-white' />
          )}
          <span className='text-xs text-white font-semibold'>PORTFOLIO</span>
        </div>
        {open && (
          <div className=''>
            {NavItems.map(({ title, icon, link }, i) => (
              <div
                key={i}
                className={`flex items-center space-x-3 mt-1 py-1 px-6  w-52 hover:bg-black hover:bg-opacity-10 cursor-pointer ${
                  router.pathname === link && 'bg-gray-900 bg-opacity-20'
                }`}
              >
                <Link href={link} passHref>
                  <div className='flex items-center space-x-2'>
                    <Image src={icon} alt='title' width={15} height={15} />
                    <span className='text-white text-xs'>{title}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
