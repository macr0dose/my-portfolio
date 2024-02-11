"use client";

import { PROJECTS } from "@/constants";
import Image from "next/image";

const Projects = () => {
  const handleProjectClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="projects"
      className="flex flex-col padding-container max-container"
    >
      <div className="flex-1 container mx-auto p-4">
        <h1 className="bold-40 lg:bold-64">My Projects</h1>
        <div className="grid grid-cols-1 mt-8 mb-8 rounded-xl">
          <div className="mt-10 hover-container bg-gradient-to-t from-transparent to-slate-50 dark:to-slate-800 rounded-2xl">
            <ul className="projects-grid p-8">
              {PROJECTS.map((project, index) => (
                <li
                  key={`${project.title}-${index}`} // Combining title and index for a unique key
                  className="projects-hover items-center text-center cursor-pointer"
                  onClick={() => handleProjectClick(project.href)}
                >
                  <h2 className="projects-title hover-text">{project.title}</h2>
                  <Image
                    src={project.icon}
                    alt={`${project.title} icon`}
                    width={414}
                    height={314}
                    layout="responsive"
                  />
                  <p>{project.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// type ProjectsItem = {
//   title: string;
//   icon: string;
//   description: string;
//   backgroundImage: string;
// };

// const ProjectsItem = ({ title, icon, }: ProjectsItem) => {
//   return (
//     <li className="flex w-full flex-1 flex-col items-start">
//       <div className="rounded-full p-4 lg:p-7">
//         <Image src={icon} alt={title} width={28} height={28} />
//       </div>
//       <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
//     </li>
//   );
// };

export default Projects;
