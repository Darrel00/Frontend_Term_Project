import './Card.css';

const Card = ({ word, showEdit, showDelete, onEdit, onDelete, setPage }) => {
  return (
    <div className="card">
      <div className="cardButtons">
        {showEdit && <button className="editButton" onClick={() => setShowDropdown(true)}>Edit</button>}
        {showDelete && <button className="deleteButton" onClick={onDelete}>Delete</button>}
      </div>
      {showDropdown && (
        <div className="editDropdown">
          <p>Should this card be the answer?</p>
          <button onClick={() => { onMarkAsAnswer(true); setShowDropdown(false); }}>Yes</button>
          <button onClick={() => { onMarkAsAnswer(false); setShowDropdown(false); }}>No</button>
        </div>
      )}
      <div className="cardContent">
        <h3 className="word">
          <span className="card-link" onClick={() => setPage('deck')}>
            {word}
            {isCorrect && <span className="correct-indicator"> (Correct)</span>}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Card;
