import "./skills.css";
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
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
  
  const tileVariants = {
    hidden: { x: 400, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.10, // delay increases per tile (0.1s, 0.2s, 0.3s, etc.)
        duration: 1.2,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div id="Skills" className="p-10 md:p-24">
      <div className="text-center w-full">
        <h1 className="text-2xl md:text-4xl text-white font-bold tracking-wider text-center headings">
          Skillset
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-around">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:p-12 py-10">
          {[
            { Icon: FaJava, name: "Java", color: "#007396" },
            { Icon: FaPython, name: "Python", color: "#306998" },
            { Icon: FaHtml5, name: "HTML5", color: "#E34F26" },
            { Icon: FaCss3, name: "CSS3", color: "#1572B6" },
            { Icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
            { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
            { Icon: SiExpress, name: "Express.js", color: "#FFFFFF" },
            { Icon: FaReact, name: "React.js", color: "#61DAFB" },
            { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
            { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
            { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
            { Icon: SiRedux, name: "Redux", color: "#764ABC" },
            { Icon: FaGithub, name: "GitHub", color: "#FFFFFF" },
            { Icon: FaBootstrap, name: "Bootsrap CSS", color: "#A66ADE" },
          ].map(({ Icon, name, color }, idx) => (
            <div key={idx} className="tiles-container">
              <motion.div
                className="tiles"
                ref={ref}
                custom={idx}
                variants={tileVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Icon color={color} size={100} />
                <p className="text-white text-center text-xl font-semibold mt-2 tracking-wider">
                  {name}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
