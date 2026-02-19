import { useState } from "react"
import "../styles/Navbar.css"
import { NavLink } from "react-router-dom"

function Navbar() {
  const [open, setopen] = useState(false)

  const handleClose =()=>{
    setopen(false)
  }
  return (
    <nav className=" fixed top-0 w-full h-[50px] flex justify-between items-center px-20 bg-[#050f14]">
      
      <div className="font-semibold neon-text">
        Benedicta A
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-8"> 
        <li className="nav-link"><NavLink to="/">Home</NavLink></li>
        <li className="nav-link"><NavLink to="/about">About</NavLink></li>
        <li className="nav-link"><NavLink to="/skills">Skills</NavLink></li>
        <li className="nav-link"><NavLink to="/projects">Projects</NavLink></li>
        <li className="nav-link"><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      {/* Mobile icon */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setopen(true)}>
        <i className="fa-solid fa-bars text-[#00ffd5] icon"></i>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="close-icon" onClick={handleClose}>
          <i className="fa-solid fa-xmark icon"></i>
        </div>

        <ul className="flex flex-col gap-6">
          <li className="nav-link"><NavLink to="/" onClick={() => setopen(false)}>Home</NavLink></li>
          <li className="nav-link"><NavLink to="/about" onClick={() => setopen(false)}>About</NavLink></li>
          <li className="nav-link"><NavLink to="/skills" onClick={() => setopen(false)}>Skills</NavLink></li>
          <li className="nav-link"><NavLink to="/projects" onClick={() => setopen(false)}>Projects</NavLink></li>
          <li className="nav-link"><NavLink to="/contact" onClick={() => setopen(false)}>Contact</NavLink></li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar
