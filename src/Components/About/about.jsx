import AboutImg from "../../assets/about-removebg-preview.png";
import "./about.css";

const About = () => {
  return (
    <div id="About" className="about-parent">
      <div className="text-center w-full">
        <h2 className="text-2xl md:text-4xl font-bold tracking-wider headings">
          About
        </h2>
      </div>

      <div className="about">
        <div className="about-image">
          <img
            className="md:h-auto about-image"
            src={AboutImg}
            alt="About Image"
          />
        </div>
        <div className="about-content">
          <div className="">
            <h1 className="">
              NAGA RAJENDRA DRONADULA aka D.N.R
            </h1>
            <p className="">
              I’m a confident and committed Computer Science graduate with
              strong skills in Java, JavaScript, and Python. I have a solid grip
              on backend development, especially using Java and OOP principles,
              and I’ve built and deployed full-stack applications using the MERN
              stack. I enjoy solving real problems through code and take pride
              in writing clean, reliable, and scalable solutions. I don’t just
              follow tutorials—I build, break, and fix things until I understand
              them fully. I’m steadily improving my frontend and backend
              development skills, and I’m currently diving deeper into
              JavaScript and Spring Boot to expand my capabilities. I’m
              self-driven, patient, and not afraid to put in the work to grow. I
              don’t chase shortcuts; I focus on progress that lasts. I know I
              have what it takes to become a strong software developer, and I’m
              determined to keep learning, building, and proving that through
              real results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
