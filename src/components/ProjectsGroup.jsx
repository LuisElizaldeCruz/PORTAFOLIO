import { React } from "react";
import Project from "./Project";
import "../assets/css/ProjectsGroup.css"
const proyectosRealizados = [
    {
        "id": 1,
        "title": "proyecto 1",
        "img": "expenseTracker.png",
        "alt": "expense-traker",
        "description": "este es un proyecto de ejemplo",
        "link": "www.example.com"
    },
    {
        "id": 2,
        "title": "proyecto 2",
        "img": "netflixClone.png",
        "alt": "expense-traker2",
        "description": "este es un proyecto de ejemplo 2",
        "link": "www.example2.com"
    },
    {
        "id": 3,
        "title": "proyecto 3",
        "img": "expenseTracker.png",
        "alt": "expense-traker",
        "description": "este es un proyecto de ejemplo",
        "link": "www.example.com"
    },
    {
        "id": 4,
        "title": "proyecto 4",
        "img": "netflixClone.png",
        "alt": "expense-traker2",
        "description": "este es un proyecto de ejemplo 2",
        "link": "www.example2.com"
    }
]


const ProjectsGroup = () => {
    return (
        <>
            <section className="container-projects">
                <h4 className="title-projects">Proyectos</h4>
                <div className="projects" id="projects">
                    {
                        proyectosRealizados.map(p => {
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
