import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpeg";
import "../styles/Hero.css"

function Hero() {
  return (
    <section id="home"
      className="min-h-screen flex items-start md:items-center bg-[#02131c] px-6 md:px-20 lg:px-24 pt-20 md:pt-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-center  items-center">
        {/* LEFT CONTENT */}
        <div className=" md:space-y-6">
          <p className="text-gray-400 text-xl md:text-2xl  md:mb-8">
            Hi there, I'm
          </p>
          {/* Name + Profile */}
          <div className="flex items-center justify-between md:block md:mb-0">
            {/* Name */}
            <h1 className="w-[65%] font-bold  md:mb-8 neon-texts">
              Benedicta
            </h1>

            {/* MOBILE PROFILE */}
            <div className="md:hidden relative">

              <img
                src={profile}
                alt="Benedicta"
                className="relative w-30 h-30  rounded-full object-cover shadow-[0_0_20px_#00ffd5]" />
            </div>

          </div>

          {/* Typing */}
          <div className=" md:text-3xl font-semibold text-[#00ffd5] mb-7 md:mb-8 min-h-[28px]">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </div>

          {/* Professional Fresher Description */}
          <p className="text-gray-400 leading-8 max-w-xl  md:text-base mb-7 mt-13 md:mt-0">
            Passionate Full Stack Developer with strong skills in React, Node.js, and MongoDB, eager to create scalable and performance-driven web solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 md:gap-5 ">

            <a href="#contact">
              <button className="neon-btn px-6 py-3 bg-[#00ffd5] text-black rounded-full text-xl md:text-base font-semibold hover:bg-[#0b1f2a] hover:text-[#00ffd5]">
                Hire Me
              </button>
            </a>

            <a href="#projects">
              <button className="neon-btn px-6 py-3 border border-[#00ffd5] text-[#00ffd5] text-xl md:text-base rounded-full hover:bg-[#00ffd5] hover:text-black">
                View Projects
              </button>
            </a>

            <a
              href="/resume.pdf"
             
              className="neon-btn px-6 py-3 bg-[#00ffd5] text-black rounded-full font-semibold text-xl md:text-base hover:bg-[#0b1f2a] hover:text-[#00ffd5] transition"
            >
             Resume
            </a>



          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex justify-end">
          <div className="relative">


            <img
              src={profile}
              alt="Benedicta"
              className="relative w-28 sm:w-40 md:w-80  md:mb-10 rounded-full shadow-[0_0_35px_#00ffd5]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
