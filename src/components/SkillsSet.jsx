import React from "react";
import "../assets/css/SkillsSet.css";
import Skill from "./Skill";
import htmlIco from "../assets/icons/icons8-html-5.svg";
import css3Ico from "../assets/icons/icons8-css3.svg";
import jsIco from "../assets/icons/icons8-javascript.svg";
import gitIco from "../assets/icons/icons8-git.svg";
import sassIco from "../assets/icons/icons8-sass.svg";
import reactIco from "../assets/icons/icons8-react.svg";
import githubIco from "../assets/icons/icons8-github.svg";
import materialUi from "../assets/icons/icons8-material-ui.svg";

const SkillsSet = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skill-header">Skills</h2>
      <div className="skills-set">
        <Skill icono={htmlIco} altName="html5" desc="HTML5" />
        <Skill icono={css3Ico} altName="cc3" desc="CC3" />
        <div className="icon-card javascript">
          <img src={jsIco} alt="js-icon" loading="lazy" className="icon" />
          <label className="skill-name">JAVASCRIPT</label>
        </div>
        <Skill icono={gitIco} altName="git" desc="GIT" />
        <Skill icono={githubIco} altName="github" desc="GITHUB" />
        <Skill icono={sassIco} altName="sass" desc="SASS" />
        <Skill icono={reactIco} altName="react" desc="REACT" />
        <div className="icon-card material-ui">
          <img src={materialUi} alt="material-icon" loading="lazy" className="icon" />
          <label className="skill-name">MATERIAL UI</label>
        </div>
      </div>

    </section>
  );
};

export default SkillsSet;