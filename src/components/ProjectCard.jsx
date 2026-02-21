function ProjectCard({ title, desc, tech, live, github }) {
  return (
    <div className="bg-white/5 border border-[#00ffd5]/30 p-6 rounded-xl 
    hover:shadow-[0_0_20px_#00ffd5] transition duration-300">

      {/* Project Title */}
      <h3 className="text-xl text-[#00ffd5] font-semibold mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 mb-3">
        {desc}
      </p>

      {/* Tech */}
      <p className="text-sm text-gray-400 mb-4">
        {tech}
      </p>

      {/* Buttons */}
      <div className="flex gap-3">
        <a
          href={live}
          target="_blank"
          className="border border-[#00ffd5] px-4 py-1 rounded-full hover:bg-[#00ffd5] hover:text-black"
        >
          Live
        </a>

        <a
          href={github}
          target="_blank"
          className="border border-[#00ffd5] px-4 py-1 rounded-full hover:bg-[#00ffd5] hover:text-black"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;