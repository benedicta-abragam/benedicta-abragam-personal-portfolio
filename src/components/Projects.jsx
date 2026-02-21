import ProjectCard from "../components/ProjectCard";

function Projects() {

  const projects = [
    {
      title: "Bulk Mail System",
      desc: "Full-stack email sending app with Excel upload and SMTP integration.",
      tech: "MERN Stack",
      live: "https://bulkmail-frontend-delta.vercel.app/",
      github: "https://github.com/benedicta-abragam/bulkmail-frontend",
    },
    {
      title: "Weather App",
      desc: "Real-time weather forecast using API integration.",
      tech: "React, API",
      live: "https://weather-kohl-ten-23.vercel.app/",
      github: "https://github.com/benedicta-abragam/Weather",
    },
    {
      title: "Quiz App",
      desc: "Interactive quiz with score tracking.",
      tech: "React",
      live: "https://quizz-app-nu-nine.vercel.app/",
      github: "https://github.com/benedicta-abragam/Quizz-App",
    },
    {
      title: "Netflix Login Clone",
      desc: "Netflix-style login UI clone.",
      tech: "React",
      live: "https://netflix-style-login-clone.vercel.app/",
      github: "https://github.com/benedicta-abragam/netflix-style-login-clone",
    },
    {
      title: "Perfume Website",
      desc: "Responsive perfume landing page using React.",
      tech: "React",
      live: "https://perfumy-react-sand-ten.vercel.app/",
      github: "https://github.com/benedicta-abragam/perfumy-react",
    },
    {
      title: "Dog Card Gallery",
      desc: "Dynamic image card gallery using React.",
      tech: "React",
      live: "https://dog-card-react.vercel.app/",
      github: "https://github.com/benedicta-abragam/Dog-Card-React",
    },
    {
      title: "Random Number Generator",
      desc: "Generates random numbers using React state.",
      tech: "React",
      live: "https://react-random-number-generator-five.vercel.app/",
      github: "https://github.com/benedicta-abragam/React-Random-Number-Generator",
    },
    {
      title: "Counter App",
      desc: "Increment and decrement counter.",
      tech: "React",
      live: "https://react-counter-98cc.vercel.app/",
      github: "https://github.com/benedicta-abragam/React-Counter",
    },
    {
      title: "Student Favorites",
      desc: "Add and manage favorite students.",
      tech: "React",
      live: "https://student-list-react-jet.vercel.app/favorites",
      github: "https://github.com/benedicta-abragam/Student-list-React",
    },
    {
      title: "Udemy Clone",
      desc: "Homepage clone with responsive design.",
      tech: "HTML, CSS",
      live: "https://benedicta-abragam.github.io/Udemy-Homepage-Clone/",
      github: "https://github.com/benedicta-abragam/Udemy-Homepage-Clone",
    },
    {
      title: "Greenden Website",
      desc: "Tailwind website with search functionality.",
      tech: "HTML, Tailwind",
      live: "https://benedicta-abragam.github.io/Greenden-tailwind/product.html",
      github: "https://github.com/benedicta-abragam/Greenden-tailwind",
    },
    {
      title: "Nostra Clone",
      desc: "Simple website clone with JavaScript functions.",
      tech: "HTML, CSS, JS",
      live: "https://benedicta-abragam.github.io/Nosta-Website-clone/",
      github: "https://github.com/benedicta-abragam/Nosta-Website-clone",
    },
    {
      title: "Registration Form",
      desc: "Form validation with JavaScript.",
      tech: "HTML, CSS, JS",
      live: "https://benedicta-abragam.github.io/Registration-Form-with-Validation/",
      github: "https://github.com/benedicta-abragam/Registration-Form-with-Validation",
    },
    {
      title: "Character Limit",
      desc: "Input character limit indicator.",
      tech: "HTML, CSS, JS",
      live: "https://benedicta-abragam.github.io/Character-limit-indicator/",
      github: "https://github.com/benedicta-abragam/Character-limit-indicator",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#02131c] px-6 md:px-16 py-16">

      <h2 className="text-3xl md:text-4xl text-[#00ffd5] font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;