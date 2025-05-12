/* eslint-disable react/prop-types */
// import bannerImg from "../../assets/projectCard.png";
// import "./projectCard.css";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

// const ProjectCard = ({ title, main, gitHubLink, liveLink }) => {
//   const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

//   const slideVariant = {
//     hidden: { x: "100vw" },
//     visible: {
//       x: 0,
//       transition: { duration: 1, ease: "easeInOut" },
//     },
//   };

//   // Fade variant for image and content
//   const fadeVariant = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
//     },
//   };

//   return (
//     <motion.div className="md:p-6 projectCard" ref={ref} variants={{slideVariant, fadeVariant}}
//     initial={{ x: 200, opacity: 0 }}
//     animate={inView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}>
//       <img className="bannerImg" src={bannerImg} alt="" />
//       <h3 className="px-4 text-xl md:text-2xl font-bold text-center leading-normal">
//         {title}
//       </h3>
//       <p className="px-4 text-md md:text-md text-justify leading-tight py-2">{main}</p>
//       <div className="mt-2 p-2 md:p-4 flex justify-center gap-12">
//         {liveLink && (
//           <button
//             onClick={() => window.open(liveLink, "_blank")}
//             className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
//           >
//             Demo
//           </button>
//         )}
//         <button
//           onClick={() => window.open(gitHubLink, "_blank")}
//           className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
//         >
//           Source Code
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;


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
        duration: 0.8,
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