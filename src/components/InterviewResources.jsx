import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const InterviewResources = () => {
  const navigate = useNavigate();

  const [tilts, setTilts] = useState({
    ai: { rotateX: 0, rotateY: 0 },
    web: { rotateX: 0, rotateY: 0 },
    software: { rotateX: 0, rotateY: 0 },
  });

  const categories = [
    {
      id: "ai",
      title: "AI Field",
      description: "Resources for AI interviews.",
    },
    {
      id: "web",
      title: "Web Development",
      description: "Resources for web development interviews.",
    },
    {
      id: "software",
      title: "Software Engineering",
      description: "Resources for software engineering interviews.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseMove = (event, category) => {
    const card = document.querySelector(`.card-wrapper-${category}`);
    const { left, top, width, height } = card.getBoundingClientRect();

    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;

    const tiltX = (mouseY / height - 0.5) * 30;
    const tiltY = (mouseX / width - 0.5) * -30;

    setTilts((prev) => ({
      ...prev,
      [category]: { rotateX: tiltX, rotateY: tiltY },
    }));
  };

  const handleMouseLeave = (category) => {
    setTilts((prev) => ({
      ...prev,
      [category]: { rotateX: 0, rotateY: 0 },
    }));
  };

  return (
    <div className="min-h-screen bg-[#100319] text-gray-300 flex flex-col">
      <section className="flex-1 py-20">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h1 className="text-5xl font-extrabold text-gray-100 mb-6">
            Explore <span className="text-purple-600">Interview Resources</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-12">
            Prepare for AI, Web Development, and Software Engineering interviews
            with curated resources.
          </p>
        </div>
      </section>

      <section className="bg-[#281236] py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`card-wrapper-${category.id} card-wrapper`}
              onMouseMove={(event) => handleMouseMove(event, category.id)}
              onMouseLeave={() => handleMouseLeave(category.id)}
              onClick={() => navigate(`/resources/${category.id}`)}
              style={{
                transform: `rotateX(${tilts[category.id].rotateX}deg) rotateY(${
                  tilts[category.id].rotateY
                }deg)`,
              }}
            >
              <div className="card bg-purple-600 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="card-content p-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{category.description}</p>
                  <button className="text-purple-300 hover:underline">
                    Explore Resources
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InterviewResources;
