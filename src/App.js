import "./App.css"
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsSet from "./components/SkillsSet";
import { Footer } from "./components/Footer";
//import { Form } from "./components/Form";
import ProjectsSet from "./components/ProjectsSet";


function App() {
  return (
    <div className="App">
      <Menu />
      <Hero
        heroDescription={"¡hola! aqui puedes ver alguno de los proyectos que he realizado"}
      />
      <About />
      <SkillsSet />
      <ProjectsSet />
      {/* <Form /> */}
      <Footer />
    </div>
  );
}

export default App;
