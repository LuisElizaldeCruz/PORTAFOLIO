import React from "react";
import "../assets/css/Skills.css"
import htmlico from "../assets/icons/icons8-html-5.svg"
import css3ico from "../assets/icons/icons8-css3.svg"
import jsico from "../assets/icons/icons8-javascript.svg"
import gitico from "../assets/icons/icons8-git.svg"



const Skills=()=>{
    const  dirIco = "../assets/icons/icons8-";
    return(
        <section className="skills" id="skills">
          <h2 className="skill-header">Mis habilidades</h2>
          <div className="skills-set animate__animated animate__pulse">
            <img src={htmlico} alt="icono-html" loading="lazy" className="icon icon-card" />
            <img src={css3ico} alt="icono-cc3" loading="lazy" className="icon icon-card" />
            <img src={jsico} alt="icono-js" loading="lazy" className="icon icon-card" />
            <img src={gitico} alt="icono-git" loading="lazy" className="icon icon-card" />
          </div>
        </section>
    );
};

export default Skills;