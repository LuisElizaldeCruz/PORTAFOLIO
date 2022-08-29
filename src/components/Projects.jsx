import * as React from 'react';
import '../assets/css/Projects.css'

export default function Project({ img, alt, description, link = "#" }) {
  return (
    <>
      <div className="project-card contenedor-img ejemplo-1">
        <img className="project-img" src={require(`../assets/images-projects/${img}.png`)} alt={alt} />
        <div className="mascara">
          <h2>ejemplo</h2>
          <p className="description-text">{description}</p>
          <a href="#none" class="link">Leer mas</a>
        </div>
      </div>
    </>
  );
}
