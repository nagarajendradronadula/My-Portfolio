import Navbar from "./Components/Navbar/navbar.jsx";
import Home from "./Components/Home/home.jsx";
import About from "./Components/About/about.jsx"
import Skills from "./Components/Skills/skills.jsx"
import Projects from "./Components/Projects/projects.jsx"
import Footer from "./Components/Footer/footer.jsx"

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
  )
}

// function App() {
//   return (
//     <div className="bg-red-500 text-white p-4">
//       Hello World!
//     </div>
//   )
// }

export default App
