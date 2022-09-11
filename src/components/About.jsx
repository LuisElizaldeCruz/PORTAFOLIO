import React from "react";
import "../assets/css/About.css"

const About = ({ moreDescription }) => {
    return (
        <section className="more-about">
            <h2>Mas acerca de mi</h2>
            <p>
                Egresado de la carrera de ingenieria en computación enfocado al desarrollo de software, autodidacta aprendiendo ingles y japones, con interes y conocimiento en el uso de <b>linux</b> y el software libre. Actualmente me estoy enfocando en el desarrollo web usando <strong>HTML, CSS, JavaScript y React y en el backend utilizando php y MySQL</strong>.
            </p>
            <p>
                Durante mi estancia en la universidad utilicé JAVA para la creacion de aplicaciones lo que me ayudo a entender la programación orientada a objetos y sus caracteristicas como el polimorfismo, herencia, etc.
            </p>
            {/* <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
                nostrum dolor minus, libero delectus praesentium perferendis
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                consequuntur labore? Ea totam voluptas amet!
            </p> */}
        </section>
    );
};

export default About;