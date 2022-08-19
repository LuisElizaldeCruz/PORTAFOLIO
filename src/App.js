import "./App.css"
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
