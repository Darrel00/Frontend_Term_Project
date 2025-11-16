import "./DeckModal.css";

function DeckModal(){
    return (
        <div className="cardModal">
            <h1 className="modalTitle">Add A New Flashcard Deck</h1>
            <button className="saveButton">Save</button>
            <form className="modalForm">
                <h2 className="inputTitle">Deck Name</h2>
                <input className="textInput" type="text"></input>
            </form>
        </div>
    );
}

export default DeckModal