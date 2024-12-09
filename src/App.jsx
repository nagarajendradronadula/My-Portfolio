import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx"
import Skills from "./Components/Skills/Skills.jsx"
import Projects from "./Components/Projects/Projects.jsx"
import Footer from "./Components/Footer/Footer.jsx"



function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
