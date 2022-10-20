import React from "react";
import "../assets/css/Menu.css";
import MenuIcon from '@mui/icons-material/Menu';

const mostrarMenu = (e) => {
  document.querySelector(".navigation").classList.toggle("show");
}

const ocultarClicked = (e) => {
  if (e.target.matches(".nav-link")) {
    document.querySelector(".navigation").classList.toggle("show");
    console.log(e.target);
  }
}

window.onscroll = () => {
  const y = window.scrollY;
  console.log(y)
  const navMenu = document.querySelector(".nav-menu");
  if (y < 550) {
    navMenu.className = "nav-menu"
  } else {
    navMenu.className = "nav-menu nav-menuColor"
  }
}

const Menu = () => {
  return (
    <nav className="nav-menu" onClick={ocultarClicked}>
      <h1 className="name"> <a href="#about" className="name-link">Luis Elizalde</a></h1>
      <ul className="navigation">
        <li><a href="#personal-info" className="nav-link about">Acerca de mi</a></li>
        <li><a href="#skills" className="nav-link skills">Skills</a></li>
        <li><a href="#container-projects" className="nav-link proyectos">Proyectos</a></li>
        <li><a href="#footer" className="nav-link contact">Contacto</a></li>
      </ul>

      <button className="burger-menu" id="burger-menu" onClick={mostrarMenu}>
        <MenuIcon />
      </button>

    </nav>
  );
}

export default Menu;