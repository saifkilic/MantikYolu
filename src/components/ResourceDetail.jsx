import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import resourcesData from "./resourcesData";
import "../index.css";
import { FaGithub } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";

const ResourcePage = () => {
  const { category } = useParams();
  const [tilts, setTilts] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  const resources = resourcesData[category];

  if (!resources) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#100319] to-[#2a0736] text-gray-200 py-16 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-100 mb-6">
            Resources Not Found
          </h1>
          <p className="text-lg text-gray-400">
            We couldn't find any resources for the category:{" "}
            <span className="text-purple-400 font-semibold">{category}</span>.
          </p>
        </div>
      </div>
    );
  }

  const handleMouseMove = (event, cardIndex) => {
    const card = document.querySelector(`.card-wrapper-${cardIndex}`);
    const { left, top, width, height } = card.getBoundingClientRect();

    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;

    const tiltX = (mouseY / height - 0.5) * 20;
    const tiltY = (mouseX / width - 0.5) * -20;

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
    <div className="min-h-screen bg-gradient-to-b from-[#100319] to-[#2a0736] text-gray-200 py-16 px-6">
      <h1 className="text-5xl font-extrabold text-gray-100 mb-8 text-center">
        {category.charAt(0).toUpperCase() + category.slice(1)} Resources
      </h1>
      <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
        Explore curated resources to help you ace your{" "}
        <span className="text-purple-400 font-semibold">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </span>{" "}
        interviews and advance your career.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {resources.map((item, idx) => (
          <div
            key={idx}
            className={`card-wrapper card-wrapper-${idx + 1}`}
            onMouseMove={(event) => handleMouseMove(event, idx + 1)}
            onMouseLeave={() => handleMouseLeave(idx + 1)}
          >
            <div
              className="card bg-purple-600 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-4"
              style={{
                transform: `rotateX(${tilts[idx + 1]?.rotateX}deg) rotateY(${
                  tilts[idx + 1]?.rotateY
                }deg)`,
              }}
            >
              <div className="card-content p-6 flex flex-col justify-between h-full">
                <div className="text-center mb-6">
                  {item.type === "book" ? (
                    <FaBook size={60} className="text-white mx-auto" />
                  ) : item.type === "repo" ? (
                    <FaGithub size={60} className="text-white mx-auto" />
                  ) : null}
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-200 mb-6 flex-grow">
                  {item.description}
                </p>

                <div className="flex justify-between items-center">
                  {item.viewUrl && (
                    <a
                      href={item.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-700 text-gray-200 py-2 px-6 rounded-lg hover:bg-purple-800 transition-all shadow-md hover:shadow-lg"
                    >
                      {item.type === "repo" ? "View Repository" : "View Online"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcePage;
