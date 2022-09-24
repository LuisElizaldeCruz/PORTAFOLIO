import React from "react";
import "../assets/css/Skills.css"
import htmlIco from "../assets/icons/icons8-html-5.svg"
import css3Ico from "../assets/icons/icons8-css3.svg"
import jsIco from "../assets/icons/icons8-javascript.svg"
import gitIco from "../assets/icons/icons8-git.svg"
import sassIco from "../assets/icons/icons8-sass.svg"
import reactIco from "../assets/icons/icons8-react.svg"
import githubIco from "../assets/icons/icons8-github.svg"

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skill-header">Skills</h2>
      <div className="skills-set animate__animated animate__pulse">
        <div className="icon-card">
          <img src={htmlIco} alt="icono-html" loading="lazy" className="icon" />
          <label className="skill-name">HTML</label>
        </div>
        <div className="icon-card">
          <img src={css3Ico} alt="icono-cc3" loading="lazy" className="icon" />
          <label className="skill-name">CSS3</label>
        </div>
        <div className="icon-card">
          <img src={jsIco} alt="js-icon" loading="lazy" className="icon" />
          <label className="skill-name">JAVASCRIPT</label>
        </div>
        <div className="icon-card">
          <img src={gitIco} alt="git-icon" loading="lazy" className="icon" />
          <label className="skill-name">GIT</label>
        </div>
        <div className="icon-card">
          <img src={githubIco} alt="github-icon" loading="lazy" className="icon" />
          <label className="skill-name">GITHUB</label>
        </div>
        <div className="icon-card">
          <img src={sassIco} alt="sass-icon" loading="lazy" className="icon" />
          <label className="skill-name">SASS</label>
        </div>
        <div className="icon-card">
          <img src={reactIco} alt="react-icon" loading="lazy" className="icon" />
          <label className="skill-name">REACT</label>
        </div>
      </div>
    </section>
  );
};

export default Skills;