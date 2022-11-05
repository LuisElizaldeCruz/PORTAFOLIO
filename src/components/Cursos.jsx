import React from 'react'
import "../assets/css/Cursos.css";

export default function Cursos() {
    return (
        <section className="cursos">
            <h4 className="cursos-titulo">Cursos Tomados</h4>
            <div className="cursos-set">
                <div className="curso">
                    <div className="img-empresa"></div>
                    <p className="curso-nombre">curso de html y css</p>
                    <div>link-icon</div>
                </div>
                <div className="curso">
                    <div className="img-empresa"></div>
                    <p className="curso-nombre">curso de javascript</p>
                    <div>link-icon</div>
                </div>
            </div>
        </section>
    );
};
