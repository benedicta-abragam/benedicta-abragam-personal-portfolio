import html from "../assets/skills/html5.svg";
import css from "../assets/skills/css.svg";
import js from "../assets/skills/javascript.svg";
import react from "../assets/skills/react.svg";
import tailwind from "../assets/skills/tailwindcss.svg";
import node from "../assets/skills/nodedotjs.svg";
import express from "../assets/skills/express.svg";
import mongodb from "../assets/skills/mongodb.svg";
import firebase from "../assets/skills/firebase.svg";
import git from "../assets/skills/git.svg";
import github from "../assets/skills/github.svg";

function Skills() {

  const frontend = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JavaScript", img: js },
    { name: "React", img: react },
    { name: "Tailwind", img: tailwind },
    { name: "Responsive", img: html },
  ];

  const backend = [
    { name: "Node.js", img: node },
    { name: "Express", img: express },
  ];

  const database = [
    { name: "MongoDB", img: mongodb },
    { name: "Firebase", img: firebase },
  ];

  const tools = [
    { name: "Git", img: git },
    { name: "GitHub", img: github },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#02131c] px-6 md:px-16 lg:px-24 py-16">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#00ffd5] mb-10">
        My Skills
      </h1>


      {/* FRONTEND */}
      <div className="border border-[#00ffd5] rounded-2xl p-6 shadow-[0_0_10px_#00ffd5] mb-10">
        <h2 className="text-xl text-center text-[#00ffd5] mb-6">Frontend</h2>

        <div className="grid grid-cols-3 gap-6 place-items-center">
          {frontend.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center hover:scale-110 transition"
            >
              <img src={item.img} className="w-12 mb-2" />
              <p className="text-gray-300 text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </div>


      {/* BACKEND */}
      <div className="grid md:grid-cols-3 gap-8">

        <div className="border border-[#00ffd5] rounded-2xl p-6 shadow-[0_0_10px_#00ffd5]">
          <h2 className="text-xl text-center text-[#00ffd5] mb-6">Backend</h2>

          <div className="grid grid-cols-3 gap-6 place-items-center">
            {backend.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center hover:scale-110 transition"
              >
                <img src={item.img} className="w-12 mb-2  invert " />
                <p className="text-gray-300 text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>


        {/* DATABASE */}
        <div className="border border-[#00ffd5] rounded-2xl p-6 shadow-[0_0_10px_#00ffd5]">
          <h2 className="text-xl text-center text-[#00ffd5] mb-6">
            Database & Cloud
          </h2>

          <div className="grid grid-cols-3 gap-6 place-items-center">
            {database.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center hover:scale-110 transition"
              >
                <img src={item.img} className="w-12 mb-2 " />
                <p className="text-gray-300 text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>


        {/* TOOLS */}
        <div className="border border-[#00ffd5] rounded-2xl p-6 shadow-[0_0_10px_#00ffd5]">
          <h2 className="text-xl text-center text-[#00ffd5] mb-6">Tools</h2>

          <div className="grid grid-cols-3 gap-6 place-items-center">
            {tools.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center hover:scale-110 transition"
              >
                <img src={item.img} className="w-12 mb-2  invert" />
                <p className="text-gray-300 text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;