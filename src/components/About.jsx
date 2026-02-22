import myphoto from "../assets/about-photo.jpeg";

function About() {
  return (
    <section
      id="about"
      className="  min-h-screen bg-[#02131c] px-6 md:px-16 lg:px-24  flex items-center">
      <div className="max-w-7xl mx-auto w-full">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#00ffd5] text-center mt-4 mb-10">
          About Me
        </h2>

        {/* GLASS CARD */}
        <div className="grid md:grid-cols-2 gap-10 items-center
         bg-white/5 border border-[#00ffd5]/30 
        rounded-2xl p-8 shadow-[0_0_20px_#00ffd5]">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#00ffd5] blur-3xl opacity-20"></div>

              <img
                src={myphoto}
                alt="Benedicta"
                className=" float-img relative w-64 md:w-80 rounded-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* SHORT INTRO */}
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a passionate and self-motivated Full Stack Developer with a
              strong foundation in MERN stack technologies. Coming from a BCom
              with Computer Applications background, I transitioned into the IT
              field driven by my interest in building modern, scalable, and
              user-friendly web applications. I enjoy continuous learning and
              solving real-world problems with clean and efficient code.
            </p>

            {/* TIMELINE */}
            <div className="space-y-4 mb-6">

              <div className="border-l-2 border-[#00ffd5] pl-4">
                <h4 className="text-[#00ffd5] font-semibold">
                  2022 – 2025
                </h4>
                <p className="text-gray-400">
                  BCom with Computer Applications
                </p>
              </div>

              <div className="border-l-2 border-[#00ffd5] pl-4">
                <h4 className="text-[#00ffd5] font-semibold">
                  2025
                </h4>
                <p className="text-gray-400">
                  MERN Stack Course - EMC Institution
                </p>
              </div>
            </div>

            {/* SKILLS + PASSION */}
            <p className="text-gray-300 mb-6">
              I specialize in React, Node.js, MongoDB, and modern UI frameworks
              like Tailwind CSS. I am passionate about creating responsive,
              performance-driven applications and continuously improving my
              problem-solving and development skills.
            </p>

            {/* CERTIFICATE + ACHIEVEMENT */}
            <div className="space-y-3 mb-8">
              <p className="text-gray-400">
                ✔ Completed MERN Stack Certification at EMC Institution
              </p>

              <p className="text-gray-400">
                ✔ Received Outstanding Academic Performance Award in 3rd year
              </p>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;