import AboutImg from "../../assets/about-removebg-preview.png";
import "./about.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  // Slide variant (used by heading and section)
  const slideVariant = {
    hidden: { x: "100vw" },
    visible: {
      x: 0,
      transition: { duration: 3, ease: "easeInOut" },
    },
  };

  // Fade variant for image and content
  const fadeVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 3, delay: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      id="About"
      className="about-parent"
      ref={ref}
      variants={slideVariant}
      initial={{ x: 200, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
    >
      <div className="text-center w-full">
        <h2 className="text-2xl md:text-4xl p-5 font-bold tracking-wider headings">
          About Me!
        </h2>
      </div>

      <motion.div
        className="about"
        variants={slideVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div
          className="about-image"
          variants={fadeVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <img className="md:h-auto about-image" src={AboutImg} alt="About" />
        </motion.div>

        <motion.div
          className="about-content"
          variants={fadeVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h1>NAGA RAJENDRA DRONADULA aka D.N.R</h1>
          <p>
            I’m a confident and committed Computer Science graduate with strong
            skills in Java, JavaScript, and Python. I have a solid grip on
            backend development, especially using Java and OOP principles, and
            I’ve built and deployed full-stack applications using the MERN
            stack. I enjoy solving real problems through code and take pride in
            writing clean, reliable, and scalable solutions. I don’t just follow
            tutorials—I build, break, and fix things until I understand them
            fully. I’m steadily improving my frontend and backend development
            skills, and I’m currently diving deeper into JavaScript and Spring
            Boot to expand my capabilities. I’m self-driven, patient, and not
            afraid to put in the work to grow. I don’t chase shortcuts; I focus
            on progress that lasts. I know I have what it takes to become a
            strong software developer, and I’m determined to keep learning,
            building, and proving that through real results.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
