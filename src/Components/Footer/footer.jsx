import { MdOutlineMail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import EmailForm from "./EmailForm/email";
import "./footer.css";

const Footer = () => {
  return (
      <div className="bg-[#465697] text-white p-10 md:p-12 items-center">
    <div
      id="Contact"
      className="flex justify-around p-10 md:p-12 items-center"
      >
      <div>
        <h1 className="text-9xl md:text:6xl font-bold footer-heading">Wanna Collaborate with Me!</h1>
        <h3 className="text-lg md:text-2xl font-normal mb-5 footer-para">
          Feel free to reach me out!
        </h3>

        <ul className="text-normal md:txt-xl mt-5">
          <li className="flex gap-1 items-center mt-5 text-lg">
            <MdOutlineMail size={32} />
            <a href="mailto:nagarajendra432@gmail.com" target="_blank">nagarajendra432@gmail</a>
          </li>
          <li className="flex gap-1 items-center mt-4 tezt-lg">
            <FaLinkedin size={32} />
            <a href="https://www.linkedin.com/in/nagarajendradronadula/" target="_blank">
              linkedin.com/nagarajendradronadula
            </a>
          </li>
          <li className="flex gap-1 items-center mt-4 text-lg">
            <FaGithub size={32} />
            <a href="https://github.com/nagarajendradronadula" target="_blank">
              github.com/nagarajendradronadula
            </a>
          </li>
        </ul>
      </div>
      <EmailForm />
      </div>
      <h2 className="text-center">Made with ❤️ by D.N.R</h2>
    </div>
  );
};

export default Footer;
