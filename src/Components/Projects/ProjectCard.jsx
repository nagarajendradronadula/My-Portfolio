/* eslint-disable react/prop-types */
import bannerImg from "../../assets/projectCard.png";
import "./projectCard.css";

const ProjectCard = ({ title, main, gitHubLink, liveLink }) => {
  return (
    <div className="md:p-6 projectCard">
      <img className="bannerImg" src={bannerImg} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold text-center leading-normal">
        {title}
      </h3>
      <p className="px-4 text-md md:text-md text-justify leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex justify-center gap-12">
        {liveLink && (
          <button
            onClick={() => window.open(liveLink, "_blank")}
            className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] border-solid"
          >
            Demo
          </button>
        )}
        <button
          onClick={() => window.open(gitHubLink, "_blank")}
          className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] border-solid"
        >
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
