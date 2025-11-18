import "./CardModal.css";

function CardModal({ frontInput, backInput, setFrontInput, setBackInput, onSave, isEditing, onClose }) {
  return (
    <div className="cardModal">
      <button className="exitButton" onClick={onClose}>✕</button>
      <h1 className="modalTitle">{isEditing ? "Edit Card" : "Add New Card"}</h1>
      <button className="saveButton" onClick={onSave}>Save</button>
      <form className="modalForm">
        <h2 className="inputTitle">Front Side</h2>
        <input className="textInput" type="text" value={frontInput} onChange={(e) => setFrontInput(e.target.value)} required />
        <h2 className="inputTitle">Back Side</h2>
        <input className="textInput" type="text" value={backInput} onChange={(e) => setBackInput(e.target.value)} required />
      </form>
    </div>
  );
}

export default CardModal;