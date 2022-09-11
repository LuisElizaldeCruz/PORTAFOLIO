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
      <About />
      <Skills />
      <BodyProjectCard />
      {/* <Form /> */}
      <Footer />
    </div>
  );
}

export default App;
