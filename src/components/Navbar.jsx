import React from 'react'
import "../App.css"
import { FaRegMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs"; 

const Navbar = ({toggleTheme, dark}) => {
  return (
    <div className="navbar-container">
    <div>
        <h2>Search Engine</h2>
    </div>
 <button
  className={`toggleBtn ${dark ? "dark" : "light"}`}
  onClick={toggleTheme}
>
  {dark ? <FaRegMoon /> : <BsFillSunFill />}
</button>
    </div>
  )
}

export default Navbar

