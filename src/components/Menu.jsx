import React from "react";
import "../assets/css/Menu.css"
import MenuIcon from '@mui/icons-material/Menu';
/*
const btn = document.getElementById("burger-menu");
btn.addEventListener("click", () =>{
 document.querySelector(".navigation").classList.toggle("show");
});
*/

const mostrarMenu = (e) => {
  document.querySelector(".navigation").classList.toggle("show");
}

const ocultarClicked = (e) => {
  if (e.target.matches(".nav-link")) {
    document.querySelector(".navigation").classList.toggle("show");
    console.log(e.target);
  }
}
const Menu = () => {

  return (
    <nav onClick={ocultarClicked}>
      <h1 className="name">Luis Elizalde</h1>
      <ul className="navigation">
        <li><a href="#about" className="nav-link about">Acerca de mi</a></li>
        <li><a href="#skills" className="nav-link skills">Habilidades</a></li>
        <li><a href="#projects" className="nav-link proyectos">Proyectos</a></li>
        <li><a href="#contact" className="nav-link contact">Contacto</a></li>
      </ul>

      <button className="burger-menu" id="burger-menu" onClick={mostrarMenu}>
        <MenuIcon />
      </button>

    </nav>
  );
}

export default Menu;