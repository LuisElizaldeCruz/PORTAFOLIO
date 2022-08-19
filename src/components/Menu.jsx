import React from "react";
import "../assets/css/Menu.css"

const Menu =()=>{
    return(
        <nav>
        <h1 className="name">Luis Elizalde</h1>
        <ul className="navigation">
          <li><a href="#about" className="nav-link">Acerca de mi</a></li>
          <li><a href="#skills" className="nav-link">Habilidades</a></li>
          <li><a href="#projects" className="nav-link">Proyectos</a></li>
          <li><a href="#contact" className="nav-link">Contacto</a></li>
        </ul>
        <button className="burger-menu" id="burger-menu">
          <ion-icon className="bars" name="menu-outline"></ion-icon>
        </button>
      </nav>
    );
}

export default Menu;