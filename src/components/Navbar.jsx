import { useState } from "react"
import "../styles/Navbar.css"
import { NavLink } from "react-router-dom"

function Navbar() {
  const [open, setOpen] = useState(false)

  const handleClose =()=>{
    setOpen(false)
  }
  return (
<nav className="fixed top-0 w-full h-[60px] flex justify-between items-center px-6 md:px-20 bg-[#050f14] z-50">
      
      <div className="font-semibold neon-text">
        Benedicta A
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-8"> 
        <li><NavLink  className="nav-link" to="/">Home</NavLink></li>
        <li ><NavLink className="nav-link" to="/about">About</NavLink></li>
        <li><NavLink  className="nav-link" to="/skills">Skills</NavLink></li>
        <li ><NavLink  className="nav-link" to="/projects">Projects</NavLink></li>
        <li ><NavLink  className="nav-link" to="/contact">Contact</NavLink></li>
      </ul>

      {/* Mobile icon */}
    <div className="md:hidden flex items-center text-2xl cursor-pointer" onClick={() => setOpen(true)}>

        <i className="fa-solid fa-bars text-[#00ffd5] icon"></i>
      </div>

    {/* Mobile menu */}
<div className={`mobile-overlay ${open ? "show" : ""}`} onClick={handleClose}></div>

<div className={`mobile-menu ${open ? "open" : ""}`}>
  <div className="close-icon" onClick={handleClose}>
    <i className="fa-solid fa-xmark icon"></i>
  </div>

  <ul>
    <li ><NavLink className="nav-link mobile-link" to="/" onClick={handleClose}>Home</NavLink></li>
    <li><NavLink  className="nav-link mobile-link" to="/about" onClick={handleClose}>About</NavLink></li>
    <li ><NavLink className="nav-link mobile-link" to="/skills" onClick={handleClose}>Skills</NavLink></li>
    <li ><NavLink className="nav-link mobile-link" to="/projects" onClick={handleClose}>Projects</NavLink></li>
    <li ><NavLink className="nav-link mobile-link" to="/contact" onClick={handleClose}>Contact</NavLink></li>
  </ul>
</div>


    </nav>
  )
}

export default Navbar
