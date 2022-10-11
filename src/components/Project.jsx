import * as React from 'react';
import '../assets/css/Projects.css';

export default function Project({ projectTitle, img, alt, description, link = "#" }) {
  return (
    <>
      <div className="project-card contenedor-img">
        <img className="project-img" src={require(`../assets/imgProjects/${img}`)} alt={alt} />
        <div className="mascara">
          <h2>{projectTitle}</h2>
          <p className="description-text">{description}</p>
          <a href={link} className="link">Leer mas</a>
        </div>
      </div>
    </>
  );
}