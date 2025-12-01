import "./DeckModal.css";

function DeckModal({ deckName, setDeckName, onSave, onClose }) {
  return (
    <div className="cardModal">
      <button className="exitButton" onClick={onClose}>✕</button>
      <h1 className="modalTitle">Change Deck Name</h1>
      <button className="saveButton" onClick={onSave}>Save</button>
      <form className="modalForm">
        <h2 className="inputTitle">Deck Name</h2>
        <input className="textInput" type="text" value={deckName} onChange={(e) => setDeckName(e.target.value)} required />
      </form>
    </div>
  );
}
 
export default DeckModal;