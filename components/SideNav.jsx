import React from 'react';
import { VscFiles, VscGithub, VscSettingsGear } from 'react-icons/vsc';
import { BsPersonCircle } from 'react-icons/bs';
import { FaFacebook, FaDiscord } from 'react-icons/fa';

const activeStyle = ' text-white !important';

function SideNav({ handleActive }) {
  return (
    <div className='flex flex-col justify-between pt-7 fixed left-0 inset-y-0 bg-[#282C3D] shadow-lg cursor-pointer z-20'>
      <div className='flex flex-col space-y-6 items-center justify-center'>
        <div className='border-l-2 px-2 py-3'>
          <VscFiles
            className='sidenav-icons text-white'
            onClick={handleActive}
          />
        </div>
        <div>
          <FaFacebook className='sidenav-icons' />
        </div>
        <div>
          <a
            href='https://discord.com/channels/899474098747478066/899474098747478069'
            target='_blank'
            rel='noreferrer'
          >
            <FaDiscord className='sidenav-icons' />
          </a>
        </div>
        <div>
          <a href='https://github.com/rosanno' target='_blank' rel='noreferrer'>
            <VscGithub className='sidenav-icons' />
          </a>
        </div>
      </div>
      <div className='flex flex-col space-y-6 mb-10 px-2'>
        <div>
          <BsPersonCircle className='sidenav-icons' />
        </div>
        <div>
          <VscSettingsGear className='sidenav-icons' />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
