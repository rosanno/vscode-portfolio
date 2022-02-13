import data from './projects.json';

export const getProjects = () => {
  return data;
};

/* eslint-disable-next-line */
export default (req, res) => {
  const projects = getProjects();
  res.json(projects);
};
