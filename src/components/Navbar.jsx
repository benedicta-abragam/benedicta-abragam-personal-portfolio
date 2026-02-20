import { useState } from "react"
import "../styles/Navbar.css"

function Navbar() {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full h-[60px] flex justify-between items-center px-6 md:px-20 bg-[#050f14] z-50">

      {/* LOGO */}
      <div className="font-semibold neon-text">
        Benedicta A
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-8">
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#skills" className="nav-link">Skills</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>

      {/* Mobile icon */}
      <div
        className="md:hidden flex items-center text-2xl cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <i className="fa-solid fa-bars text-[#00ffd5] icon"></i>
      </div>

      {/* Overlay */}
      <div
        className={`mobile-overlay ${open ? "show" : ""}`}
        onClick={handleClose}
      ></div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="close-icon" onClick={handleClose}>
          <i className="fa-solid fa-xmark icon"></i>
        </div>

        <ul>
          <li><a href="#home" className="nav-link" onClick={handleClose}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={handleClose}>About</a></li>
          <li><a href="#skills" className="nav-link" onClick={handleClose}>Skills</a></li>
          <li><a href="#projects" className="nav-link" onClick={handleClose}>Projects</a></li>
          <li><a href="#contact" className="nav-link" onClick={handleClose}>Contact</a></li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar