import './Card.css';

const QuizCard = ({ word, showEdit, showDelete, onEdit, onDelete, onClick, setPage }) => {
  return (
    <div className="card">
      <div className="cardButtons">
        {showEdit && <button className="editButton" onClick={onEdit}>Edit</button>}
        {showDelete && <button className="deleteButton" onClick={onDelete}>Delete</button>}
      </div>
      <div className="cardContent">
        <h3 className="word">
          <span className="card-link" onClick={onClick}>
            {word}
          </span>
        </h3>
      </div>

    </div>
  );
};

export default QuizCard;