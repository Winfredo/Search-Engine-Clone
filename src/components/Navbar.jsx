import React,{useContext} from "react";
import "../App.css";
import { FaRegMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { NavLink , Link} from "react-router-dom";
import { ResultsContext } from "../contexts/ResultsContextProvider"


const Navbar = ({ toggleTheme, dark }) => {
  const {searchTerm,results} = useContext(ResultsContext);
  return (
    <div className="navbar-container">
      <div className="nav-main">
        <div>
          <h2 className="logo">
              <FcGoogle />
          </h2>
        </div>
        <button
          className={`toggleBtn ${dark ? "dark" : "light"}`}
          onClick={toggleTheme}
        >
          {dark ? <FaRegMoon /> : <BsFillSunFill />}
        </button>
       
      </div>



    {searchTerm && results.length > 0 &&(

   
      <div className={`links ${dark ? "text-dark" : "text-white"}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${dark ? "text-dark" : "text-white"} ${
              isActive ? "active-link" : ""
            }`
          }
        >
          Search
        </NavLink>
        <NavLink
          to="/images"
          end
          className={({ isActive }) =>
            `${dark ? "text-dark" : "text-white"} ${
              isActive ? "active-link" : ""
            }`
          }
        >
          Images
        </NavLink>
        <NavLink
          to="/videos"
          end
          className={({ isActive }) =>
            `${dark ? "text-dark" : "text-white"} ${
              isActive ? "active-link" : ""
            }`
          }
        >
          Videos
        </NavLink>
      </div>
 )}









    </div>
  );
};

export default Navbar;
