import "./App.css"
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
