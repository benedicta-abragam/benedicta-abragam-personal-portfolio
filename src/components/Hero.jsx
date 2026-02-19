import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpeg";
import { NavLink } from "react-router-dom";
import "../styles/Hero.css"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#02131c] px-6 md:px-16 lg:px-24"
    >
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6 ">

          <p className="text-gray-400 text-base md:text-lg">
            Hi there, I'm
          </p>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold neon-texts">
            Benedicta
          </h1>

          {/* Typing */}
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#00ffd5]">
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
          <p className="text-gray-400 leading-relaxed max-w-xl text-sm md:text-base">
            Passionate Full Stack Developer with strong skills in React, Node.js, and MongoDB, eager to create scalable and performance-driven web solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">

            <NavLink to="/contact">
              <button className="px-6 py-3 bg-[#00ffd5] text-black rounded-full font-semibold hover:bg-[#0b1f2a] hover:text-[#00ffd5] transition">
                Hire Me
              </button>
            </NavLink>

            <NavLink to="/projects">
              <button className="px-6 py-3 border border-[#00ffd5] text-[#00ffd5] rounded-full hover:bg-[#00ffd5] hover:text-black transition">
                View Projects
              </button>
            </NavLink>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">

            {/* Neon Glow Circle */}
            <div className="absolute inset-0 rounded-full bg-[#00ffd5] blur-3xl opacity-30"></div>

            <img
              src={profile}
              alt="Benedicta"
              className="relative w-52 sm:w-64 md:w-80 rounded-full object-cover  shadow-[0_0_10px_#00ffd5]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
