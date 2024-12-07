import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import algorithms from "./algorithms";
import "../index.css";

const AlgorithmDetail = () => {
  const { id } = useParams();
  const algorithm = algorithms.find((algo) => algo.id === parseInt(id));
  const [selectedLanguage, setSelectedLanguage] = useState("cpp");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!algorithm) {
    return <div>Algorithm not found.</div>;
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#100319] to-[#2a0736] text-gray-200 py-20 px-6">
      <h1 className="text-5xl font-extrabold text-gray-100 mb-6">
        {algorithm.name}
      </h1>
      <p className="text-xl text-gray-400 max-w-2xl mb-12">
        {algorithm.longDescription}
      </p>

      <h2 className="text-3xl font-semibold text-gray-100 mb-4">
        Code Example:
      </h2>
      <div className="bg-[#431563] p-6 rounded-lg shadow-md mb-12">
        <div className="relative mb-4">
          <button
            onClick={toggleDropdown}
            className="bg-[#230b34] text-gray-200 p-3 rounded-lg w-full sm:w-auto flex justify-between items-center"
          >
            {selectedLanguage.charAt(0).toUpperCase() +
              selectedLanguage.slice(1)}
            <span className="ml-2">{isDropdownOpen ? "▲" : "▼"}</span>
          </button>
          {isDropdownOpen && (
            <ul
              className="absolute z-10 bg-[#230b34] text-gray-200 mt-2 rounded-lg shadow-lg w-full 
                 transition-all duration-300 ease-in-out transform scale-95 opacity-0"
              style={{
                transform: isDropdownOpen ? "scale(1)" : "scale(0.95)",
                opacity: isDropdownOpen ? 1 : 0,
              }}
            >
              {Object.keys(algorithm.codeExamples).map((lang) => (
                <li
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className="p-3 hover:bg-purple-900 cursor-pointer"
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </li>
              ))}
            </ul>
          )}
        </div>

        <pre className="bg-[#431563] p-4 rounded-lg overflow-x-auto shadow-md mb-4 mt-4 sm:mt-0">
          <code className="text-green-100 whitespace-pre-wrap">
            {algorithm.codeExamples[selectedLanguage]}
          </code>
        </pre>
      </div>

      <h2 className="text-3xl font-semibold text-gray-100 mb-4">
        Watch Explanation:
      </h2>
      <div className="video-player-wrapper mb-12">
        <div className="relative w-full sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
          <ReactPlayer
            url={algorithm.videoUrl}
            controls
            width="100%"
            height="100%"
            className="react-player"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-gray-100 mb-4">Resources:</h2>
      <ul className="list-disc pl-5">
        {algorithm.resources.map((resource, index) => (
          <li key={index} className="text-gray-300 mb-2">
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlgorithmDetail;
