import React from 'react';

function TopBar() {
  return (
    <div className='bg-[#282D3F] border-b-[1px] border-b-slate-600 flex p-1 w-full fixed top-0 z-30 inset-x-0'>
      <div className='flex space-x-5'>
        <div className='relative before:absolute before:w-3 before:h-3 before:bg-red-500 before:rounded-full before:top-1' />
        <div className='relative before:absolute before:w-3 before:h-3 before:bg-yellow-500 before:rounded-full before:top-1' />
        <div className='relative before:absolute before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:top-1' />
      </div>
      <div className='flex justify-center w-full'>
        <span className='text-sm text-white'>
          Rosanno Macabuhay - Visual Studio Code
        </span>
      </div>
    </div>
  );
}

export default TopBar;
