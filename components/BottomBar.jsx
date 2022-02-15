import React from 'react';
import { IoIosGitBranch } from 'react-icons/io';
import { RiCloseCircleLine } from 'react-icons/ri';
import { AiOutlineWarning, AiOutlineCheck } from 'react-icons/ai';
import { SiNextdotjs } from 'react-icons/si';

function BottomBar() {
  return (
    <div className='flex items-center justify-between fixed bottom-0 bg-[#282C3D] w-full px-2 border-t border-t-gray-800 z-20'>
      <div className='flex items-center space-x-1 justify-between w-36'>
        <div className='flex items-center space-x-1 hover:bg-slate-700 py-1'>
          <a
            href='https://github.com/rosanno/vscode-portfolio'
            target='_blank'
            rel='noreferrer'
            className='flex'
          >
            <IoIosGitBranch className='text-[#425e88]' />
            <span className='text-xs font-semibold text-[#425e88]'>main*</span>
          </a>
        </div>
        <div className='flex items-center space-x-1'>
          <RiCloseCircleLine className='text-[#425e88]' />
          <span className='text-xs font-semibold text-[#425e88]'>0</span>
          <AiOutlineWarning className='text-[#425e88]' />
          <span className='text-xs font-semibold text-[#425e88]'>0</span>
        </div>
      </div>
      <div className='flex items-center space-x-3 px-3'>
        <div className='flex items-center'>
          <a
            href='https://nextjs.org/'
            target='_blank'
            rel='noreferrer'
            className='flex'
          >
            <SiNextdotjs className='text-white mr-2' />
            <span className='text-xs font-semibold text-[#425e88]'>
              Powered by Next.js
            </span>
          </a>
        </div>
        <div className='flex items-center space-x-1'>
          <AiOutlineCheck className='text-[#425e88]' />
          <span className='text-xs font-semibold text-[#425e88]'>Prettier</span>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
