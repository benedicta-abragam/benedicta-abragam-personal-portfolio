import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpeg";
import "../styles/Hero.css"

function Hero() {
  return (
    <section id="home"
      className="min-h-screen flex items-start md:items-center bg-[#02131c] px-6 md:px-20 lg:px-24 pt-20 md:pt-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center">
        {/* LEFT CONTENT */}
        <div className=" md:space-y-6">
          <p className="text-gray-400 text-base md:text-lg md:mb-8">
            Hi there, I'm
          </p>
          {/* Name + Profile */}
          <div className="flex items-center justify-between md:block md:mb-0">
            {/* Name */}
            <h1 className="w-[65%] sm:text-4xl md:text-5xl font-bold  md:mb-8 neon-texts">
              Benedicta
            </h1>

            {/* MOBILE PROFILE */}
            <div className="md:hidden relative">

              {/* Neon Glow */}
              <div className="absolute inset-0 rounded-full bg-[#00ffd5] blur-xl opacity-30"></div>

              <img
                src={profile}
                alt="Benedicta"
                className="relative w-20 h-20 rounded-full object-cover shadow-[0_0_15px_#00ffd5]" />
            </div>

          </div>

          {/* Typing */}
          <div className="sm:text-2xl md:text-3xl font-semibold text-[#00ffd5] md:mb-8 min-h-[28px]">
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
          <p className="text-gray-400 leading-relaxed max-w-xl text-sm md:text-base mt-5 md:mt-0">
            Passionate Full Stack Developer with strong skills in React, Node.js, and MongoDB, eager to create scalable and performance-driven web solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 pt-5 ">

            <a href="#contact">
              <button className="px-6 py-3 bg-[#00ffd5] text-black rounded-full font-semibold hover:bg-[#0b1f2a] hover:text-[#00ffd5] ">
                Hire Me
              </button>
            </a>

            <a href="#projects">
              <button className="px-6 py-3 border border-[#00ffd5] text-[#00ffd5] rounded-full hover:bg-[#00ffd5] hover:text-black">
                View Projects
              </button>
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 bg-[#00ffd5] text-black rounded-full font-semibold hover:bg-[#0b1f2a] hover:text-[#00ffd5] transition">
              Download Resume
            </a>



          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex justify-end">
          <div className="relative">

            {/* Neon Glow Circle */}
            <div className="absolute inset-0 rounded-full bg-[#00ffd5] blur-3xl opacity-30"></div>

            <img
              src={profile}
              alt="Benedicta"
              className="relative w-28 sm:w-40 md:w-80 rounded-full object-cover shadow-[0_0_10px_#00ffd5]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
