import { useState } from 'react';
import './Card.css';

<<<<<<< HEAD
const Card = ({ word, showEdit, showDelete, isCorrect, onEdit, onDelete, setPage, type = "default" }) => {
  const showButtons = type !== "display";
=======
const Card = ({ word, showEdit, showDelete, showView, onEdit, onDelete, setPage }) => {
>>>>>>> flashcard-branch
  return (
    <div className={`card ${isCorrect && type === "display" ? "card--correct" : ""}`}>
      <div className="cardButtons">
        {showButtons && showEdit && <button className="editButton" onClick={onEdit}>Edit</button>}
        {showButtons && showDelete && <button className="deleteButton" onClick={onDelete}>Delete</button>}
      </div>
      <div className="cardContent">
        <h3 className="word">
          <span className="card-link" onClick={() => setPage('')}>
            {word}
          </span>
        </h3>
        <h3 className="word">{word}</h3>
      </div>
      {showView && <button className="viewButton" onClick={setPage}>View</button>}
    </div>
  );
};

export default Card;
