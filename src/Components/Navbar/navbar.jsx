import { useState, useRef, useEffect } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";
import "./navbar.css";

const Navbar = () => {
  const [menu, setOpenMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  // const icon = document.getElementById("icon");

  // icon.addEventListener("click", function () {
  //   document.body.classList.toggle("dark-theme");
  //   if (document.body.classList.contains("dark-theme")) {
  //     icon.innerHTML =
  //       "<button class='theme-button bright'><i class='fa-solid fa-sun'></i></button>";
  //   } else {
  //     icon.innerHTML =
  //       "<button class='theme-button dark'><i class='fa-solid fa-moon'></i></button>";
  //   }
  // });

  const iconRef = useRef(null);

  useEffect(() => {
    const icon = iconRef.current;
    icon.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        icon.innerHTML =
          "<button class='theme-button bright'><i class='fa-solid fa-sun'></i></button>";
      } else {
        icon.innerHTML =
          "<button class='theme-button dark'><i class='fa-solid fa-moon'></i></button>";
      }
    });
  }, []);

  return (
    <nav
      className=" sticky top-0 flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 mb-4"
      id="navbar"
    >
      <span className="text-2xl font-bold tracking-wide hover:bg-white-900">
        <a href="#Home">D.N.R&apos;s Portfolio</a>
      </span>
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opcity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-lg transiton-all duration-300 p-1 md:p-0 nav-links">
            About
          </li>
        </a>
        <a href="#Skills">
          <li className="text-lg transiton-all duration-300 p-1 md:p-0 nav-links">
            Skillset
          </li>
        </a>
        <a href="#FunGame">
          <li className="text-lg transiton-all duration-300 p-1 md:p-0 nav-links">
            Fun-Game
          </li>
        </a>
        <a href="#Projects">
          <li className="text-lg transiton-all duration-300 p-1 md:p-0 nav-links">
            My-Works
          </li>
        </a>
        <a href="#Contact">
          <li className="text-lg transiton-all duration-300 p-1 md:p-0 nav-links">
            Contact
          </li>
        </a>
      </ul>
      <div className="theme" id="icon">
        <button ref={iconRef} className="theme-button">
          <i className="fa-solid fa-moon"></i>
        </button>
      </div>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            setOpenMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}
    </nav>
  );
};

export default Navbar;
