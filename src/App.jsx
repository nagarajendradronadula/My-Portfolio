import Navbar from "./Components/Navbar/navbar.jsx";
import Home from "./Components/Home/home.jsx";
import About from "./Components/About/about.jsx";
import Skills from "./Components/Skills/skills.jsx";
import Projects from "./Components/Projects/projects.jsx";
import Footer from "./Components/Footer/footer.jsx";
import SimonGame from "./Components/SimonGame/simonGame.jsx";
import { useState, useEffect } from "react";

function App() {
  // Lazy loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000); // adjust the timeout to your liking

    return () => clearTimeout(timeoutId);
  }, []);

  if (loading) {
    return (
      <div className="lazy-loader">
        <div className="loading-animation">
            <h1 className="text-white text-3xl">Loading &nbsp;</h1>
          <div className="balls">
            <div className="ball ball-1"></div>
            <div className="ball ball-2"></div>
            <div className="ball ball-3"></div>
          </div>
        </div>
      </div>
    );
  }

  // scroll to top button
  const aboutSection = document.getElementById("About");
  const backToTopButton = document.querySelector(".scroll-to-top");

  window.addEventListener("scroll", () => {
    const aboutSectionTop = aboutSection.offsetTop;
    const aboutSectionHeight = aboutSection.offsetHeight;
    const windowScrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    if (
      !(windowScrollTop + windowHeight >= aboutSectionTop + aboutSectionHeight)
    ) {
      backToTopButton.classList.add("hidden");
    } else {
      backToTopButton.classList.remove("hidden");
    }
  });

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <SimonGame />
      <Projects />
      <Footer />

      <a href="#navbar">
        <div className="text-center font-semibold scroll-to-top">
          ↑ <br /> Back to top{" "}
        </div>
      </a>
    </div>
  );
}

export default App;
