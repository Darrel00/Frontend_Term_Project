import { useState, useEffect } from 'react';
import './OptionEditModal.css'; // Assuming you have styles for the modal

const OptionEditModal = ({ isOpen, onClose, initialText, initialCorrect, onSave }) => {
  const [text, setText] = useState(initialText);
  const [isCorrect, setIsCorrect] = useState(initialCorrect);

  useEffect(() => {
    setText(initialText);
    setIsCorrect(initialCorrect);
  }, [initialText, initialCorrect]);

  const handleSave = () => {
    onSave(text, isCorrect);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Option</h2>
        <label>
          Option Text:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <label>
          Is Correct:
          <input
            type="checkbox"
            checked={isCorrect}
            onChange={(e) => setIsCorrect(e.target.checked)}
          />
        </label>
        <div className="modal-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default OptionEditModal;