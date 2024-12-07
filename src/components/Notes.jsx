import React, { useState } from "react";
import { CgNotes } from "react-icons/cg";
import { BiSpreadsheet } from "react-icons/bi";
import { notesAndCheatsheetData } from "./notesandcheatsheetsData";

const NotesPage = () => {
  const [tilts, setTilts] = useState({});

  
  const handleMouseMove = (event, cardIndex) => {
    const card = document.querySelector(`.card-wrapper-${cardIndex}`);
    const { left, top, width, height } = card.getBoundingClientRect();

    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;

    const tiltX = (mouseY / height - 0.5) * 10; 
    const tiltY = (mouseX / width - 0.5) * -10; 

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

      <section className="flex-1 py-20">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h1 className="text-5xl font-extrabold text-gray-100 mb-6 animate-fade-in-down">
            Explore{" "}
            <span className="text-purple-600">Notes & Cheat Sheets</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-12 animate-fade-in-up">
            Access detailed notes and quick reference cheat sheets for various
            programming languages. Perfect for quick learning and reference.
          </p>
        </div>
      </section>


      <section className="bg-[#281236] py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {notesAndCheatsheetData.map((item, idx) => (
              <div
                key={item.id}
                className={`card-wrapper card-wrapper-${idx}`}
                onMouseMove={(event) => handleMouseMove(event, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
              >
                <div
                  className="card bg-purple-600 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-4"
                  style={{
                    transform: `rotateX(${tilts[idx]?.rotateX}deg) rotateY(${tilts[idx]?.rotateY}deg)`,
                  }}
                >
                  <div className="card-content p-6 flex flex-col justify-between h-full">
    
                    <div className="text-center mb-6">
                      {item.type === "notes" ? (
                        <CgNotes size={60} className="text-white mx-auto" />
                      ) : (
                        <BiSpreadsheet
                          size={60}
                          className="text-white mx-auto"
                        />
                      )}
                    </div>

          
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {item.title}
                    </h3>

                
                    <p className="text-gray-200 mb-6 flex-grow">
                      {item.description}
                    </p>

               
                    <div className="flex justify-between items-center">
                      <a
                        href={item.viewUrl}
                        target="_blank"
                        className="bg-purple-700 text-gray-200 py-2 px-6 rounded-lg hover:bg-purple-800 transition-all shadow-md hover:shadow-lg"
                      >
                        {item.type === "notes"
                          ? "View Notes"
                          : "View Cheat Sheet"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotesPage;
