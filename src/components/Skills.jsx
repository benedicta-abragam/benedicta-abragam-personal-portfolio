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

  const SkillBox = ({ title, data }) => (
    <div className="border border-[#00ffd5] rounded-2xl p-6 shadow-[0_0_10px_#00ffd5]">
      <h2 className="text-xl font-semibold text-[#00ffd5] mb-6 text-center">
        {title}
      </h2>

      <div className="grid grid-cols-3 gap-6 place-items-center">
        {data.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-110 transition duration-300"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-12 h-12 object-contain mb-2"
            />
            <p className="text-gray-300 text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#02131c] px-6 md:px-16 lg:px-24 py-16 flex flex-col justify-center"
    >
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#00ffd5] mb-6">
        My Skills
      </h1>

      {/* FIRST ROW → Frontend Full Width */}
      <div className="mb-10">
        <SkillBox title="Frontend" data={frontend} />
      </div>

      {/* SECOND ROW → Backend | Database | Tools */}
      <div className="grid md:grid-cols-3 gap-8">
        <SkillBox title="Backend" data={backend} />
        <SkillBox title="Database & Cloud" data={database} />
        <SkillBox title="Tools" data={tools} />
      </div>

    </section>
  );
}

export default Skills;