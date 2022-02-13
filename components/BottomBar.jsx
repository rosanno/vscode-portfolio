import React from 'react';
import { IoIosGitBranch } from 'react-icons/io';
import { RiCloseCircleLine } from 'react-icons/ri';
import { AiOutlineWarning, AiOutlineCheck } from 'react-icons/ai';
import { SiNextdotjs } from 'react-icons/si';

function BottomBar() {
  return (
    <div className='flex items-center justify-between fixed bottom-0 bg-[#282C3D] w-full px-2 border-t border-t-gray-800 py-1 z-20'>
      <div className='flex items-center space-x-1 justify-between w-36'>
        <div className='flex items-center space-x-1'>
          <IoIosGitBranch className='text-[#425e88]' />
          <span className='text-xs font-semibold text-[#425e88]'>main*</span>
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
          <SiNextdotjs className='text-white mr-2' />
          <span className='text-xs font-semibold text-[#425e88]'>
            Powered by Next.js
          </span>
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
