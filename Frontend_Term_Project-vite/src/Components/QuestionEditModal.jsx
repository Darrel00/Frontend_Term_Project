import { useState, useEffect } from 'react';
import './OptionEditModal.css'; // Reuse styles for modal

const QuestionEditModal = ({ isOpen, onClose, initialText, onSave }) => {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    setText(initialText);
  }, [initialText]);

  const handleSave = () => {
    onSave(text);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Rename Question</h2>
        <label>
          Question Text:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
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

export default QuestionEditModal;