import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <div className='py-10 px-5 h-screen'>
      <div className='hidden lg:inline absolute bottom-36 text-[15rem] font-bold text-gray-700 text-opacity-25 ml-20 uppercase'>
        About me
      </div>
      <div className='relative'>
        <div className='flex flex-col items-center justify-center mt-10 lg:mt-24'>
          <Image
            src='/icons/profile.jpg'
            alt='Profile'
            width={200}
            height={200}
            className='rounded-full'
            objectFit='cover'
          />

          <span className='text-white mt-8 w-auto ml-10 lg:w-[50rem] font-mono text-xs md:text-sm lg:text-lg leading-8'>
            {/* eslint-disable-next-line */}
            <span className='wave text-2xl'>👋</span> I'm Rosanno Macabuhay,
            looking for a position to kickstart my career
            {/* eslint-disable-next-line */}
            in the field of Frontend Development. I've been interested in
            learning Frontend Development during my entire college and took this
            chance during pandemic to be more skilled and knowledgeable on this
            field 🚀.
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
