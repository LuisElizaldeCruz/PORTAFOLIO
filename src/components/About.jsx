import React from "react";
import "../assets/css/About.css"

const About = ({ moreDescription }) => {
    return (
        <section className="more-about">
            <h2>Mas acerca de mi</h2>
            <p>
                Egresado de la carrera de ingenieria en computación enfocado al desarrollo de software, autodidacta aprendiendo ingles y japones, con interes y conocimiento en el uso de <b>linux</b> y el software libre. Actualmente me estoy enfocando en el desarrollo web usando <strong>HTML, CSS, JAVASCRIPT y REACT y en el backend utilizando PHP y MYSQL</strong>.
            </p>
            <p>
                Durante mi estancia en la universidad utilicé <b>JAVA</b> para la creacion de aplicaciones lo que me ayudo a entender la programación orientada a objetos y sus caracteristicas como el polimorfismo, herencia, etc.
            </p>
            
        </section>
    );
};

export default About;