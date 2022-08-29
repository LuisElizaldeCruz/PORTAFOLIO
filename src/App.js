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
      <section className="projects">
        <h3 className="title-projects">Projectos</h3>
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
      </section>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
