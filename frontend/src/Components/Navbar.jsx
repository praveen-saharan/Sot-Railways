import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaSignInAlt, FaWpforms } from "react-icons/fa";
import React, { useState } from "react";
import Logo from "../assets/Picture1.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="fixed top-0 left-0 z-20 w-full bg-primary bg-opacity-50 backdrop-blur-md text-light">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} alt="Railway Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold">Railway</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <NavLink
              to="/"
              label="Home"
              icon={<FaHome />}
              currentPath={currentPath}
            />
            <NavLink
              to="/login"
              label="Login"
              icon={<FaSignInAlt />}
              currentPath={currentPath}
            />
            <NavLink
              to="/contact"
              label="Contact"
              icon={<FaWpforms />}
              currentPath={currentPath}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              aria-label="Toggle navigation menu"
              className="text-light"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              {toggleMenu ? (
                <FaTimes className="h-6 w-6 text-accent" />
              ) : (
                <FaBars className="h-6 w-6 text-light" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {toggleMenu && (
        <div className="md:hidden bg-secondary bg-opacity-90 text-light px-6 py-4 space-y-4">
          <NavLink
            to="/"
            label="Home"
            icon={<FaHome />}
            currentPath={currentPath}
            onClick={() => setToggleMenu(false)}
          />
          <NavLink
            to="/login"
            label="Login"
            icon={<FaSignInAlt />}
            currentPath={currentPath}
            onClick={() => setToggleMenu(false)}
          />
          <NavLink
            to="/contact"
            label="Contact"
            icon={<FaWpforms />}
            currentPath={currentPath}
            onClick={() => setToggleMenu(false)}
          />
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, label, icon, currentPath, onClick }) => (
  <Link
    to={to}
    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-base font-medium transition-all duration-300 ${
      currentPath === to
        ? "bg-accent text-light"
        : "text-light hover:bg-highlight hover:bg-opacity-80"
    }`}
    onClick={onClick}
  >
    {icon}
    {label}
  </Link>
);

export default Navbar;
