import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Homepage = () => {
  const [tilts, setTilts] = useState({
    1: { rotateX: 0, rotateY: 0 },
    2: { rotateX: 0, rotateY: 0 },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseMove = (event, cardIndex) => {
    const card = document.querySelector(`.card-wrapper-${cardIndex}`);
    const { left, top, width, height } = card.getBoundingClientRect();

    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;

    const tiltX = (mouseY / height - 0.5) * 30;
    const tiltY = (mouseX / width - 0.5) * -30;

    setTilts((prevTilts) => ({
      ...prevTilts,
      [cardIndex]: { rotateX: tiltX, rotateY: tiltY },
    }));
  };

  const handleMouseLeave = (cardIndex) => {
    setTilts((prevTilts) => ({
      ...prevTilts,
      [cardIndex]: { rotateX: 0, rotateY: 0 },
    }));
  };

  return (
    <div className="min-h-screen bg-[#100319] text-gray-300 flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 py-20">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h1 className="text-5xl font-extrabold text-gray-100 mb-6 animate-fade-in-down">
            Master <span className="text-purple-600">Data Structures</span>,
            Algorithms, &amp; More
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-12 animate-fade-in-up">
            Enhance your programming skills with real-world problems, hands-on
            learning, and in-depth knowledge.
          </p>
          <a
            href="#courses"
            className="relative text-lg inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-purple-500 rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-700 rounded-full group-hover:w-full group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Start Learning</span>
          </a>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section id="courses" className="bg-[#281236] py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-100 mb-12 animate-fade-in-down">
            Featured Courses
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div
              className={`card-wrapper card-wrapper-1`}
              onMouseMove={(event) => handleMouseMove(event, 1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              <div
                className="card bg-purple-600 shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  transform: `rotateX(${tilts[1].rotateX}deg) rotateY(${tilts[1].rotateY}deg)`,
                }}
              >
                <div className="card-content p-6">
                  <h3 className="text-2xl font-semibold text-white mb-4 cursor-pointer">
                    Data Structures &amp; Algorithms
                  </h3>
                  <p className="text-gray-200 mb-6 cursor-pointer">
                    Learn the fundamentals and advanced topics of DSA with
                    real-world examples and hands-on coding.
                  </p>
                  <Link
                    to="/data-structures"
                    className="text-purple-300 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`card-wrapper card-wrapper-2`}
              onMouseMove={(event) => handleMouseMove(event, 2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              <div
                className="card bg-purple-600 shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  transform: `rotateX(${tilts[2].rotateX}deg) rotateY(${tilts[2].rotateY}deg)`,
                }}
              >
                <div className="card-content p-6">
                  <h3 className="text-2xl font-semibold cursor-pointer text-white mb-4">
                    Logic Building &amp; Problem Solving
                  </h3>
                  <p className="text-gray-200 cursor-pointer mb-6">
                    Strengthen your logical thinking with structured exercises
                    to solve complex problems.
                  </p>
                  <Link to="/logic" className="text-purple-300 hover:underline">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Section */}
      <section className="bg-[#200f2a] py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-down">
            Unlock Your Path to Success with Interview Prep!
          </h2>
          <p className="text-lg mb-8 animate-fade-in-up">
            Access essential resources, books, and GitHub repos to help you ace
            your coding interviews. Whether you're just starting or aiming for
            top-tier companies, we’ve got you covered.
          </p>
          <Link
            to="/interview-resources"
            className="relative text-lg inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-purple-700 rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-800 rounded-full group-hover:w-full group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Explore Interview Resources</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
