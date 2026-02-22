import { useState } from "react";

function Projects() {

  /* ---------- ALL PROJECTS ---------- */
  const projects = [
    {
      title: "Bulk Mail System",
      desc: "Send bulk emails with Excel upload and SMTP.",
      tech: ["React", "Node", "MongoDB", "Express"],
      category: "featured",
      live: "https://bulkmail-frontend-delta.vercel.app/",
      github: "https://github.com/benedicta-abragam/bulkmail-frontend",
    },
    {
      title: "Weather App",
      desc: "Real-time weather forecast using API.",
      tech: ["React", "API"],
      category: "featured",
      live: "https://weather-kohl-ten-23.vercel.app/",
      github: "https://github.com/benedicta-abragam/Weather",
    },
    {
      title: "Quiz App",
      desc: "Interactive quiz with score tracking.",
      tech: ["React"],
      category: "featured",
      live: "https://quizz-app-nu-nine.vercel.app/",
      github: "https://github.com/benedicta-abragam/Quizz-App",
    },

    /* ---------- OTHER ---------- */
    {
      title: "Netflix Login",
      tech: ["React"],
      category: "other",
      live: "https://netflix-style-login-clone.vercel.app/",
      github: "https://github.com/benedicta-abragam/netflix-style-login-clone",
    },
    {
      title: "Perfume Website",
      tech: ["React"],
      category: "other",
      live: "https://perfumy-react-sand-ten.vercel.app/",
      github: "https://github.com/benedicta-abragam/perfumy-react",
    },
    {
      title: "Student Favorites",
      tech: ["React"],
      category: "other",
      live: "https://student-list-react-jet.vercel.app/favorites",
      github: "https://github.com/benedicta-abragam/Student-list-React",
    },

    /* ---------- MINI ---------- */
    {
      title: "Counter App",
      tech: ["React"],
      category: "mini",
      live: "https://react-counter-98cc.vercel.app/",
      github: "https://github.com/benedicta-abragam/React-Counter",
    },
    {
      title: "Random Generator",
      tech: ["React"],
      category: "mini",
      live: "https://react-random-number-generator-five.vercel.app/",
      github: "https://github.com/benedicta-abragam/React-Random-Number-Generator",
    },
  ];

  /* ---------- FILTER ---------- */
  const featured = projects.filter(p => p.category === "featured");
  const other = projects.filter(p => p.category === "other");
  const mini = projects.filter(p => p.category === "mini");

  return (
    <section id="projects" className="bg-[#02131c] px-6 md:px-20 py-20">

      {/* ⭐ HEADING */}
      <h1 className="text-3xl md:text-4xl text-center font-bold text-[#00ffd5]">
        Projects
      </h1>

      <p className="text-center text-gray-400 mt-3 mb-14">
        Here are some of the applications I’ve built during my learning journey.
      </p>

      {/* ⭐ FEATURED PROJECTS */}
      <div className="space-y-14">

        {featured.map((item, i) => (
          <div
            key={i}
            className="grid md:grid-cols-2 gap-10 bg-white/5 border border-[#00ffd5]/40 
            rounded-2xl p-8 shadow-[0_0_20px_#00ffd5]
            hover:scale-[1.02] transition duration-300">

            {/* IMAGE */}
            <div className="bg-[#050f14] rounded-xl h-56 flex items-center justify-center text-gray-500">
              Project Image
            </div>

            {/* CONTENT */}
            <div>
              <h2 className="text-2xl text-[#00ffd5] font-semibold mb-3">
                {item.title}
              </h2>

              <p className="text-gray-400 mb-4">{item.desc}</p>

              {/* TECH BADGES */}
              <div className="flex flex-wrap gap-2 mb-5">
                {item.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-xs border border-[#00ffd5] px-3 py-1 rounded-full text-[#00ffd5]">
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4">
                <a href={item.live} target="_blank">
                  <button className="px-5 py-2 bg-[#00ffd5] text-black rounded-full hover:shadow-[0_0_15px_#00ffd5]">
                    Live
                  </button>
                </a>

                <a href={item.github} target="_blank">
                  <button className="px-5 py-2 border border-[#00ffd5] text-[#00ffd5] rounded-full hover:bg-[#00ffd5] hover:text-black">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ⭐ OTHER PROJECTS */}
      <h2 className="text-2xl text-[#00ffd5] mt-20 mb-8">
        Other Projects
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {other.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-[#00ffd5]/30 rounded-xl p-6 
            hover:shadow-[0_0_20px_#00ffd5] hover:-translate-y-2 transition">

            <h3 className="text-[#00ffd5] mb-3">{item.title}</h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {item.tech.map((t, index) => (
                <span
                  key={index}
                  className="text-xs border border-[#00ffd5] px-2 py-1 rounded-full text-[#00ffd5]">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex justify-between">
              <a href={item.live} target="_blank" className="text-gray-300">
                Live
              </a>
              <a href={item.github} target="_blank" className="text-gray-300">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ⭐ MINI PROJECTS */}
      <h2 className="text-xl text-gray-400 mt-16 mb-6">
        Mini Practice Projects
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {mini.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-gray-700 rounded-lg p-4 text-sm">

            {item.title}
          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;