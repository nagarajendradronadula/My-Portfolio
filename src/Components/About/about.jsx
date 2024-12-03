import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white overflow-hidden items-start bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <h2 className="text-2xl md:text-4xl font-bold ml-40">About</h2>
      <div className="md:w-full flex md:flex-wrap md:justify-center items-center gap-x-20">
        <div className="md:flex flex-wrap flex-col md:flex-row items-center mt-5 ">
          <div>
            <img
              className="md:h-auto h-80 mr-16 flex" 
              src={AboutImg}
              alt="About Image"
            />
          </div>
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={40} className="mt-1" />
              <span className="w-96 md:text-3xl">
                <h1 className="text-2xl md:text-3xl font-semibold leading-normal">
                  Full Stack Developer
                </h1>
                <p className="text-lg md:text-xl leading-relaxed">
                  I am a Full Stack Developer and have learnt MERN Stack (MongoDB, Express.js, React.js & Node.js) and
                  have built many projects based on MERN Stack. Can look at them from my Github Profile.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={40} className="mt-1" />
              <span className="w-96 md:text-3xl">
                <h1 className="text-2xl md:text-3xl font-semibold leading-normal">
                  Java Developer
                </h1>
                <p className="text-lg md:text-xl leading-relaxed">
                  I am a Java Developer and have learnt Java from many sources like Youtube and Scaler. And I have proved my Java and DSA skills on Leetcode through solving 100+ Problems in 100+ days.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={40} className="mt-1" />
              <span className="w-96 md:text-3xl">
                <h1 className="text-2xl md:text-3xl font-semibold leading-normal">
                  Python Developer
                </h1>
                <p className="text-lg md:text-xl leading-relaxed">
                  I am a Python Developer and have learnt Python through many online sources like Youtube and Scaler. And I have built some mini projects to practice my Python and Problem Solving skills.
                </p>
              </span>
            </div>
            
            <div className="flex gap-3 py-4">
              <IoArrowForward size={40} className="mt-1" />
              <span className="w-96 md:text-3xl">
                <h1 className="text-2xl md:text-3xl font-semibold leading-normal">
                  Database Developer
                </h1>
                <p className="text-lg md:text-xl leading-relaxed">
                  I am a Database Developer and have learnt MySQL and MongoDB
                  and have been using them in most of my web developing
                  projects to store and manage data of the users using my projects.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
