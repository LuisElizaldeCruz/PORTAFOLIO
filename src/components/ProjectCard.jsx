import * as React from 'react';
import '../assets/css/ProjectCard.css';

export default function Project({ projectTitle, img, alt, description, link = "#" }) {
  return (
    <>
      <div className="project-card contenedor-img">
        <img className="project-img" src={require(`../assets/imgProjects/${img}`)} alt={alt} loading="lazy"/>
        <div className="mascara">
          <h2>{projectTitle}</h2>
          <p className="description-text">{description}</p>
          <a href={link} className="link">Ver demo</a>
        </div>
      </div>
    </>
  );
}
