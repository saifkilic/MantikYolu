import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full bg-[#100319] shadow-lg relative">
      <div className="container mx-auto px-3 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-gray-100">
          <span className="text-purple-900">Mantık</span>Yolu
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-gray-300">
            <Link
              to="/"
              className="hover:text-purple-600 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/quizpage"
              className="hover:text-purple-600 transition-colors duration-300"
            >
              Quiz
            </Link>
            <Link
              to="/notes"
              className="hover:text-purple-600 transition-colors duration-300"
            >
              Notes
            </Link>
            <Link
              to="contact"
              className="hover:text-purple-600 transition-colors duration-300"
            >
              Contact
            </Link>
          </ul>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-100 focus:outline-none z-50"
          aria-label="Toggle navigation"
        >
          <svg
            className={`w-6 h-6 transform ${
              menuOpen ? "rotate-90" : ""
            } transition-transform duration-300`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 z-40" : "opacity-0 -z-10"
        }`}
        onClick={toggleMenu}
      ></div>

      <nav
        className={`fixed top-0 right-0 w-2/3 max-w-sm bg-[#100319] h-full shadow-lg transition-transform duration-300 transform ${
          menuOpen ? "translate-x-0 z-50" : "translate-x-full"
        } flex flex-col justify-center items-center`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-gray-300 text-xl"
        >
          &times;
        </button>

        <ul className="flex flex-col space-y-6 text-gray-300 text-lg">
          <li>
            <Link
              to="/"
              onClick={toggleMenu}
              className="hover:text-purple-600 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/quizpage"
              onClick={toggleMenu}
              className="hover:text-purple-600 transition-colors duration-300"
            >
              Quiz
            </Link>
          </li>
          <li>
            <Link
              to="/notes"
              onClick={toggleMenu}
              className="hover:text-purple-600 transition-colors duration-300"
            >
              Notes
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              onClick={toggleMenu}
              className="hover:text-purple-600 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
