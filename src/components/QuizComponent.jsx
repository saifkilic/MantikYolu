import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import externalQuestions from "./question";

const QuizComponent = () => {
  const location = useLocation();
  const { selectedSubjects, difficulty } = location.state || {};

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [timer, setTimer] = useState(0);
  const [quizOver, setQuizOver] = useState(false);
  const [showRules, setShowRules] = useState(true);

  const timerRef = useRef(null);

  const quizSettings = {
    Easy: { questions: 10, correctPoints: 2, wrongPoints: 0, timeLimit: 400 },
    Medium: {
      questions: 10,
      correctPoints: 3,
      wrongPoints: -1,
      timeLimit: 350,
    },
    Hard: { questions: 10, correctPoints: 4, wrongPoints: -2, timeLimit: 300 },
    Psychopath: {
      questions: 10,
      correctPoints: 6,
      wrongPoints: -5,
      timeLimit: 240,
    },
  };

  const {
    questions: questionLimit,
    correctPoints,
    wrongPoints,
    timeLimit,
  } = quizSettings[difficulty];

  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    const filteredQuestions = externalQuestions.filter(
      (q) =>
        selectedSubjects[q.subject] &&
        q.difficulty.toLowerCase() === difficulty.toLowerCase()
    );

    const shuffledQuestions = shuffleArray(filteredQuestions).slice(
      0,
      questionLimit
    );
    setQuizQuestions(shuffledQuestions);
  }, [selectedSubjects, difficulty]);

  useEffect(() => {
    if (!showRules && timer > 0) {
      timerRef.current = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [timer, showRules]);

  const startQuiz = () => {
    setShowRules(false);
    setTimer(timeLimit);
  };

  const handleAnswerSelect = (option) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: option,
    }));
  };

  const calculateScore = () => {
    let finalScore = 0;
    quizQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        finalScore += correctPoints;
      } else if (selectedAnswers[index] !== undefined) {
        finalScore += wrongPoints;
      }
    });
    setScore(finalScore);
  };

  const handleSubmit = () => {
    clearInterval(timerRef.current);
    calculateScore();
    setQuizOver(true);
  };

  const getScoreMessage = () => {
    const percentage = (score / (quizQuestions.length * correctPoints)) * 100;
    if (percentage >= 80) return "Excellent! You're a quiz master!";
    if (percentage >= 50) return "Good job! Keep practicing!";
    return "Needs improvement. Don’t give up!";
  };

  if (showRules) {
    return (
      <div className="relative">
        {/* Dark Overlay */}
        <div className="fixed inset-0 bg-[#100319] z-40"></div>

        {/* Rules Card */}
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#281236] text-gray-300 rounded-lg p-8 shadow-lg max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">
              Quiz Rules: {difficulty} Level
            </h2>
            <ul className="text-left mb-6">
              <li>1. You have a time limit of {timeLimit} seconds.</li>
              <li>2. Correct answers: +{correctPoints} points.</li>
              <li>3. Wrong answers: {wrongPoints} points.</li>
              <li>4. Total questions: {questionLimit}.</li>
            </ul>
            <button
              onClick={startQuiz}
              className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-all"
            >
              OK, Let's Start!
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quizQuestions.length === 0) {
    return <p>No questions available for the selected criteria.</p>;
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-[#100319] text-gray-300 flex flex-col">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Master the Quiz: {difficulty} Challenge
          </h1>

          {/* Timer */}
          <div className="text-3xl font-bold text-purple-400 mb-4">
            Time Remaining: {Math.floor(timer / 60)}:
            {String(timer % 60).padStart(2, "0")}
          </div>
        </div>
      </section>

      <section className="bg-[#281236] py-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-100 mb-8">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </h2>

          <div className="card bg-purple-600 shadow-lg rounded-lg p-6 mb-8">
            <h3 className="text-2xl text-white">{currentQuestion.question}</h3>
            <ul className="mt-4 grid grid-cols-2 gap-4">
              {currentQuestion.options.map((option, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleAnswerSelect(option)}
                    className={`py-2 px-4 w-full rounded-lg ${
                      selectedAnswers[currentQuestionIndex] === option
                        ? "bg-purple-700 text-white"
                        : "bg-gray-200 text-gray-800"
                    } hover:bg-purple-500 hover:text-white`}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between">
            <button
              disabled={currentQuestionIndex === 0}
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
              className="bg-gray-400 py-2 px-4 rounded-lg text-white"
            >
              Previous
            </button>
            <button
              onClick={
                currentQuestionIndex < quizQuestions.length - 1
                  ? () => setCurrentQuestionIndex(currentQuestionIndex + 1)
                  : handleSubmit
              }
              className="bg-green-500 py-2 px-4 rounded-lg text-white"
            >
              {currentQuestionIndex < quizQuestions.length - 1
                ? "Next"
                : "Submit"}
            </button>
          </div>
        </div>
      </section>

      {quizOver && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#281236] text-gray-200 rounded-lg p-6 shadow-2xl transform scale-95 transition-transform duration-300 ease-out">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Quiz Completed!
            </h2>
            <p className="text-lg mb-2">
              Your Score: <span className="text-purple-400">{score}</span>
            </p>
            <p className="text-sm text-gray-400 mb-4">{getScoreMessage()}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
