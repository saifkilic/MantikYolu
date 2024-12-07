import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogicBuilding from "./components/LogicBuilding";
import DataStructures from "./components/DataStructures";
import DataStructureDetail from "./components/DataStructuresDetail";
import AlgorithmDetail from "./components/AlgorithmDetail";
import QuizPage from "./components/QuizPage";
import ContactPage from "./components/ContactPage";
import QuizComponent from "./components/QuizComponent";
import InterviewResources from "./components/InterviewResources";
import ResourceDetail from "./components/ResourceDetail";
import NotesPage from "./components/Notes";

function App() {
  const [selectedSubjects, setSelectedSubjects] = useState({});
  const [difficulty, setDifficulty] = useState("Easy");

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logic" element={<LogicBuilding />} />
        <Route path="/data-structures" element={<DataStructures />} />
        <Route path="/data-structure/:id" element={<DataStructureDetail />} />
        <Route path="/algorithm/:id" element={<AlgorithmDetail />} />
        <Route
          path="/quizpage"
          element={
            <QuizPage
              setSelectedSubjects={setSelectedSubjects}
              setDifficulty={setDifficulty}
            />
          }
        />
        <Route
          path="/quiz"
          element={
            <QuizComponent
              selectedSubjects={selectedSubjects}
              difficulty={difficulty}
            />
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/interview-resources" element={<InterviewResources />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/resources/:category" element={<ResourceDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
