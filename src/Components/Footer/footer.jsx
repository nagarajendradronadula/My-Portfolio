import { MdOutlineMail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import EmailForm from "./EmailForm/email";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-3xl md:text:6xl font-bold">Contact</h1>
        <h3 className="text-lg md:text-2xl font-normal mb-5">
          Feel free to contact me
        </h3>

        <ul className="text-normal md:txt-xl mt-5">
          <li className="flex gap-1 items-center mt-5 text-lg">
            <MdOutlineMail size={27} />
            <a href="mailto:nagarajendra432@gmail.com" target="_blank">nagarajendra432@gmail</a>
          </li>
          <li className="flex gap-1 items-center mt-4 tezt-lg">
            <FaLinkedin size={27} />
            <a href="https://www.linkedin.com/in/nagarajendradronadula/" target="_blank">
              linkedin.com/nagarajendradronadula
            </a>
          </li>
          <li className="flex gap-1 items-center mt-4 text-lg">
            <FaGithub size={27} />
            <a href="https://github.com/nagarajendradronadula" target="_blank">
              github.com/nagarajendradronadula
            </a>
          </li>
        </ul>
      </div>
      <EmailForm />
    </div>
  );
};

export default Footer;
