//NOTE REMOVE THE ANCHOR TAG ONCE FUNCTIONALITY IS ADDED
import './Card.css';

const Card = ({ word, showEdit, showDelete, onEdit, onDelete }) => {
    return (
        <div className="card">
        <div className="card-buttons">
            {showEdit && <button className="edit-btn" onClick={onEdit}>Edit</button>}
            {showDelete && <button className="delete-btn" onClick={onDelete}>Delete</button>}
        </div>
        <div className="card-content">
            <h3><a href="/src/FlashcardsDeck.jsx">{word}</a></h3>
        </div>
        </div>
    );
};

export default Card;