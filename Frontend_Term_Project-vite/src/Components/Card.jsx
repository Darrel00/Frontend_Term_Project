import { useState } from 'react';
import './Card.css';

const Card = ({ word, showEdit, showDelete, isCorrect, showView, showFlip, onEdit, onDelete, onFlip, setPage, type = "default" }) => {
  const showButtons = type !== "display";
  return (
    <div className={`card ${isCorrect && type === "display" ? "card--correct" : ""}`}>
      <div className="cardButtons">
        {showButtons && showEdit && <button className="editButton" onClick={onEdit}>Edit</button>}
        {showButtons && showDelete && <button className="deleteButton" onClick={onDelete}>Delete</button>}
      </div>
      <div className="cardContent">
        <h3 className="word">
          <span className="card-link" onClick={setPage}>
            {word}
          </span>
        </h3>
      </div>
      {showView && <button className="viewButton" onClick={setPage}>View</button>}
      {showFlip && <button className="flipButton" onClick={onFlip}>Flip</button>}
    </div>
  );
};

export default Card;