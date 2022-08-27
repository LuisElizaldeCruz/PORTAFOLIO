import * as React from 'react';
import '../assets/css/Projects.css'

export default function Project({ img, alt, description, link = "#" }) {
  return (
    <>
      <div className="project-card">
        <img className="project-img" src={require(`../assets/images-projects/${img}.png`)} alt={alt} />
        <p className="description-text">{description}</p>
      </div>
    </>
  );
}
