import React, { useState } from "react";
import dataStructures from "./ds";
import algorithms from "./algorithms";
import { Link } from "react-router-dom";

const DataStructures = () => {
  const [tilts, setTilts] = useState({});

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
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-gray-100 mb-6">
            Welcome to Data Structures
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Explore various data structures and algorithms to enhance your
            understanding and skills in computer science!
          </p>
        </div>
      </section>

      <section className="bg-[#281236] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-100 mb-6">
            Data Structures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataStructures.map((structure, index) => (
              <Link key={structure.id} to={`/data-structure/${structure.id}`}>
                <div
                  className={`card-wrapper card-wrapper-${index + 1}`}
                  onMouseMove={(event) => handleMouseMove(event, index + 1)}
                  onMouseLeave={() => handleMouseaLeave(index + 1)}
                >
                  <div
                    className="card bg-gray-700 p-6 rounded-lg shadow-lg transition-transform duration-300"
                    style={{
                      transform: `rotateX(${
                        tilts[index + 1]?.rotateX || 0
                      }deg) rotateY(${tilts[index + 1]?.rotateY || 0}deg)`,
                    }}
                  >
                    <h3 className="text-2xl font-bold text-gray-100 mb-2">
                      {structure.name}
                    </h3>
                    <p className="text-gray-400">{structure.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#100319] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-100 mb-6">
            Algorithms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {algorithms.map((algorithm, index) => (
              <Link key={algorithm.id} to={`/algorithm/${algorithm.id}`}>
                <div
                  className={`card-wrapper card-wrapper-algorithm-${index + 1}`}
                  onMouseMove={(event) =>
                    handleMouseMove(event, `algorithm-${index + 1}`)
                  }
                  onMouseLeave={() =>
                    handleMouseLeave(`algorithm-${index + 1}`)
                  }
                >
                  <div
                    className="card bg-gray-700 p-6 rounded-lg shadow-lg transition-transform duration-300"
                    style={{
                      transform: `rotateX(${
                        tilts[`algorithm-${index + 1}`]?.rotateX || 0
                      }deg) rotateY(${
                        tilts[`algorithm-${index + 1}`]?.rotateY || 0
                      }deg)`,
                    }}
                  >
                    <h3 className="text-2xl font-bold text-gray-100 mb-2">
                      {algorithm.name}
                    </h3>
                    <p className="text-gray-400">
                      {algorithm.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataStructures;
