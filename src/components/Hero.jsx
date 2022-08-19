import React from "react";
import "../assets/css/Hero.css";
import imgHero from "../assets/images/wfh_1.svg";

const Hero = () => {
  return (
    //Hero Section
    <section className="hero" id="about">
      <img src={imgHero} alt="jane-doe" loading="lazy" className="hero-img" />
      <div className="bio animate__animated animate__shakeX">
        <h2 className="bio-title">Acerca de mi</h2>
        <p className="bio-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sed
          dolorem fugit sapiente porro veniam pariatur dolore nostrum delectus
          inventore tempore minus nemo, iste ullam illo laboriosam maiores
          repudiandae quos!
        </p>
      </div>
    </section>
  );
}

export default Hero;