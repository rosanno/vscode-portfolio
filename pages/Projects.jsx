import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';

function Projects({ projects }) {
  return (
    <div className='py-14 px-10 ml-10 md:ml-10 lg:ml-0'>
      <h1 className='font-semibold text-3xl md:text-4xl lg:text-5xl text-gray-600'>
        Projects
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            img={project.img}
            tools={project.tools}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { projects },
  };
}

export default Projects;
