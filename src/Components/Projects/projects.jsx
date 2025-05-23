import ProjectCard from './ProjectCard.jsx';

const projectData = [
  {
    title: "WanderLust - Airbnb Clone",
    main: "This is an Airbnb Clone called WanderLust and this has been built using Node.js, Express.js and MongoDB along with some libraries like passport and routers , etc., which has been deployed on Render.",
    gitHubLink: "https://github.com/nagarajendradronadula/MajorProject.git",
    liveLink: "http://majorproject-bv6r.onrender.com/",
  },
  {
    title: "DNR - Portfolio",
    main: "This project is a personal portfolio website built with React, featuring various sections such as Home, About, Skills, Projects, and Footer.",
    gitHubLink: "https://github.com/nagarajendradronadula/My-Portfolio",
    liveLink: "https://dnr-portfolio.vercel.app/",
  },
  {
    title: "Weather App",
    main: "This is a weather app built using HTML, CSS and JavaScript with an intuitive user interface where a user can search for any city and get the weather details.",
    gitHubLink: "https://github.com/nagarajendradronadula/MyGithub-Repo/tree/5cbadbb85c561866b45ee2eb3144018690a0101c/Projects/weather%20app",
  },
  {
    title: "Chat With Gemini",
    main: "This is a chat application built using Node.js, Express.js, MongoDB and Google Gemini API where it has an intuitive user interface where a user can ask for any query and get the response from Google's Gemini through the customised interface.",
    gitHubLink: "https://github.com/nagarajendradronadula/MyGithub-Repo/tree/5cbadbb85c561866b45ee2eb3144018690a0101c/Projects/chatWithAI",
  },
  {
    title: "Enhanced Search",
    main: "This is a search based webpage built using Node.js, Express.js where a user can search for anything and get up to 12 results of YouTube Videos, NEWS Articles and Google Scholar results.",
    gitHubLink: "https://github.com/nagarajendradronadula/MyGithub-Repo/tree/5cbadbb85c561866b45ee2eb3144018690a0101c/Projects/enhanced-search",
  }
];

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <div className="text-center w-full">
        <h1 className="text-2xl md:text-4xl font-bold tracking-wider headings">My Works</h1>
      </div>

      <div className="py-12 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            custom={index}
            title={project.title}
            main={project.main}
            gitHubLink={project.gitHubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;