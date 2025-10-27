import './Card.css';

const Card = ({ word, showEdit, showDelete, onEdit, onDelete, setPage }) => {
  return (
    <div className="card">
      <div className="cardButtons">
        {showEdit && <button className="editButton" onClick={onEdit}>Edit</button>}
        {showDelete && <button className="deleteButton" onClick={onclose}>Delete</button>}
      </div>
      <div className="cardContent">
        <h3 className="word">
          <span className="card-link" onClick={() => setPage('deck')}>
            {word}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Card;