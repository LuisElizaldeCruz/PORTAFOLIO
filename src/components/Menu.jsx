import React from "react";
import "../assets/css/Menu.css"

const Menu =()=>{
    return(
        <nav>
        <h1 class="name">Luis Elizalde</h1>
        <ul class="navigation">
          <li><a href="#about" class="nav-link">Acerca de mi</a></li>
          <li><a href="#skills" class="nav-link">Habilidades</a></li>
          <li><a href="#projects" class="nav-link">Proyectos</a></li>
          <li><a href="#contact" class="nav-link">Contacto</a></li>
        </ul>
        <button class="burger-menu" id="burger-menu">
          <ion-icon class="bars" name="menu-outline"></ion-icon>
        </button>
      </nav>
    );
}

export default Menu;