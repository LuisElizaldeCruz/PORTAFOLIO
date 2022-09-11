import "./App.css"
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import { Footer } from "./components/Footer";
//import { Form } from "./components/Form";
import BodyProjectCard from "./components/BodyProjectCard";


function App() {

  return (
    <div className="App">
      <Menu />
      <Hero
        heroDescription={"¡hola! aqui puedes ver alguno de los proyectos que he realizado"}
      />
      <About 
      moreDescription={"Egresado de la carrera de ingenieria en computación enfocado al desarrollo de software, autodidacta en el aprendizaje de ingles y japones, con interes y conocimiento en el uso de linux y el software libre. Actualmente me estoy enfocando en el desarrollo web usando HTML, CSS, JavaScript y React y en el backend utilizando php y MySQL, durante mi estancia en la universidad utilicé java para la creacion de aplicaciones lo que me ayudo a entender la programación orientada a objetos y sus caracteristicas como el polimorfismo, herenca, etc."}
      />
      <Skills />
      <BodyProjectCard />
      {/* <Form /> */}
      <Footer />
    </div>
  );
}

export default App;
