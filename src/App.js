import "./App.css"
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import Project from "./components/Projects";


function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <About />
      <Skills />
      <section className="container-projects">
        <h4 className="title-projects">Proyectos</h4>
        <div className="projects">
          <Project
            img="expenseTracker"
            alt="expenseTracker"
            description="este es un proyecto de prueba"
          />
          <Project
            img="expenseTracker"
            alt="expenseTracker"
            description="este es un proyecto de prueba"
          />
        </div>
      </section>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
