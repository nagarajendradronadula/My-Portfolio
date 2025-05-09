import "./skills.css"
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaJava,
  FaPython,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      <div className="text-center w-full">
        <h1 className="text-2xl md:text-4xl text-white font-bold tracking-wider text-center headings">
          Skillset
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-around">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:p-12 py-10">
          {/* Java */}
          <div className=" bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 tiles">
            <FaJava color="#007396" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">
              Java
            </p>
          </div>

          {/* Python */}
          <div className=" bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 tiles">
            <FaPython color="#306998" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">
              Python
            </p>
          </div>

          {/* HTML */}
          <div className=" bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 tiles">
            <FaHtml5 color="#E34F26" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">
              HTML5
            </p>
          </div>

          {/* CSS */}
          <div className=" bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 tiles">
            <FaCss3 color="#1572B6" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">
              CSS3
            </p>
          </div>

          {/* JavaScript */}
          <div className=" bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 tiles">
            <FaJs color="#F7DF1E" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">
              JavaScript
            </p>
          </div>

          {/* Node.js */}
          <div className=" bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 tiles">
            <FaNodeJs color="#339933" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">
              Node.js
            </p>
          </div>

          {/* Express */}
          <div className=" bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 tiles">
            <SiExpress color="#FFFFFF" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">
              Express.js
            </p>
          </div>

          {/* React */}
          <div className=" bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 tiles">
            <FaReact color="#61DAFB" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">
              React.js
            </p>
          </div>

          {/* MongoDB */}
          <div className=" bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 tiles">
            <SiMongodb color="#47A248" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">
              MongoDB
            </p>
          </div>

          {/* MySQL */}
          <div className=" bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 tiles">
            <SiMysql color="#4479A1" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">
              MySQL
            </p>
          </div>

          {/* Tailwind CSS */}
          <div className=" bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 tiles">
            <SiTailwindcss color="#06B6D4" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">
              Tailwind CSS
            </p>
          </div>

          {/* Redux */}
          <div className=" bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 tiles">
            <SiRedux color="#764ABC" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">
              Redux
            </p>
          </div>

          {/* GitHub */}
          <div className=" bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 tiles">
            <FaGithub color="#FFFFFF" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">
              GitHub
            </p>
          </div>

          {/* BootStrap */}
          <div className=" bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 tiles">
            <FaBootstrap color="#A66ADE" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">
              Bootsrap CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
