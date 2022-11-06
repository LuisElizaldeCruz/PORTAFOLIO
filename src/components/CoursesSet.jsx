import React from 'react'
import "../assets/css/CoursesSet.css";
import icoUdemy from "../assets/icons/icon-udemy.svg"
import { CoursesData } from './CoursesData';
import Course from './Course';

export default function Cursos() {
    return (
        <section className="cursos" id="cursos">
            <h4 className="cursos-titulo">Cursos Tomados</h4>
            <div className="cursos-set">
                {
                    CoursesData.map(c => {
                        return (
                            <Course
                            key={c.id}
                            iconCurso={icoUdemy}
                            nombreEmpresa={c.empresa}
                            nombreCurso={c.nombreCurso}
                            url={c.url}
                            />
                        );
                    })
                }

            </div>
        </section>
    );
};
