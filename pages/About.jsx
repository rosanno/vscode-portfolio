import Image from 'next/image';
import React from 'react';

const Tools = [
  {
    langauage: 'html5',
    icon: '/icons/html.svg',
  },
  {
    langauage: 'css3',
    icon: '/icons/css3.svg',
  },
  {
    langauage: 'javascript',
    icon: '/icons/js.svg',
  },
  {
    langauage: 'sass',
    icon: '/icons/sass.svg',
  },
  {
    langauage: 'php',
    icon: '/icons/php.svg',
  },
  {
    langauage: 'mySql',
    icon: '/icons/mysql.svg',
  },
  {
    langauage: 'git',
    icon: '/icons/git.svg',
  },
];

const Frameworks = [
  {
    libraries: 'reactjs',
    icon: '/icons/react.svg',
  },
  {
    libraries: 'nextjs',
    icon: '/icons/next-js.svg',
  },
  {
    libraries: 'nodejs',
    icon: '/icons/nodejs-icon.svg',
  },
  {
    libraries: 'tailwind-css',
    icon: '/icons/tailwind-css.svg',
  },
  {
    libraries: 'material-ui',
    icon: '/icons/material-ui.svg',
  },
  {
    libraries: 'styled-components',
    icon: '/icons/styled-components.svg',
  },
  {
    libraries: 'redux-',
    icon: '/icons/redux.svg',
  },
];

function About() {
  return (
    <div className='py-10 px-5 h-full'>
      <h3 className='text-xl md:text-4xl ml-10 lg:ml-0 font-semibold text-white mt-5'>
        About me
      </h3>
      <div className='hidden lg:inline absolute bottom-36 text-[15rem] font-bold text-gray-700 text-opacity-25 ml-20 uppercase'>
        SKills
      </div>
      <div>
        <div className='flex flex-col items-center justify-center mt-10 lg:mt-4'>
          <Image
            src='/images/me.jpg'
            alt='Profile'
            width={150}
            height={150}
            className='rounded-full'
            objectFit='cover'
          />
          <div className='text-white mt-8 w-auto ml-10 lg:w-[50rem] font-mono text-xs md:text-sm lg:text-md'>
            <span className='wave text-2xl'>👋</span>
            <span className='leading-7'>
              {/* eslint-disable-next-line */}
              I'm Rosanno Macabuhay, looking for a position to kickstart my
              career
              {/* eslint-disable-next-line */}
              in the field of information technology (IT). I've been interested
              in learning web development during my entire college and took this
              chance during pandemic to be more skilled and knowledgeable on
              this field 🚀.
            </span>
          </div>
        </div>
        <div className='relative flex justify-between gap-24 ml-10 md:ml-20 lg:mx-auto max-w-3xl my-10'>
          <div>
            <h3 className='text-white text-sm lg:text-md font-semibold text-center'>
              Languages & Tools
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-3'>
              {Tools.map((tool, i) => (
                <div
                  key={i}
                  className={`flex items-center w-max px-1 space-x-1 mt-2 z-10 ${tool.langauage}`}
                >
                  <Image
                    src={tool.icon}
                    alt={tool.langauage}
                    width={15}
                    height={15}
                  />
                  <span className='text-white text-sm uppercase'>
                    {tool.langauage}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className='text-white text-sm lg:text-md font-semibold text-center'>
              Frameworks & Libraries
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-3'>
              {Frameworks.map((framework, i) => (
                <div
                  key={i}
                  className={`flex items-center w-max px-1 space-x-1 mt-2 z-10 ${framework.libraries}`}
                >
                  <Image
                    src={framework.icon}
                    alt={framework.libraries}
                    width={15}
                    height={15}
                  />
                  <span className='text-white text-sm uppercase'>
                    {framework.libraries}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
