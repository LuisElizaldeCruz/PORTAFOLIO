import React from "react";
import "../assets/css/Skills.css"
import htmlico from "../assets/icons/icons8-html-5.svg"
import css3ico from "../assets/icons/icons8-css3.svg"
import jsico from "../assets/icons/icons8-javascript.svg"
import gitico from "../assets/icons/icons8-git.svg"
import sassico from "../assets/icons/icons8-sass.svg"
import reactico from "../assets/icons/icons8-react.svg"
import githubico from "../assets/icons/icons8-github.svg"





const Skills=()=>{
    return(
        <section className="skills" id="skills">
          <h2 className="skill-header">Skills</h2>
          <div className="skills-set animate__animated animate__pulse">
            <img src={htmlico} alt="icono-html" loading="lazy" className="icon icon-card" />
            <img src={css3ico} alt="icono-cc3" loading="lazy" className="icon icon-card" />
            <img src={jsico} alt="icono-js" loading="lazy" className="icon icon-card" />
            <img src={gitico} alt="icono-git" loading="lazy" className="icon icon-card" />
            <img src={githubico} alt="icono-git" loading="lazy" className="icon icon-card" />
            <img src={sassico} alt="icono-git" loading="lazy" className="icon icon-card" />
            <img src={reactico} alt="icono-git" loading="lazy" className="icon icon-card" />
          </div>
        </section>
    );
};

export default Skills;