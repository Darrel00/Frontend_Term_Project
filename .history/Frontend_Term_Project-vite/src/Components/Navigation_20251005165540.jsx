import './Navigation.css'
import React from "react";

function Navigation({ setCurrentPage }) {
  return (
    <nav className="navigation">
      <div className="navigationLeft">
        <h1>ScholarDeck</h1>
      </div>
      <div className="navigationRight">
        <button onClick={() => setCurrentPage('flashcards')}>Flashcards</button>
        <button onClick={() => setCurrentPage('quiz')}>Quiz</button>
        <button onClick={() => setCurrentPage('home')}>Sign Out</button>
      </div>
    </nav>
  );
}

export default Navigation;