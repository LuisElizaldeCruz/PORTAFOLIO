import React from "react";
import "../assets/css/Skill.css"

export default function Skill({ icono, altName, desc }){
    return(
        <div className="icon-card">
        <img src={icono} alt={`icon-${altName}`} loading="lazy" className="icon" />
        <label className="skill-name">{desc}</label>
      </div>
    );
};