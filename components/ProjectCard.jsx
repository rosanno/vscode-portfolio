import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

function ProjectCard({ title, img, tools, link, github }) {
  return (
    <div className='my-6'>
      <div className='bg-slate-900 shadow-lg overflow-hidden w-11/12 rounded-md hover:scale-110 transition duration-200'>
        {/* eslint-disable-next-line */}
        <img src={img} alt={title} className='w-full' />
        <div className='p-6'>
          <p className='text-blue-500 font-semibold uppercase'>{title}</p>
          <div className='flex flex-wrap items-center'>
            {tools.map((tool, i) => (
              <span key={i} className={`${tool} text-white text-sm`}>
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div className='flex justify-between py-2 px-2'>
          {link ? (
            <a href={link} target='_blank' rel='noreferrer'>
              <FiExternalLink className='text-white text-2xl' />
            </a>
          ) : (
            <div></div>
          )}

          {github ? (
            <a href={github} target='_blank' rel='noreferrer'>
              <AiFillGithub className='text-white text-2xl' />
            </a>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
