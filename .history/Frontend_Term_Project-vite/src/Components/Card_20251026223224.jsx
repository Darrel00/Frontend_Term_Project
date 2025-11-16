import { useState } from 'react';
import './Card.css';

const Card = ({ word, showEdit, showDelete, isCorrect, onEdit, onDelete, onMarkAsAnswer, setPage, type = "default" }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const showButtons = type !== "option";
  return (
    <div className={`card ${isCorrect && type === "option" ? "card--correct" : ""}`}>
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
      </div>
    </div>
  );
};

export default Card;
