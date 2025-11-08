import { RiMenu2Fill } from "react-icons/ri";
import { NavLink } from "react-router";
import './navbar.css'

const Navbar = () => {

    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/addhabit'>Add habit</NavLink></li>
    <li><NavLink to='/myhabits'>My Habits</NavLink></li>
    <li><NavLink to='/publichabits'>Browse Public Habits</NavLink></li>
    </>

  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-4xl md:hidden">
              <RiMenu2Fill />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >{links}</ul>
          </div>
          <img className="w-20 h-15" src="/Logo.jpg" alt="" />
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-2xl bg-linear-to-b from-green-400 to-green-800 text-white">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
