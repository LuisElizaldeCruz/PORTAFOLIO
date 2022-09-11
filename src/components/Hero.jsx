import React from "react";
import "../assets/css/Hero.css";
import imgHero from "../assets/images-projects/webDeveloper.svg";
import imgWave from "../assets/images-projects/wave.svg";

const Hero = ({ heroDescription}) => {
  return (
    //Hero Section
    <section className="hero" id="about">
      <div className="bio animate__animated animate__shakeX">
        <h2 className="bio-title">Desarrollado web</h2>
        <p className="bio-text">
          {heroDescription}
        </p>
        <button className="btnHeroProjects">
          <a href="#projects">Ver proyectos</a>
        </button>
      </div>
      <img src={imgHero} alt="work-life" loading="lazy" className="hero-img" />
      <img src={imgWave} alt="hero-wave" loading="lazy" className="hero-wave" />
    </section>
  );
}

export default Hero;