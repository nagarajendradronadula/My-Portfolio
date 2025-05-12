// import profileImage from "../../assets/IMG_20220813_192157-modified-removebg-preview-modified.png";
import profileImage from "../../assets/IMG_20250512_034130-removebg-preview.png";
import backgroundImage from "../../assets/graph (1).png";
import Resume from "../../assets/DNR-RESUME.pdf";
import "./home.css";

const Home = () => {
  return (
    <div
      id="Home"
      className="text-white flex w-full justify-between align-text-bottom items-start p-10 md:p-20"
    >
      <div className="md:w-3/5 md:pt-10 ml-36 hero-text">
        <h1 className="text-2xl md:text-4xl font-bold flex leading-normal tracking-wide">
          Hello, I am
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold flex leading-normal tracking-wide">
          NAGA RAJENDRA DRONADULA
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-5 typewriter">
          FULL STACK DEVELOPER | JAVA | PYTHON
        </p>
        {/* <a href={Resume} download="DNR-Resume.pdf"> */}
        <a href={Resume} target="_blank">
          <button className="mt-5 md:md-10 text-white text-md md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] border-solid">
            Here&apos;s My Resume
          </button>
        </a>
      </div>
      <div className="flex justify-center align-center mr-36">
        <div className="home-img">
          <img
            src={backgroundImage}
            alt="background-image"
            className="background-image"
          />
          <div className="profile-img-parent">
            <img
              src={profileImage}
              alt="profile-image"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
