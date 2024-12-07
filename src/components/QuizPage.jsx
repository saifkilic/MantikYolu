import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Alert = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-[#281236] text-gray-200 rounded-lg p-6 shadow-2xl transform scale-95 transition-transform duration-300 ease-out">
      <p className="text-lg mb-4">{message}</p>
      <button
        onClick={onClose}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition duration-200"
      >
        OK
      </button>
    </div>
  </div>
);

const QuizPage = () => {
  const [tilts, setTilts] = useState({});
  const [selectedSubjects, setSelectedSubjects] = useState({
    "Data Structures": false,
    Algorithms: false,
    "Logic Building": false,
  });
  const [difficulty, setDifficulty] = useState("");
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const Alert = ({ message, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#281236] text-gray-200 rounded-lg p-6 shadow-2xl transform scale-90 opacity-0 animate-fade-in transition-transform duration-300">
        <p className="text-lg mb-6 text-center">{message}</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-lg transition duration-200"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );

  const handleMouseLeave = (cardIndex) => {
    setTilts((prevTilts) => ({
      ...prevTilts,
      [cardIndex]: { rotateX: 0, rotateY: 0 },
    }));
  };

  const handleSubjectChange = (event) => {
    const subject = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedSubjects({
        "Data Structures": false,
        Algorithms: false,
        "Logic Building": false,
        [subject]: true,
      });
    } else {
      setSelectedSubjects({
        ...selectedSubjects,
        [subject]: false,
      });
    }
  };

  const handleGenerateQuiz = () => {
    const selectedSubject = Object.keys(selectedSubjects).find(
      (subject) => selectedSubjects[subject]
    );

    if (!selectedSubject && !difficulty) {
      setAlert("Please select both a subject and a difficulty level.");
      return;
    }

    if (!selectedSubject) {
      setAlert("Please select a subject.");
      return;
    }

    if (!difficulty) {
      setAlert("Please select a difficulty level.");
      return;
    }

    navigate("/quiz", {
      state: { selectedSubjects, difficulty },
    });
  };

  return (
    <div className="min-h-screen bg-[#100319] text-gray-300 flex flex-col">
      {alert && <Alert message={alert} onClose={() => setAlert(null)} />}

      {/* Hero Section */}
      <section className="flex-1 py-20">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h1 className="text-5xl font-extrabold text-gray-100 mb-6 animate-fade-in-down">
            Are You Ready to <span className="text-purple-600">Conquer</span>{" "}
            the Quiz?
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-12 animate-fade-in-up">
            Test your knowledge with personalized quizzes tailored to your
            strengths and challenges. Sharpen your skills, ace the questions,
            and emerge victorious!
          </p>
        </div>
      </section>

      {/* Quiz Form Section */}
      <section className="bg-[#281236] py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-100 mb-12 animate-fade-in-down">
            Customize Your Quiz
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Subject Options Card */}
            <div
              className={`card-wrapper card-wrapper-1`}
              onMouseMove={(event) => handleMouseMove(event, 1)}
              onMouseLeave={() => handleMouseLeave(1)}
              style={{
                transform: `rotateX(${tilts[1]?.rotateX || 0}deg) rotateY(${
                  tilts[1]?.rotateY || 0
                }deg)`,
                transition: "transform 0.2s ease-out",
              }}
            >
              <div className="card bg-purple-600 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
                <div className="card-content p-6">
                  <h3 className="text-2xl font-semibold cursor-pointer text-white mb-4">
                    Select Subjects
                  </h3>
                  <div className="text-left space-y-4">
                    {Object.keys(selectedSubjects).map((subject) => (
                      <div
                        key={subject}
                        className={`flex items-center space-x-4 transition-all`}
                      >
                        <input
                          type="checkbox"
                          id={subject}
                          name={subject}
                          checked={selectedSubjects[subject]}
                          onChange={handleSubjectChange}
                          className={`hidden peer`}
                        />
                        <label
                          htmlFor={subject}
                          className={`w-6 h-6 flex items-center justify-center rounded-md border-2 ${
                            selectedSubjects[subject]
                              ? "bg-purple-500 border-purple-700 text-white"
                              : "bg-transparent border-gray-300"
                          } peer-checked:bg-purple-500 peer-checked:text-white peer-checked:border-purple-700 transition-all duration-200`}
                        >
                          ✓
                        </label>
                        <span className="text-gray-200 text-lg cursor-pointer">
                          {subject}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Difficulty Options Card */}
            <div
              className={`card-wrapper card-wrapper-2`}
              onMouseMove={(event) => handleMouseMove(event, 2)}
              onMouseLeave={() => handleMouseLeave(2)}
              style={{
                transform: `rotateX(${tilts[2]?.rotateX || 0}deg) rotateY(${
                  tilts[2]?.rotateY || 0
                }deg)`,
                transition: "transform 0.2s ease-out",
              }}
            >
              <div className="card bg-purple-600 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
                <div className="card-content p-6">
                  <h3 className="text-2xl font-semibold cursor-pointer text-white mb-4">
                    Select Difficulty
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["Easy", "Medium", "Hard", "Psychopath"].map((level) => (
                      <button
                        key={level}
                        onClick={() => setDifficulty(level)}
                        className={`relative py-3 px-4 rounded-lg overflow-hidden ${
                          difficulty === level
                            ? level === "Psychopath"
                              ? "bg-red-600 text-black"
                              : "bg-gradient-to-r from-purple-600 to-purple-900 text-white"
                            : "bg-purple-500 text-gray-200"
                        } transition-transform duration-300 hover:scale-105 ${
                          level === "Psychopath"
                            ? "hover:bg-red-600 hover:text-black"
                            : "hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-900 hover:text-white"
                        }`}
                      >
                        <span
                          className={`absolute inset-0 rounded-lg ${
                            difficulty === level
                              ? "shadow-md"
                              : "hover:shadow-lg"
                          } transition-all`}
                        ></span>
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Generate Quiz Button */}
          <div className="mt-12">
            <button
              onClick={handleGenerateQuiz}
              className="relative text-lg inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-purple-500 rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-700 rounded-full group-hover:w-full group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative"> Generate Quiz</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuizPage;
