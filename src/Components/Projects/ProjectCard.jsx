/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bannerImg from "../../assets/projectCard.png";
import "./projectCard.css";

const ProjectCard = ({ title, main, gitHubLink, liveLink, custom }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  const tileVariants = {
    hidden: { x: 400, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 1.2,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <motion.div
      className="projectCard md:p-6 bg-[#1f2937] rounded-xl shadow-lg"
      ref={ref}
      custom={custom}
      variants={tileVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
    >
      <img className="w-full h-40 object-cover rounded-t-xl" src={bannerImg} alt="Project banner" />
      <h3 className="px-4 pt-4 text-xl md:text-2xl font-bold text-center leading-normal">
        {title}
      </h3>
      <p className="px-4 text-md text-justify leading-tight py-2">
        {main}
      </p>
      <div className="mt-2 p-4 flex justify-center gap-6">
        {liveLink && (
          <button
            onClick={() => window.open(liveLink, "_blank")}
            className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Demo
          </button>
        )}
        <button
          onClick={() => window.open(gitHubLink, "_blank")}
          className="text-white py-2 px-4 text-sm md:text-lg duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Source Code
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;