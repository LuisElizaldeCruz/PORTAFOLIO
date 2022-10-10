import { React } from "react";
import Project from "./Project";
import "../assets/css/ProjectsGroup.css";
import { projectSet } from "./ProjectsInfo.js";

const ProjectsGroup = () => {
    return (
        <>
            <section className="container-projects">
                <h4 className="title-projects">Proyectos</h4>
                <div className="projects" id="projects">
                    {
                        projectSet.map(p => {
                            return (
                                <Project
                                    projectTitle={p.title}
                                    key={p.id.toString()}
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

export default ProjectsGroup;
