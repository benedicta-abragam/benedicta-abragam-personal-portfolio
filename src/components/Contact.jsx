import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#02131c] px-6 md:px-16 lg:px-24 py-16 flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#00ffd5] mb-4">
          Let's Work Together
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
         I am open to entry-level opportunities, internships, and freelance
          projects. Feel free to connect with me through the following platforms.
        </p>

        {/* Glass card */}
        <div className="bg-white/5 border border-[#00ffd5]/30 
        rounded-2xl p-8 shadow-[0_0_20px_#00ffd5]">

          {/* Name */}
          <h3 className="text-xl text-[#00ffd5] font-semibold mb-6">
            Benedicta A
          </h3>

          {/* Contact info */}
          <div className="space-y-4 text-gray-300">

            <p className="flex justify-center items-center gap-3">
              <FaMapMarkerAlt className="text-[#00ffd5]" />
              Chennai, Tamil Nadu (Open to relocate)
            </p>

            <p className="flex justify-center items-center gap-3">
              <FaEnvelope className="text-[#00ffd5]" />
              benedictaabragam@gmail.com
            </p>

            <p className="flex justify-center items-center gap-3">
              <FaPhoneAlt className="text-[#00ffd5]" />
              +91 6374196066
            </p>

          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-8 mt-8 text-2xl">

            <a
              href="https://github.com/benedicta-abragam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#00ffd5] hover:scale-125 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/benedicta-abraham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#00ffd5] hover:scale-125 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:benedictaabragam@gmail.com"
              className="text-gray-300 hover:text-[#00ffd5] hover:scale-125 transition"
            >
              <FaEnvelope />
            </a>

          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-500 mt-10 text-sm">
          © {new Date().getFullYear()} Benedicta A | Built with React & Tailwind | Open to Work
        </p>

      </div>
    </section>
  );
}

export default Contact;