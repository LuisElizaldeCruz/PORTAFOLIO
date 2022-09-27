import React from "react";
import "../assets/css/About.css"

const About = ({ moreDescription }) => {
    return (
        <section className="more-about">
            <h2>Acerca de mi</h2>
            <p>
                Egresado de la carrera de ingenieria en computación, con interes y conocimiento en el uso de <b>Linux</b> y el software libre. Actualmente me estoy enfocando al desarrollo web usando <strong>HTML, CSS, JAVASCRIPT y REACT </strong>y en el backend utilizando <strong>PHP y MYSQL</strong>.
            </p>
            <p>
                Durante mi estancia en la universidad utilicé <b>JAVA</b> para la creacion de aplicaciones, lo que me esta ayudando actualmente en comprender el uso del framework <strong>SPRINGBOOT</strong> que actualmente tambien estoy aprendiendo.
            </p>
            
        </section>
    );
};

export default About;