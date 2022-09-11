import React from "react";
import "../assets/css/About.css"

const About = ({ moreDescription }) => {
    return (
        <section className="more-about">
            <h2>Mas acerca de mi</h2>
            <p>
                {moreDescription}
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