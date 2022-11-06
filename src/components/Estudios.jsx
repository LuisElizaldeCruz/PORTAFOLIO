import React from 'react'
import "../assets/css/Estudios.css";
import iconUaemex from "../assets/multimedia/uaemex.png"

export default function Estudios() {
    return (
        <section className="estudios">
            <h4 className="estudios-titulo">Estudios</h4>
            <div className="licenciatura">
            <img className="img-escuela" src={iconUaemex} alt="uaemex"/>
                <h4 className="nombre-lic">Ingenieria en computacion</h4>
                <p className="nombre-escuela">Centro Universitario UAEM Atlacomulco</p>
                <p className="fecha">2015-2020</p>
            </div>
        </section>
    )
}
