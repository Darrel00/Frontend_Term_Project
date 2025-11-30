import './Card.css';

const Card = ({ word, showEdit, showDelete, showView, onEdit, onDelete, onFlip, setPage }) => {
  return (
    <div className="card">
      <div className="cardButtons">
        {showEdit && <button className="editButton" onClick={onEdit}>Edit</button>}
        {showDelete && <button className="deleteButton" onClick={onDelete}>Delete</button>}
      </div>
      <div className="cardContent">
        <h3 className="word">{word}</h3>
      </div>
      {showView && <button className="viewButton" onClick={setPage}>View</button>}
      <button className="flipButton" onClick={onFlip}>Flip</button>
    </div>
  );
};

export default Card;