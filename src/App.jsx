import Navbar from "./Components/Navbar/navbar.jsx";
import Home from "./Components/Home/home.jsx";
import About from "./Components/About/about.jsx"
import Skills from "./Components/Skills/skills.jsx"
import Projects from "./Components/Projects/projects.jsx"
import Footer from "./Components/Footer/footer.jsx"
import SimonGame from "./Components/SimonGame/simonGame.jsx"

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <SimonGame />
      <Projects />
      <Footer />

      
    </div>
  )
}

export default App
