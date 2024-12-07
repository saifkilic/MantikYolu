import { FaYoutube, FaBook } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import problemsData from "./problemsData";
import booksData from "./booksData";
import youtubeData from "./youtubeData";
import "../index.css";

const LogicBuilding = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tilts, setTilts] = useState({});
  const problemsPerPage = 12;

  // Calculate indices for pagination
  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = problemsData.slice(
    indexOfFirstProblem,
    indexOfLastProblem
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalPages = Math.ceil(problemsData.length / problemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const element = document.getElementById("problems-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleMouseMove = (event, index) => {
    const card = document.querySelector(`.card-wrapper-${index}`);
    const { left, top, width, height } = card.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;
    const tiltX = (mouseY / height - 0.5) * 15;
    const tiltY = (mouseX / width - 0.5) * -15;

    setTilts((prevTilts) => ({
      ...prevTilts,
      [index]: { rotateX: tiltX, rotateY: tiltY },
    }));
  };

  const handleMouseLeave = (index) => {
    setTilts((prevTilts) => ({
      ...prevTilts,
      [index]: { rotateX: 0, rotateY: 0 },
    }));
  };

  // Render logic for problems
  const problemsList = currentProblems.map((problem, index) => (
    <div
      key={problem.id}
      className={`card card-wrapper card-wrapper-${
        index + 1
      } bg-purple-800 shadow-lg rounded-lg p-6`}
      onMouseMove={(e) => handleMouseMove(e, index + 1)}
      onMouseLeave={() => handleMouseLeave(index + 1)}
      style={{
        transform: `rotateX(${tilts[index + 1]?.rotateX || 0}deg) rotateY(${
          tilts[index + 1]?.rotateY || 0
        }deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="card-content">
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">
          {problem.name}
        </h3>
        <p className="text-white mb-6">{problem.description}</p>
        <a
          href={problem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline mt-4 inline-block"
        >
          View Problem
        </a>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-[#100319] text-gray-300 flex flex-col">
      {/* Welcome Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-gray-100 mb-6">
            Welcome to Logic Building
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Dive into resources, tips, and problems to sharpen your logical
            thinking and programming skills!
          </p>

          <button
            onClick={() => scrollToSection("problems-section")}
            className="relative text-lg inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-purple-500 rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-700 rounded-full group-hover:w-full group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Start Solving Problems</span>
          </button>
        </div>
      </section>

      {/* Books Section */}
      <section id="books-section" className="bg-[#1d102c] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-100 mb-12 text-center">
            Recommended Books
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {booksData.map((book, index) => (
              <div
                key={index}
                className="card bg-purple-600 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-4"
              >
                <div className="card-content p-6 flex flex-col justify-between h-full">
                  <div className="text-center mb-6">
                    <FaBook size={60} className="text-white mx-auto" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {book.title}
                  </h3>
                  <p className="text-gray-200 mb-6 flex-grow">
                    {book.description}
                  </p>
                  <div className="flex justify-center">
                    <a
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-700 text-gray-200 py-2 px-6 rounded-lg hover:bg-purple-800 transition-all shadow-md hover:shadow-lg"
                    >
                      View Book
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos-section" className="bg-[#281236] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-100 mb-12 text-center">
            Learn from YouTube
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {youtubeData.map((video, index) => (
              <div
                key={index}
                className="card bg-purple-600 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-4"
              >
                <div className="text-center mb-6">
                  <FaYoutube size={60} className="text-white mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-400">{video.description}</p>
                <div className="flex justify-center">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Watch Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tips-section" className="bg-[#1a0c22] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-100 mb-12 text-center">
            Tips & Tricks for Logic Building
          </h2>
          <ul className="list-disc text-gray-300 pl-6 space-y-4 max-w-3xl mx-auto">
            <li>Break problems into smaller, manageable parts.</li>
            <li>Practice pseudocoding before writing actual code.</li>
            <li>Focus on edge cases and test your solutions thoroughly.</li>
            <li>Visualize problems with flowcharts or diagrams.</li>
            <li>Use online coding platforms like LeetCode or HackerRank.</li>
          </ul>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems-section" className="bg-[#281236] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-100 mb-12 text-center">
            Logic Building Problems
          </h2>
          <div className="grid md:grid-cols-3 gap-8">{problemsList}</div>
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-purple-700 text-white"
                    : "bg-purple-500 text-gray-300 hover:bg-purple-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogicBuilding;
