import { React } from "react";
import Project from "./ProjectCard";
import "../assets/css/ProjectsSet.css";
import { projectData } from "./ProjectsData.js";

const ProjectsSet = () => {
    return (
        <>
            <section className="container-projects" id="container-projects">
                <h4 className="title-projects">Proyectos</h4>
                <div className="projects" id="projects">
                    {
                        projectData.map(p => {
                            return (
                                <Project
                                    key={p.id}
                                    projectTitle={p.title}
                                    img={p.img}
                                    alt={p.alt}
                                    description={p.description}
                                    link={p.link}
                                />
                            );
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default ProjectsSet;
