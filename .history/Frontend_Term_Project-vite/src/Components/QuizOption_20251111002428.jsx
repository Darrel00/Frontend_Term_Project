import './Card.css';

const QuizOption = ({ word, showEdit, showDelete, onEdit, onDelete, setPage, type, onSelect, isCorrect }) => {
  return (
    <div className={`card ${type === 'quiz' ? 'quiz-option' : ''}`} onClick={type === 'quiz' ? () => onSelect(isCorrect) : undefined}>
      <div className="cardButtons">
        {showEdit && <button className="editButton" onClick={onEdit}>Edit</button>}
        {showDelete && <button className="deleteButton" onClick={onDelete}>Delete</button>}
      </div>
      <div className="cardContent">
        <h3 className="word">
          <span className={`card-link ${type === 'quiz' ? 'clickable' : ''}`}>
            {word}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default QuizOption;