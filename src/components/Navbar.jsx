import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import "./navbar.css";
import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, loading, logoutUser, setUser } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addhabit">Add habit</NavLink>
      </li>
      <li>
        <NavLink to="/myhabits">My Habits</NavLink>
      </li>
      <li>
        <NavLink to="/publichabits">Browse Public Habits</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logoutUser().then(() => {
      setUser(null);
    });
  };

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="max-w-9/10 mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-4xl md:hidden"
            >
              <RiMenu2Fill />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <img className="w-20 h-15" src="/Logo.jpg" alt="" />
          </Link>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-xl">{links}</ul>
        </div>

        <div className="navbar-end">
          {loading ? (
            <span className="loading loading-spinner text-primary"></span>
          ) : user ? (
            <div className="flex items-center gap-2">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="m-1">
                  <img
                    className="rounded-full w-10 cursor-pointer"
                    src={user.photoURL}
                    alt="User"
                  />
                </div>
                <div tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm space-y-3"
                >
                  <h3 className="text-xl">{user.displayName}</h3>
                  <p>{user.email}</p>
                  <button
                    onClick={handleLogOut}
                    className="btn text-2xl bg-linear-to-b from-green-400 to-green-800 text-white"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="navbar-end">
              <Link
                to="/login"
                className="btn text-2xl bg-linear-to-b from-green-400 to-green-800 text-white"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
